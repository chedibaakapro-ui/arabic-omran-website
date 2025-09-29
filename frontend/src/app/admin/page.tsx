"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AdminLogin from "@/components/admin/AdminLogin";
import { authAPI, newsAPI, projectsAPI } from "@/lib/api";

interface Admin {
  id: string;
  email: string;
  name: string | null;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  createdAt: string;
  author: string;
  readTime: string;
}

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  description?: string;
  createdAt: string;
}

export default function AdminPage() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'news' | 'projects'>('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          setIsLoading(false);
          return;
        }
        
        const response = await authAPI.verify(token);
        setAdmin(response.admin);
      } catch (error) {
        console.log('No valid admin session');
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = (adminData: Admin, token: string) => {
    localStorage.setItem('authToken', token);
    setAdmin(adminData);
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('authToken');
      setAdmin(null);
      setActiveTab('dashboard');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-omran-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-omran-teal mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحقق من صحة تسجيل الدخول...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!admin) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-omran-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 className="text-2xl font-bold text-omran-teal">لوحة تحكم الإدارة</h1>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">مرحباً، {admin.name || admin.email}</span>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse px-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard'
                    ? 'border-omran-teal text-omran-teal'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'news'
                    ? 'border-omran-teal text-omran-teal'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                إدارة الأخبار
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'projects'
                    ? 'border-omran-teal text-omran-teal'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                إدارة المشاريع
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'news' && <EnhancedNewsManager />}
          {activeTab === 'projects' && <EnhancedProjectsManager />}
        </div>
      </div>
    </div>
  );
}

// Dashboard Overview Component
function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-omran-teal mb-4">مرحباً بك في لوحة التحكم</h2>
        <p className="text-gray-600 mb-6">
          يمكنك من هنا إدارة محتوى مجلة عمران، إضافة وتعديل وحذف الأخبار والمشاريع العقارية.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-omran-light p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-omran-teal mb-2">إدارة الأخبار</h3>
            <p className="text-gray-600 mb-4">إدارة شاملة للأخبار العقارية</p>
            <p className="text-sm text-gray-500">
              • إضافة مقالات جديدة<br />
              • تحرير المحتوى الموجود<br />
              • حذف الأخبار غير المرغوبة<br />
              • نشر أو إخفاء الأخبار
            </p>
          </div>
          
          <div className="bg-omran-light p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-omran-teal mb-2">إدارة المشاريع</h3>
            <p className="text-gray-600 mb-4">إدارة شاملة للمشاريع العقارية</p>
            <p className="text-sm text-gray-500">
              • إضافة مشاريع جديدة<br />
              • تحديث تفاصيل المشاريع<br />
              • حذف المشاريع القديمة<br />
              • إدارة الصور والأسعار
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced News Manager Component
function EnhancedNewsManager() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    category: "أخبار السوق"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Load news on component mount
  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await newsAPI.getAll();
      setNews(response.news || []);
    } catch (error) {
      console.error("Failed to load news:", error);
      setError("فشل في تحميل الأخبار");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.summary || !formData.content) {
      setError("جميع الحقول مطلوبة");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError("يرجى تسجيل الدخول مرة أخرى");
        return;
      }

      if (editingNews) {
        // Update existing news
        const response = await newsAPI.update(editingNews.id, formData, token);
        setNews(news.map(item => item.id === editingNews.id ? response : item));
        setSuccessMessage("تم تحديث الخبر بنجاح!");
        setEditingNews(null);
      } else {
        // Create new news
        const response = await newsAPI.create(formData, token);
        setNews([response, ...news]);
        setSuccessMessage("تم إضافة الخبر بنجاح!");
      }
      
      resetForm();
      setShowForm(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : "فشل في حفظ الخبر");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (newsItem: any) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      summary: newsItem.summary,
      content: newsItem.content,
      category: newsItem.category
    });
    setShowForm(true);
  };

  const handleDelete = async (newsId: string) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الخبر؟")) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError("يرجى تسجيل الدخول مرة أخرى");
        return;
      }

      await newsAPI.delete(newsId, token);
      setNews(news.filter(item => item.id !== newsId));
      setSuccessMessage("تم حذف الخبر بنجاح!");
    } catch (error) {
      setError("فشل في حذف الخبر");
    }
  };

  const resetForm = () => {
    setFormData({ title: "", summary: "", content: "", category: "أخبار السوق" });
    setEditingNews(null);
    setError("");
  };

  const handleCancelEdit = () => {
    resetForm();
    setShowForm(false);
  };

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-omran-teal">إدارة الأخبار</h2>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white"
          >
            {showForm ? "إلغاء" : "إضافة خبر جديد"}
          </Button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        {/* Add/Edit News Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-omran-teal">
              {editingNews ? "تحرير الخبر" : "إضافة خبر جديد"}
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-right">العنوان</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                dir="rtl"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الفئة</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
              >
                <option value="أخبار السوق">أخبار السوق</option>
                <option value="مشاريع جديدة">مشاريع جديدة</option>
                <option value="تحليلات">تحليلات</option>
                <option value="استثمار">استثمار</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الملخص</label>
              <textarea
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                rows={3}
                dir="rtl"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-right">المحتوى</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                rows={6}
                dir="rtl"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-omran-teal hover:bg-omran-teal/90 text-white"
              >
                {isLoading ? "جاري الحفظ..." : editingNews ? "تحديث الخبر" : "إضافة الخبر"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancelEdit}
              >
                إلغاء
              </Button>
            </div>
          </form>
        )}

        {/* News List */}
        <div>
          <h3 className="text-lg font-bold text-omran-teal mb-4">الأخبار المحفوظة ({news.length})</h3>
          {news.length === 0 ? (
            <p className="text-gray-600 text-center py-8">لا توجد أخبار محفوظة</p>
          ) : (
            <div className="space-y-3">
              {news.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-omran-teal">{article.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{article.summary}</p>
                      <div className="text-xs text-gray-500 mt-2">
                        {article.category} • {new Date(article.createdAt).toLocaleDateString('ar-SA')}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        onClick={() => handleEdit(article)}
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        تحرير
                      </Button>
                      <Button
                        onClick={() => handleDelete(article.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced Projects Manager Component  
function EnhancedProjectsManager() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "سكني",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Load projects on component mount
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      setProjects(response.projects || []);
    } catch (error) {
      console.error("Failed to load projects:", error);
      setError("فشل في تحميل المشاريع");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.location || !formData.price) {
      setError("العنوان والموقع والسعر مطلوبة");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError("يرجى تسجيل الدخول مرة أخرى");
        return;
      }

      if (editingProject) {
        // Update existing project
        const response = await projectsAPI.update(editingProject.id, formData, token);
        setProjects(projects.map(item => item.id === editingProject.id ? response : item));
        setSuccessMessage("تم تحديث المشروع بنجاح!");
        setEditingProject(null);
      } else {
        // Create new project
        const response = await projectsAPI.create(formData, token);
        setProjects([response, ...projects]);
        setSuccessMessage("تم إضافة المشروع بنجاح!");
      }
      
      resetForm();
      setShowForm(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : "فشل في حفظ المشروع");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      location: project.location,
      price: project.price,
      type: project.type,
      description: project.description || ""
    });
    setShowForm(true);
  };

  const handleDelete = async (projectId: string) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المشروع؟")) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError("يرجى تسجيل الدخول مرة أخرى");
        return;
      }

      await projectsAPI.delete(projectId, token);
      setProjects(projects.filter(item => item.id !== projectId));
      setSuccessMessage("تم حذف المشروع بنجاح!");
    } catch (error) {
      setError("فشل في حذف المشروع");
    }
  };

  const resetForm = () => {
    setFormData({ title: "", location: "", price: "", type: "سكني", description: "" });
    setEditingProject(null);
    setError("");
  };

  const handleCancelEdit = () => {
    resetForm();
    setShowForm(false);
  };

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-omran-teal">إدارة المشاريع</h2>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white"
          >
            {showForm ? "إلغاء" : "إضافة مشروع جديد"}
          </Button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        {/* Add/Edit Project Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-omran-teal">
              {editingProject ? "تحرير المشروع" : "إضافة مشروع جديد"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-right">اسم المشروع</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                  dir="rtl"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الموقع</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                  dir="rtl"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-right">السعر</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                  dir="rtl"
                  placeholder="من 850,000 ريال"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-right">نوع المشروع</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                >
                  <option value="سكني">سكني</option>
                  <option value="تجاري">تجاري</option>
                  <option value="مجمع سكني">مجمع سكني</option>
                  <option value="فندقي">فندقي</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-right">الوصف (اختياري)</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                rows={3}
                dir="rtl"
                placeholder="وصف تفصيلي للمشروع..."
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-omran-teal hover:bg-omran-teal/90 text-white"
              >
                {isLoading ? "جاري الحفظ..." : editingProject ? "تحديث المشروع" : "إضافة المشروع"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancelEdit}
              >
                إلغاء
              </Button>
            </div>
          </form>
        )}

        {/* Projects List */}
        <div>
          <h3 className="text-lg font-bold text-omran-teal mb-4">المشاريع المحفوظة ({projects.length})</h3>
          {projects.length === 0 ? (
            <p className="text-gray-600 text-center py-8">لا توجد مشاريع محفوظة</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-omran-teal mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">📍 {project.location}</p>
                  <p className="text-sm font-semibold text-omran-gold mb-2">{project.price}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    {project.type} • {new Date(project.createdAt).toLocaleDateString('ar-SA')}
                  </div>
                  {project.description && (
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  )}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(project)}
                      variant="outline"
                      size="sm"
                      className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      تحرير
                    </Button>
                    <Button
                      onClick={() => handleDelete(project.id)}
                      variant="outline"
                      size="sm"
                      className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                    >
                      حذف
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}