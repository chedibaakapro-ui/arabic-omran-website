"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { newsAPI } from "@/lib/api";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

const NEWS_PER_PAGE = 6;

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleNews, setVisibleNews] = useState(NEWS_PER_PAGE);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [allNewsArticles, setAllNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Load news from API on component mount
  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const response = await newsAPI.getAll();
        setAllNewsArticles(response.news || []);
      } catch (error) {
        console.error("Failed to load news:", error);
        setError("فشل في تحميل الأخبار");
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  // Filter news based on selected category
  const filteredNews = selectedCategory === "all" 
    ? allNewsArticles 
    : allNewsArticles.filter(article => 
        article.category === selectedCategory
      );

  const displayedNews = filteredNews.slice(0, visibleNews);
  const hasMoreNews = visibleNews < filteredNews.length;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleNews(NEWS_PER_PAGE);
  };

  const loadMoreNews = () => {
    setVisibleNews(prev => Math.min(prev + NEWS_PER_PAGE, filteredNews.length));
  };

  const handleSubscribe = () => {
    setShowSubscribeModal(true);
  };

  // Generate a default image for news articles without images
  const getNewsImage = (article: NewsArticle, index: number) => {
    if (article.image && article.image !== '') {
      return article.image;
    }
    
    // Use different default images based on category or index
    const defaultImages = [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80&fm=webp", 
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    ];
    
    return defaultImages[index % defaultImages.length];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            onClick={handleSubscribe}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
          >
            اشترك الآن
          </Button>

          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-omran-teal">الرئيسية</Link>
            <Link href="/projects" className="text-gray-700 hover:text-omran-teal">المشاريع</Link>
            <Link href="/news" className="text-omran-teal font-semibold">الأخبار</Link>
            <Link href="/about" className="text-gray-700 hover:text-omran-teal">من نحن</Link>
          </nav>

          <div className="flex items-center">
            <Link href="/">
              <OmranLogo />
            </Link>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="bg-omran-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-omran-teal mb-4">آخر الأخبار</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تابع أحدث التطورات والأخبار في السوق العقاري السعودي والاستثمارات العقارية من خبراء مجلة عمران
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => handleCategoryChange("all")}
              className={selectedCategory === "all" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              جميع الأخبار ({allNewsArticles.length})
            </Button>
            <Button 
              variant={selectedCategory === "أخبار السوق" ? "default" : "outline"}
              onClick={() => handleCategoryChange("أخبار السوق")}
              className={selectedCategory === "أخبار السوق" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              أخبار السوق
            </Button>
            <Button 
              variant={selectedCategory === "مشاريع جديدة" ? "default" : "outline"}
              onClick={() => handleCategoryChange("مشاريع جديدة")}
              className={selectedCategory === "مشاريع جديدة" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              مشاريع جديدة
            </Button>
            <Button 
              variant={selectedCategory === "تحليلات" ? "default" : "outline"}
              onClick={() => handleCategoryChange("تحليلات")}
              className={selectedCategory === "تحليلات" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              تحليلات
            </Button>
            <Button 
              variant={selectedCategory === "استثمار" ? "default" : "outline"}
              onClick={() => handleCategoryChange("استثمار")}
              className={selectedCategory === "استثمار" ? "bg-omran-teal text-white" : "border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white"}
            >
              استثمار
            </Button>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-omran-teal mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل الأخبار...</p>
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
                إعادة المحاولة
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Featured News */}
      {!isLoading && !error && selectedCategory === "all" && allNewsArticles.length > 0 && (
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-omran-teal mb-8 text-center">الأخبار المميزة</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <FeaturedNewsCard article={allNewsArticles[0]} getNewsImage={getNewsImage} index={0} large />
              <div className="space-y-6">
                {allNewsArticles.slice(1, 3).map((article, index) => (
                  <FeaturedNewsCard 
                    key={article.id} 
                    article={article} 
                    getNewsImage={getNewsImage}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      {!isLoading && !error && (
        <section className="py-16 px-4 bg-omran-light">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-omran-teal mb-8 text-center">
              {selectedCategory === "all" ? "جميع الأخبار" : selectedCategory}
            </h2>
            
            {filteredNews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">
                  {selectedCategory === "all" ? "لا توجد أخبار متاحة حالياً" : `لا توجد أخبار في فئة "${selectedCategory}"`}
                </p>
                {selectedCategory !== "all" && (
                  <Button 
                    onClick={() => handleCategoryChange("all")}
                    className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
                  >
                    عرض جميع الأخبار
                  </Button>
                )}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedNews.map((article, index) => (
                    <NewsCard 
                      key={article.id} 
                      article={article} 
                      getNewsImage={getNewsImage}
                      index={index}
                    />
                  ))}
                </div>

                {/* Load More */}
                {hasMoreNews && (
                  <div className="text-center mt-12">
                    <Button 
                      onClick={loadMoreNews}
                      className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full"
                    >
                      عرض المزيد من الأخبار ({filteredNews.length - visibleNews} متبقي)
                    </Button>
                  </div>
                )}

                {/* Show message when no more news */}
                {!hasMoreNews && filteredNews.length > NEWS_PER_PAGE && (
                  <div className="text-center mt-12">
                    <p className="text-gray-600">تم عرض جميع الأخبار ({filteredNews.length} خبر)</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-omran-teal mb-4">
            لا تفوت أي خبر مهم
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            اشترك في النشرة الإخبارية واحصل على آخر الأخبار والتحليلات العقارية
          </p>
          <Button 
            onClick={handleSubscribe}
            className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg"
          >
            اشترك الآن
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omran-teal text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <OmranLogo isDark />
              </div>
              <p className="text-gray-300 text-sm">
                مجلتك الرائدة للعقارات والاستثمار في المملكة العربية السعودية
              </p>
            </div>

            {/* Content */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">المحتوى</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/projects" className="hover:text-omran-gold">المشاريع العقارية</Link></li>
                <li><Link href="/news" className="hover:text-omran-gold">أخبار العقارات</Link></li>
                <li><Link href="/about" className="hover:text-omran-gold">من نحن</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <a 
                    href="mailto:contact@omranmagazine.com" 
                    className="hover:text-omran-gold"
                  >
                    contact@omranmagazine.com
                  </a>
                </p>
                <p>المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                جميع الحقوق محفوظة لدى مجلة عمران 2025
              </p>
              
              {/* Admin Login Button */}
              <Link href="/admin">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white text-xs"
                >
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  تسجيل دخول الإدارة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
      )}
    </div>
  );
}

// Featured News Card Component
function FeaturedNewsCard({ 
  article, 
  large = false, 
  getNewsImage, 
  index 
}: { 
  article: NewsArticle; 
  large?: boolean;
  getNewsImage: (article: NewsArticle, index: number) => string;
  index: number;
}) {
  const handleReadMore = () => {
    alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالتاريخ: ${new Date(article.createdAt).toLocaleDateString('ar-SA')}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
  };

  const displayDate = new Date(article.createdAt).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (large) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={getNewsImage(article, index)}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="inline-block bg-omran-gold/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-omran-teal mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.summary}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
            <span>{article.author}</span>
            <span>{displayDate}</span>
            <span>{article.readTime}</span>
          </div>
          <Button 
            onClick={handleReadMore}
            className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white"
          >
            اقرأ المقال كاملاً
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex">
      <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
        <Image
          src={getNewsImage(article, index)}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1">
        <h4 className="text-sm font-bold text-omran-teal mb-2 line-clamp-2">
          {article.title}
        </h4>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{displayDate}</span>
          <Button 
            variant="ghost" 
            onClick={handleReadMore}
            className="text-omran-teal hover:text-omran-gold p-0 h-auto text-xs"
          >
            اقرأ المزيد
          </Button>
        </div>
      </div>
    </div>
  );
}

// Regular News Card Component
function NewsCard({ 
  article, 
  getNewsImage, 
  index 
}: { 
  article: NewsArticle;
  getNewsImage: (article: NewsArticle, index: number) => string;
  index: number;
}) {
  const handleReadMore = () => {
    alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالفئة: ${article.category}\nالتاريخ: ${new Date(article.createdAt).toLocaleDateString('ar-SA')}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
  };

  const displayDate = new Date(article.createdAt).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getNewsImage(article, index)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
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
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span>{article.author}</span>
          <span>{displayDate}</span>
          <span>{article.readTime}</span>
        </div>
        <Button 
          onClick={handleReadMore}
          className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white"
        >
          اقرأ المقال كاملاً
        </Button>
      </div>
    </div>
  );
}

// Subscribe Modal Component
function SubscribeModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert(`شكراً لك! تم تسجيل اشتراكك بنجاح باستخدام البريد الإلكتروني: ${email}`);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-omran-teal">اشترك في النشرة الإخبارية</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600 mb-6">
          احصل على أحدث الأخبار والتحليلات العقارية مباشرة في بريدك الإلكتروني
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 text-right"
            dir="rtl"
          />
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-omran-teal hover:bg-omran-teal/90 text-white"
            >
              {isSubmitting ? "جاري الإرسال..." : "اشترك الآن"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              إلغاء
            </Button>
          </div>
        </form>
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