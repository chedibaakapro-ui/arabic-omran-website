"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projectsAPI } from "@/lib/api";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher2 from "@/components/LanguageSwitcher2";
import { useParams } from 'next/navigation';

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

export default function ProjectDetailPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const projectId = params.id as string;
  
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setIsLoading(true);
        const data = await projectsAPI.getById(projectId);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
        setError(t('common.error'));
      } finally {
        setIsLoading(false);
      }
    };

    if (projectId) {
      loadProject();
    }
  }, [projectId, t]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-omran-teal mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg max-w-md mx-auto">
            <p>{error || t('common.error')}</p>
            <Link href={`/${locale}/projects`}>
              <Button className="mt-4 bg-omran-teal hover:bg-omran-teal/90 text-white px-4 py-2 rounded">
                {t('nav.projects')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const displayDate = new Date(project.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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

      {/* Breadcrumbs */}
      <section className="bg-omran-light py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-omran-teal">{t('nav.home')}</Link>
            <span>/</span>
            <Link href={`/${locale}/projects`} className="hover:text-omran-teal">{t('nav.projects')}</Link>
            <span>/</span>
            <span className="text-omran-teal">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Column */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.image || 'https://images.unsplash.com/photo-1565100952085-229da4491afc?w=800&h=600&fit=crop'}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1565100952085-229da4491afc?w=800&h=600&fit=crop';
                  }}
                />
              </div>
              
              {/* Type Badge */}
              <div className="flex justify-center">
                <span className="inline-block bg-omran-teal text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div className="space-y-6">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-omran-teal">
                {project.title}
              </h1>

              {/* Price */}
              <div className="bg-omran-light p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">{locale === 'ar' ? 'السعر' : 'Price'}</p>
                <p className="text-3xl font-bold text-omran-gold">{project.price}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <svg className="w-6 h-6 text-omran-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">{locale === 'ar' ? 'الموقع' : 'Location'}</p>
                  <p className="text-lg font-semibold text-gray-800">{project.location}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <svg className="w-6 h-6 text-omran-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">{locale === 'ar' ? 'تاريخ النشر' : 'Published Date'}</p>
                  <p className="text-lg font-semibold text-gray-800">{displayDate}</p>
                </div>
              </div>

              {/* Description */}
              {project.description && (
                <div className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h2 className="text-xl font-bold text-omran-teal mb-4">
                    {locale === 'ar' ? 'الوصف' : 'Description'}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href={`/${locale}/projects`}>
              <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full">
                ← {t('nav.projects')}
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-omran-teal mb-4">
            {t('projects.cta.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {t('projects.cta.description')}
          </p>
          <Button 
            onClick={() => setShowSubscribeModal(true)}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg"
          >
            {t('common.subscribe')}
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
              <p className="text-gray-300 text-sm">{t('footer.description')}</p>
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
                <p><a href="mailto:contact@omranmagazine.com" className="hover:text-omran-gold">contact@omranmagazine.com</a></p>
                <p>{t('footer.location')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">{t('footer.copyright')}</p>
              <Link href={`/${locale}/admin`}>
                <Button variant="outline" size="sm" className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white text-xs">
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

      {showSubscribeModal && <SubscribeModal onClose={() => setShowSubscribeModal(false)} />}
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
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        <p className="text-gray-600 mb-6">{t('subscribeModal.description')}</p>
        <form onSubmit={handleSubmit}>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('subscribeModal.placeholder')} className="w-full p-3 border border-gray-300 rounded-md mb-4 text-right" dir="rtl" />
          <div className="flex gap-3">
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-omran-teal hover:bg-omran-teal/90 text-white">
              {isSubmitting ? t('subscribeModal.subscribing') : t('subscribeModal.subscribeButton')}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
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