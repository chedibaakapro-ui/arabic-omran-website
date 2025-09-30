"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { newsAPI, projectsAPI } from "@/lib/api";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher2 from "@/components/LanguageSwitcher2";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    price: string;
    type: string;
    image: string;
    createdAt: string;
  };
  getProjectImage: (project: ProjectCardProps['project'], index: number) => string;
  index: number;
}

interface NewsCardProps {
  article: {
    id: string;
    title: string;
    summary: string;
    createdAt: string;
    category: string;
    image: string;
    author: string;
    readTime: string;
  };
  getNewsImage: (article: NewsCardProps['article'], index: number) => string;
  index: number;
}

interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  createdAt: string;
}

interface LatestNews {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);
  const [latestNews, setLatestNews] = useState<LatestNews[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [isLoadingNews, setIsLoadingNews] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await projectsAPI.getAll();
        setFeaturedProjects((response.projects || []).slice(0, 3));
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setIsLoadingProjects(false);
      }
    };

    const loadNews = async () => {
      try {
        const response = await newsAPI.getAll();
        setLatestNews((response.news || []).slice(0, 3));
      } catch (error) {
        console.error("Failed to load news:", error);
      } finally {
        setIsLoadingNews(false);
      }
    };

    loadProjects();
    loadNews();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubscribeMessage(t('home.newsletter.errorMessage'));
      return;
    }

    setIsSubscribing(true);
    setTimeout(() => {
      setSubscribeMessage(t('home.newsletter.successMessage'));
      setEmail("");
      setIsSubscribing(false);
      setTimeout(() => setSubscribeMessage(""), 5000);
    }, 1000);
  };

  const handleSubscribeClick = () => {
    setShowSubscribeModal(true);
  };

  const getProjectImage = (project: FeaturedProject, index: number) => {
    if (project.image && project.image !== '') {
      return project.image;
    }
    
    const defaultImages = {
      'سكني': [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
      ],
      'تجاري': [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
      ],
      'مجمع سكني': [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ],
      'فندقي': [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
      ]
    };

    const typeImages = defaultImages[project.type as keyof typeof defaultImages] || defaultImages['سكني'];
    return typeImages[index % typeImages.length];
  };

  const getNewsImage = (article: LatestNews, index: number) => {
    if (article.image && article.image !== '') {
      return article.image;
    }
    
    const defaultImages = [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&auto=format&q=80&fm=webp",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
    ];
    
    return defaultImages[index % defaultImages.length];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-omran-teal text-white py-3 px-4 text-center">
        <p className="text-sm">
          {t('home.banner')}
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleSubscribeClick}
              className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
            >
              {t('common.subscribe')}
            </Button>
            <LanguageSwitcher2 />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href={`/${locale}`} className="text-omran-teal font-semibold">{t('nav.home')}</Link>
            <Link href={`/${locale}/projects`} className="text-gray-700 hover:text-omran-teal">{t('nav.projects')}</Link>
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

      {/* Hero Section */}
      <section className="bg-omran-light py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80&fm=webp"
                  alt="Modern Saudi Arabian architecture"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-omran-teal/20 to-transparent"></div>
              </div>
            </div>

            <div className={`lg:w-1/2 lg:order-0 lg:pr-8 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-gray-600 text-xl md:text-2xl mb-10 leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${locale === 'ar' ? 'justify-end' : 'justify-start'}`}>
                <Link href={`/${locale}/projects`}>
                  <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg w-full sm:w-auto">
                    {t('home.hero.browseProjects')}
                  </Button>
                </Link>
                <Link href={`/${locale}/news`}>
                  <Button 
                    variant="outline" 
                    className="border-omran-gold text-omran-gold hover:bg-omran-gold hover:text-white px-8 py-3 rounded-full text-lg"
                  >
                    {t('home.hero.readNews')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">{t('home.featuredProjects.title')}</h2>
            <p className="text-gray-600 text-lg">
              {t('home.featuredProjects.description')}
            </p>
          </div>

          {isLoadingProjects && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-omran-teal mx-auto mb-4"></div>
              <p className="text-gray-600">{t('common.loading')}</p>
            </div>
          )}

          {!isLoadingProjects && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.length > 0 ? (
                featuredProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    getProjectImage={getProjectImage}
                    index={index}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600 mb-4">{t('common.noData')}</p>
                  <Link href={`/${locale}/admin`}>
                    <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full">
                      {t('admin.projects.addNew')}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href={`/${locale}/projects`}>
              <Button className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full">
                {t('home.featuredProjects.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">{t('home.newsletter.title')}</h2>
            <p className="text-gray-600 text-lg">
              {t('home.newsletter.description')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('home.newsletter.placeholder')}
                    className="text-right h-12"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 h-12 rounded-md"
                >
                  {isSubscribing ? t('home.newsletter.sending') : t('home.newsletter.subscribeButton')}
                </Button>
              </div>
            </form>
            
            {subscribeMessage && (
              <div className={`mt-4 p-3 rounded-md text-center ${
                subscribeMessage.includes(t('home.newsletter.successMessage').substring(0, 5)) 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {subscribeMessage}
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              {t('home.newsletter.privacyNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">{t('home.latestNews.title')}</h2>
            <p className="text-gray-600">{t('home.latestNews.description')}</p>
          </div>

          {isLoadingNews && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-omran-teal mx-auto mb-4"></div>
              <p className="text-gray-600">{t('common.loading')}</p>
            </div>
          )}

          {!isLoadingNews && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.length > 0 ? (
                latestNews.map((article, index) => (
                  <NewsCard 
                    key={article.id} 
                    article={article} 
                    getNewsImage={getNewsImage}
                    index={index}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-600 mb-4">{t('common.noData')}</p>
                  <Link href={`/${locale}/admin`}>
                    <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full">
                      {t('admin.news.addNew')}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href={`/${locale}/news`}>
              <Button className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full">
                {t('home.latestNews.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omran-teal text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <OmranLogo isDark />
              </div>
              <p className="text-gray-300 text-sm">
                {t('footer.description')}
              </p>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">{t('footer.content')}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href={`/${locale}/projects`} className="hover:text-omran-gold">{t('nav.projects')}</Link></li>
                <li><Link href={`/${locale}/news`} className="hover:text-omran-gold">{t('nav.news')}</Link></li>
                <li><a href="#newsletter" className="hover:text-omran-gold cursor-pointer">{t('home.newsletter.title')}</a></li>
              </ul>
            </div>

            <div className="text-center md:text-right">
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

function ProjectCard({ project, getProjectImage, index }: ProjectCardProps) {
  const t = useTranslations();
  const locale = useLocale();

  const handleViewDetails = () => {
    const displayDate = new Date(project.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    alert(`${project.title}\n\n${project.location}\n${project.price}\n${project.type}\n${displayDate}`);
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

function NewsCard({ article, getNewsImage, index }: NewsCardProps) {
  const t = useTranslations();
  const locale = useLocale();

  const handleReadMore = () => {
    const displayDate = new Date(article.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    alert(`${article.title}\n\n${article.category}\n${displayDate}\n${article.author}\n\n${article.summary}`);
  };

  const displayDate = new Date(article.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day:'numeric',
    });

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getNewsImage(article, index)}
          alt={article.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-omran-gold/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-omran-teal mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{displayDate}</span>
          <Button 
            variant="ghost" 
            onClick={handleReadMore}
            className="text-omran-teal hover:text-omran-gold p-0 h-auto"
          >
            {t('common.readMore')}
          </Button>
        </div>
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
      alert(t('home.newsletter.successMessage'));
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
