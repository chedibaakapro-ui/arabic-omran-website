"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projectsAPI } from "@/lib/api";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher2 from "@/components/LanguageSwitcher2";

interface Project {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  description?: string;
  createdAt: string;
}

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const response = await projectsAPI.getAll();
        setAllProjects(response.projects || []);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setError(t('common.error'));
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [t]);

  const getProjectTypeMapping = (filter: string) => {
    const typeMap: { [key: string]: string[] } = {
      'residential': ['سكني', 'Residential'],
      'commercial': ['تجاري', 'Commercial'],
      'mixed': ['مجمع سكني', 'Mixed-Use'],
      'hotel': ['فندقي', 'Hotel']
    };
    
    for (const [key, values] of Object.entries(typeMap)) {
      if (values.some(v => v.toLowerCase() === filter.toLowerCase())) {
        return values;
      }
    }
    return [filter];
  };

  const filteredProjects = selectedFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => {
        const matchingTypes = getProjectTypeMapping(selectedFilter);
        return matchingTypes.some(type => 
          project.type.toLowerCase() === type.toLowerCase()
        );
      });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setVisibleProjects(PROJECTS_PER_PAGE);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + PROJECTS_PER_PAGE, filteredProjects.length));
  };

  const handleContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    alert(t('projects.cta.description'));
  };

  const getProjectImage = (project: Project, index: number) => {
    if (project.image && project.image !== '') {
      return project.image;
    }
    
    // Saudi Arabian real estate images by project type
    const defaultImages = {
      'سكني': [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ],
      'تجاري': [
        "https://images.unsplash.com/photo-1585665805456-e87f0ec446f5?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1589395937772-e5380caebe6f?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ],
      'مجمع سكني': [
        "https://images.unsplash.com/photo-1549888834-3ec93abae044?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ],
      'فندقي': [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ]
    };

    const typeImages = defaultImages[project.type as keyof typeof defaultImages] || defaultImages['سكني'];
    return typeImages[index % typeImages.length];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setShowSubscribeModal(true)}
              className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
            >
              {t('common.subscribe')}
            </Button>
            <LanguageSwitcher2 />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-omran-teal">{t('nav.home')}</Link>
            <Link href={`/${locale}/projects`} className="text-omran-teal font-semibold">{t('nav.projects')}</Link>
            <Link href={`/${locale}/news`} className="text-gray-700 hover:text-omran-teal">{t('nav.news')}</Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-omran-teal">{t('nav.about')}</Link>
          </nav>

          <div className="flex items-center">
            <Link href={`/${locale}`}>
              <OmranLogo />
            </Link>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="bg-omran-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-omran-teal mb-4">{t('projects.pageTitle')}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('projects.pageDescription')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => handleFilterChange("all")}
              className={selectedFilter === "all" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              {t('projects.filters.all')} ({allProjects.length})
            </Button>
            <Button 
              variant={selectedFilter === "residential" ? "default" : "outline"}
              onClick={() => handleFilterChange("residential")}
              className={selectedFilter === "residential" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              {t('projects.filters.residential')}
            </Button>
            <Button 
              variant={selectedFilter === "commercial" ? "default" : "outline"}
              onClick={() => handleFilterChange("commercial")}
              className={selectedFilter === "commercial" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              {t('projects.filters.commercial')}
            </Button>
            <Button 
              variant={selectedFilter === "mixed" ? "default" : "outline"}
              onClick={() => handleFilterChange("mixed")}
              className={selectedFilter === "mixed" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              {t('projects.filters.mixed')}
            </Button>
            <Button 
              variant={selectedFilter === "hotel" ? "default" : "outline"}
              onClick={() => handleFilterChange("hotel")}
              className={selectedFilter === "hotel" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              {t('projects.filters.hotel')}
            </Button>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-omran-teal mx-auto mb-4"></div>
            <p className="text-gray-600">{t('common.loading')}</p>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg max-w-md mx-auto">
              <p>{error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-omran-teal hover:bg-omran-teal/90 text-white px-4 py-2 rounded"
              >
                {t('common.retry')}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      {!isLoading && !error && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">
                  {selectedFilter === "all" ? t('projects.noProjects') : t('projects.noProjectsInCategory', { type: t(`projects.filters.${selectedFilter}`) })}
                </p>
                {selectedFilter !== "all" && (
                  <Button 
                    onClick={() => handleFilterChange("all")}
                    className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
                  >
                    {t('projects.filters.all')}
                  </Button>
                )}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedProjects.map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      getProjectImage={getProjectImage}
                      index={index}
                    />
                  ))}
                </div>

                {hasMoreProjects && (
                  <div className="text-center mt-12">
                    <Button 
                      onClick={loadMoreProjects}
                      className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full"
                    >
                      {t('projects.loadMore', { count: filteredProjects.length - visibleProjects })}
                    </Button>
                  </div>
                )}

                {!hasMoreProjects && filteredProjects.length > PROJECTS_PER_PAGE && (
                  <div className="text-center mt-12">
                    <p className="text-gray-600">{t('projects.allShown', { count: filteredProjects.length })}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-omran-teal mb-4">
            {t('projects.cta.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t('projects.cta.description')}
          </p>
          <Button 
            onClick={handleContact}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg"
          >
            {t('projects.cta.button')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omran-teal text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
              <div className="flex items-center mb-4 justify-start">
                <OmranLogo isDark />
              </div>
              <p className="text-gray-300 text-sm">
                {t('footer.description')}
              </p>
            </div>

            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
              <h4 className="font-semibold text-white mb-4">{t('footer.content')}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href={`/${locale}/projects`} className="hover:text-omran-gold">{t('nav.projects')}</Link></li>
                <li><Link href={`/${locale}/news`} className="hover:text-omran-gold">{t('nav.news')}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-omran-gold">{t('nav.about')}</Link></li>
              </ul>
            </div>

            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
              <h4 className="font-semibold text-white mb-4">{t('footer.contact')}</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a 
                    href="mailto:contact@omranmagazine.com" 
                    className="hover:text-omran-gold"
                  >
                    contact@omranmagazine.com
                  </a>
                </p>
                <p>{t('footer.location')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                {t('footer.copyright')}
              </p>
              
              <Link href={`/${locale}/admin`}>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white text-xs"
                >
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  {t('footer.adminLogin')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {showSubscribeModal && (
        <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
      )}
    </div>
  );
}

function ProjectCard({ 
  project, 
  getProjectImage, 
  index 
}: { 
  project: Project;
  getProjectImage: (project: Project, index: number) => string;
  index: number;
}) {
  const t = useTranslations();
  const locale = useLocale();

  const handleViewDetails = () => {
    const displayDate = new Date(project.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    alert(`${project.title}\n\n${project.location}\n${project.price}\n${project.type}\n${displayDate}${project.description ? '\n\n' + project.description : ''}`);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getProjectImage(project, index)}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-omran-teal/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {project.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-omran-teal mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-gray-600 mb-2 flex items-center">
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {project.location}
        </p>
        <p className="text-omran-gold font-bold text-lg mb-4">{project.price}</p>
        <Button 
          onClick={handleViewDetails}
          className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white"
        >
          {t('common.viewDetails')}
        </Button>
      </div>
    </div>
  );
}

function SubscribeModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(t('subscribeModal.description'));
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-omran-teal">{t('subscribeModal.title')}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          {t('subscribeModal.description')}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('subscribeModal.placeholder')}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-right"
            dir="rtl"
          />
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-omran-teal hover:bg-omran-teal/90 text-white"
            >
              {isSubmitting ? t('subscribeModal.subscribing') : t('subscribeModal.subscribeButton')}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {t('subscribeModal.cancel')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function OmranLogo({ isDark = false }: { isDark?: boolean }) {
  const primaryColor = isDark ? "#DDAF37" : "#1B4848";
  const secondaryColor = isDark ? "#FFFFFF" : "#DDAF37";
  
  return (
    <div className="flex items-center space-x-3 space-x-reverse">
      <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0">
        <rect x="4" y="20" width="12" height="16" fill={primaryColor} />
        <polygon points="4,20 10,12 16,20" fill={secondaryColor} />
        <rect x="18" y="16" width="10" height="20" fill={primaryColor} />
        <polygon points="18,16 23,8 28,16" fill={secondaryColor} />
        <rect x="30" y="24" width="8" height="12" fill={primaryColor} />
        <polygon points="30,24 34,18 38,24" fill={secondaryColor} />
        <circle cx="34" cy="30" r="1.5" fill={secondaryColor} />
        <rect x="20" y="28" width="6" height="1" fill={secondaryColor} />
        <rect x="6" y="32" width="8" height="1" fill={secondaryColor} />
      </svg>
      <div className="flex flex-col">
        <div className="text-xl font-bold" style={{ color: primaryColor }}>عمران</div>
        <div className="text-xs font-medium tracking-wider" style={{ color: secondaryColor }}>OMRAN</div>
      </div>
    </div>
  );
}