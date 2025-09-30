"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher2 from "@/components/LanguageSwitcher2";

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleSubscribe = () => {
    setShowSubscribeModal(true);
  };

  const handleContact = () => {
    setShowContactModal(true);
  };

  // Team members with locale-aware content
  const teamMembers = [
    {
      name: locale === 'ar' ? "أحمد العبدالله" : "Ahmed Al-Abdullah",
      position: locale === 'ar' ? "رئيس التحرير" : "Editor in Chief",
      description: locale === 'ar' 
        ? "خبير في السوق العقاري السعودي بخبرة تزيد عن 15 عاماً" 
        : "Expert in the Saudi real estate market with over 15 years of experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80&fm=webp"
    },
    {
      name: locale === 'ar' ? "فاطمة المطيري" : "Fatima Al-Mutairi",
      position: locale === 'ar' ? "محررة أولى" : "Senior Editor",
      description: locale === 'ar'
        ? "متخصصة في التحليلات الاستثمارية والدراسات الاقتصادية"
        : "Specialist in investment analysis and economic studies",
      image: "https://images.unsplash.com/photo-1494790108755-2616c24671e5?w=150&h=150&fit=crop&auto=format&q=80&fm=webp"
    },
    {
      name: locale === 'ar' ? "خالد الشهراني" : "Khaled Al-Shahrani",
      position: locale === 'ar' ? "محلل عقاري" : "Real Estate Analyst",
      description: locale === 'ar'
        ? "خبير في تقييم المشاريع العقارية ودراسات الجدوى"
        : "Expert in real estate project evaluation and feasibility studies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80&fm=webp"
    }
  ];

  const values = [
    { title: t('about.values.transparency.title'), description: t('about.values.transparency.description') },
    { title: t('about.values.expertise.title'), description: t('about.values.expertise.description') },
    { title: t('about.values.leadership.title'), description: t('about.values.leadership.description') },
    { title: t('about.values.credibility.title'), description: t('about.values.credibility.description') },
    { title: t('about.values.quality.title'), description: t('about.values.quality.description') },
    { title: t('about.values.innovation.title'), description: t('about.values.innovation.description') }
  ];

  const stats = [
    { number: "50K+", label: t('about.stats.readers') },
    { number: "500+", label: t('about.stats.projects') },
    { number: "100+", label: t('about.stats.reports') },
    { number: "25+", label: t('about.stats.partners') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleSubscribe}
              className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
            >
              {t('common.subscribe')}
            </Button>
            <LanguageSwitcher2 />
          </div>

          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-omran-teal">{t('nav.home')}</Link>
            <Link href={`/${locale}/projects`} className="text-gray-700 hover:text-omran-teal">{t('nav.projects')}</Link>
            <Link href={`/${locale}/news`} className="text-gray-700 hover:text-omran-teal">{t('nav.news')}</Link>
            <Link href={`/${locale}/about`} className="text-omran-teal font-semibold">{t('nav.about')}</Link>
          </nav>

          <div className="flex items-center">
            <Link href={`/${locale}`}>
              <OmranLogo />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-omran-light py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className={`lg:w-1/2 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl font-bold text-omran-teal mb-6">{t('about.pageTitle')}</h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t('about.intro')}
              </p>
            </div>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format&q=80&fm=webp"
                  alt="Omran Magazine Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
              <div className="w-16 h-16 bg-omran-teal rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-omran-teal mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
              <div className="w-16 h-16 bg-omran-gold rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-omran-teal mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">{t('about.values.title')}</h2>
            <p className="text-gray-600 text-lg">{t('about.values.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                <div className="w-12 h-12 bg-omran-teal/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-omran-teal rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-omran-teal mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-600 text-lg">{t('about.team.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-omran-teal">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('about.stats.title')}</h2>
            <p className="text-gray-300 text-lg">{t('about.stats.description')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-omran-gold mb-2">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-omran-teal mb-4">
            {t('about.contact.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t('about.contact.description')}
          </p>
          <Button 
            onClick={handleContact}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg"
          >
            {t('about.contact.button')}
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
                <p>
                  <a href="mailto:contact@omranmagazine.com" className="hover:text-omran-gold">
                    contact@omranmagazine.com
                  </a>
                </p>
                <p>{t('footer.location')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">{t('footer.copyright')}</p>
              
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

      {/* Modals */}
      {showSubscribeModal && (
        <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
      )}
      
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}

// Team Member Card Component
function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  const t = useTranslations();

  const handleViewProfile = () => {
    alert(`${member.name}\n${member.position}\n\n${member.description}`);
  };

  return (
    <div className="text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg cursor-pointer" onClick={handleViewProfile}>
        <Image
          src={member.image}
          alt={member.name}
          width={128}
          height={128}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-omran-teal mb-2">{member.name}</h3>
      <p className="text-omran-gold font-semibold mb-3">{member.position}</p>
      <p className="text-gray-600 text-sm mb-4">{member.description}</p>
      <Button
        onClick={handleViewProfile}
        variant="outline"
        size="sm"
        className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"
      >
        {t('about.team.viewProfile')}
      </Button>
    </div>
  );
}

// Subscribe Modal Component
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

// Contact Modal Component
function ContactModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations('contactModal');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(`${formData.name} - ${formData.email}`);
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-omran-teal">{t('title')}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t('fields.name')}
            className="w-full p-3 border border-gray-300 rounded-md text-right"
            dir="rtl"
          />
          
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t('fields.email')}
            className="w-full p-3 border border-gray-300 rounded-md text-right"
            dir="rtl"
          />
          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('fields.phone')}
            className="w-full p-3 border border-gray-300 rounded-md text-right"
            dir="rtl"
          />
          
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('fields.subject')}
            className="w-full p-3 border border-gray-300 rounded-md text-right"
            dir="rtl"
          />
          
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={t('fields.message')}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md text-right resize-vertical"
            dir="rtl"
          />
          
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting} className="flex-1 bg-omran-teal hover:bg-omran-teal/90 text-white">
              {isSubmitting ? t('sending') : t('sendButton')}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t('cancel')}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>{t('orContact')}</p>
          <p className="mt-2">
            <a href="mailto:contact@omranmagazine.com" className="text-omran-teal hover:underline">
              contact@omranmagazine.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Logo component
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

// Needed for type inference
const teamMembers = [{
  name: "",
  position: "",
  description: "",
  image: ""
}];