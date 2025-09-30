"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState, useEffect } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import { authAPI, newsAPI, projectsAPI } from "@/lib/api";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher2 from "@/components/LanguageSwitcher2";

export default function AdminPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "news" | "projects">("dashboard");

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    const storedAdmin = localStorage.getItem("adminData");
    
    if (storedToken && storedAdmin) {
      authAPI.verify(storedToken)
        .then(() => {
          setToken(storedToken);
          setAdmin(JSON.parse(storedAdmin));
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminData");
        });
    }
  }, []);

  const handleLoginSuccess = (adminData: any, authToken: string) => {
    setAdmin(adminData);
    setToken(authToken);
    setIsLoggedIn(true);
    localStorage.setItem("adminToken", authToken);
    localStorage.setItem("adminData", JSON.stringify(adminData));
  };

  const handleLogout = () => {
    authAPI.logout();
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    setIsLoggedIn(false);
    setAdmin(null);
    setToken("");
  };

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm py-4 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-omran-teal">{t('admin.dashboard.title')}</h1>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher2 />
            <div className="text-sm text-gray-600">
              {t('admin.dashboard.welcome')} <span className="font-semibold">{admin?.email}</span>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              {t('admin.dashboard.logout')}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "dashboard" 
                ? "border-omran-teal text-omran-teal" 
                : "border-transparent text-gray-600 hover:text-omran-teal"
            }`}
          >
            {t('admin.dashboard.tabs.dashboard')}
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "news" 
                ? "border-omran-teal text-omran-teal" 
                : "border-transparent text-gray-600 hover:text-omran-teal"
            }`}
          >
            {t('admin.dashboard.tabs.news')}
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === "projects" 
                ? "border-omran-teal text-omran-teal" 
                : "border-transparent text-gray-600 hover:text-omran-teal"
            }`}
          >
            {t('admin.dashboard.tabs.projects')}
          </button>
        </div>

        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "news" && <NewsTab token={token} />}
        {activeTab === "projects" && <ProjectsTab token={token} />}
      </div>
    </div>
  );
}

function DashboardTab() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-omran-light p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-omran-teal mb-4">{t('admin.dashboard.overview.title')}</h2>
        <p className="text-gray-600 mb-6">
          {t('admin.dashboard.overview.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href={`/${locale}`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="text-omran-teal font-semibold mb-2">{t('nav.home')}</div>
            <div className="text-sm text-gray-600">View homepage</div>
          </Link>
          <Link href={`/${locale}/news`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="text-omran-teal font-semibold mb-2">{t('nav.news')}</div>
            <div className="text-sm text-gray-600">View all news</div>
          </Link>
          <Link href={`/${locale}/projects`} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="text-omran-teal font-semibold mb-2">{t('nav.projects')}</div>
            <div className="text-sm text-gray-600">View all projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NewsTab({ token }: { token: string }) {
  const t = useTranslations();
  const [news, setNews] = useState<any[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "أخبار السوق",
    summary: "",
    content: ""
  });

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await newsAPI.getAll();
      setNews(response.news || []);
    } catch (error) {
      console.error("Failed to load news:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.summary || !formData.content) {
      alert(t('admin.news.messages.errorRequired'));
      return;
    }

    try {
      if (editingId) {
        await newsAPI.update(editingId, formData, token);
        alert(t('admin.news.messages.updated'));
      } else {
        await newsAPI.create(formData, token);
        alert(t('admin.news.messages.created'));
      }
      
      setFormData({ title: "", category: "أخبار السوق", summary: "", content: "" });
      setIsCreating(false);
      setEditingId(null);
      loadNews();
    } catch (error) {
      console.error("Failed to save news:", error);
      alert("Failed to save news");
    }
  };

  const handleEdit = (article: any) => {
    setFormData({
      title: article.title,
      category: article.category,
      summary: article.summary,
      content: article.content
    });
    setEditingId(article.id);
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.news.actions.confirmDelete'))) return;
    
    try {
      await newsAPI.delete(id, token);
      alert(t('admin.news.messages.deleted'));
      loadNews();
    } catch (error) {
      console.error("Failed to delete news:", error);
      alert("Failed to delete news");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-omran-teal">{t('admin.news.title')}</h2>
        <Button 
          onClick={() => {
            setIsCreating(!isCreating);
            setEditingId(null);
            setFormData({ title: "", category: "أخبار السوق", summary: "", content: "" });
          }}
          className="bg-omran-teal hover:bg-omran-teal/90 text-white"
        >
          {isCreating ? t('common.cancel') : t('admin.news.addNew')}
        </Button>
      </div>

      {isCreating && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-omran-teal mb-4">
            {editingId ? t('admin.news.edit') : t('admin.news.create')}
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label>{t('admin.news.fields.title')}</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div>
              <Label>{t('admin.news.fields.category')}</Label>
              <RadioGroup 
                value={formData.category}
                onValueChange={(value) => setFormData({...formData, category: value})}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="أخبار السوق" id="market" />
                  <Label htmlFor="market">{t('news.categories.market')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="مشاريع جديدة" id="projects" />
                  <Label htmlFor="projects">{t('news.categories.newProjects')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="تحليلات" id="analysis" />
                  <Label htmlFor="analysis">{t('news.categories.analysis')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="استثمار" id="investment" />
                  <Label htmlFor="investment">{t('news.categories.investment')}</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>{t('admin.news.fields.summary')}</Label>
              <Input
                value={formData.summary}
                onChange={(e) => setFormData({...formData, summary: e.target.value})}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div>
              <Label>{t('admin.news.fields.content')}</Label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                rows={6}
                className="w-full p-3 border rounded-md text-right"
                dir="rtl"
              />
            </div>

            <Button type="submit" className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white">
              {editingId ? t('admin.news.actions.update') : t('admin.news.actions.save')}
            </Button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-omran-teal mb-4">{t('admin.news.saved')}</h3>
        <div className="space-y-4">
          {news.map((article) => (
            <div key={article.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-omran-teal mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{article.category}</p>
                  <p className="text-sm text-gray-600">{article.summary}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleEdit(article)}
                    variant="outline"
                    size="sm"
                    className="border-omran-teal text-omran-teal"
                  >
                    {t('admin.news.actions.edit')}
                  </Button>
                  <Button 
                    onClick={() => handleDelete(article.id)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500"
                  >
                    {t('admin.news.actions.delete')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsTab({ token }: { token: string }) {
  const t = useTranslations();
  const [projects, setProjects] = useState<any[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "سكني",
    description: ""
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      setProjects(response.projects || []);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.location || !formData.price) {
      alert(t('admin.projects.messages.errorRequired'));
      return;
    }

    try {
      if (editingId) {
        await projectsAPI.update(editingId, formData, token);
        alert(t('admin.projects.messages.updated'));
      } else {
        await projectsAPI.create(formData, token);
        alert(t('admin.projects.messages.created'));
      }
      
      setFormData({ title: "", location: "", price: "", type: "سكني", description: "" });
      setIsCreating(false);
      setEditingId(null);
      loadProjects();
    } catch (error) {
      console.error("Failed to save project:", error);
      alert("Failed to save project");
    }
  };

  const handleEdit = (project: any) => {
    setFormData({
      title: project.title,
      location: project.location,
      price: project.price,
      type: project.type,
      description: project.description || ""
    });
    setEditingId(project.id);
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.projects.actions.confirmDelete'))) return;
    
    try {
      await projectsAPI.delete(id, token);
      alert(t('admin.projects.messages.deleted'));
      loadProjects();
    } catch (error) {
      console.error("Failed to delete project:", error);
      alert("Failed to delete project");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-omran-teal">{t('admin.projects.title')}</h2>
        <Button 
          onClick={() => {
            setIsCreating(!isCreating);
            setEditingId(null);
            setFormData({ title: "", location: "", price: "", type: "سكني", description: "" });
          }}
          className="bg-omran-teal hover:bg-omran-teal/90 text-white"
        >
          {isCreating ? t('common.cancel') : t('admin.projects.addNew')}
        </Button>
      </div>

      {isCreating && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-omran-teal mb-4">
            {editingId ? t('admin.projects.edit') : t('admin.projects.create')}
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label>{t('admin.projects.fields.title')}</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div>
              <Label>{t('admin.projects.fields.location')}</Label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div>
              <Label>{t('admin.projects.fields.price')}</Label>
              <Input
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder={t('admin.projects.fields.pricePlaceholder')}
                className="text-right"
                dir="rtl"
              />
            </div>

            <div>
              <Label>{t('admin.projects.fields.type')}</Label>
              <RadioGroup 
                value={formData.type}
                onValueChange={(value) => setFormData({...formData, type: value})}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="سكني" id="residential" />
                  <Label htmlFor="residential">{t('admin.projects.types.residential')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="تجاري" id="commercial" />
                  <Label htmlFor="commercial">{t('admin.projects.types.commercial')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="مجمع سكني" id="complex" />
                  <Label htmlFor="complex">{t('admin.projects.types.complex')}</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="فندقي" id="hotel" />
                  <Label htmlFor="hotel">{t('admin.projects.types.hotel')}</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>{t('admin.projects.fields.description')}</Label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                placeholder={t('admin.projects.fields.descriptionPlaceholder')}
                className="w-full p-3 border rounded-md text-right"
                dir="rtl"
              />
            </div>

            <Button type="submit" className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white">
              {editingId ? t('admin.projects.actions.update') : t('admin.projects.actions.save')}
            </Button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-omran-teal mb-4">{t('admin.projects.saved')}</h3>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-omran-teal mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">{t('admin.projects.fields.location')}:</span> {project.location}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">{t('admin.projects.fields.price')}:</span> {project.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{t('admin.projects.fields.type')}:</span> {project.type}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleEdit(project)}
                    variant="outline"
                    size="sm"
                    className="border-omran-teal text-omran-teal"
                  >
                    {t('admin.projects.actions.edit')}
                  </Button>
                  <Button 
                    onClick={() => handleDelete(project.id)}
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500"
                  >
                    {t('admin.projects.actions.delete')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}