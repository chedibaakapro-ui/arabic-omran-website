"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
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
              جميع الأخبار
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

      {/* Featured News */}
      {selectedCategory === "all" && (
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-omran-teal mb-8 text-center">الأخبار المميزة</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <FeaturedNewsCard article={allNewsArticles[0]} large />
              <div className="space-y-6">
                <FeaturedNewsCard article={allNewsArticles[1]} />
                <FeaturedNewsCard article={allNewsArticles[2]} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-omran-teal mb-8 text-center">
            {selectedCategory === "all" ? "جميع الأخبار" : selectedCategory}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNews.map((article) => (
              <NewsCard key={article.id} article={article} />
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

          {/* Show message when no news match filter */}
          {filteredNews.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600">لا توجد أخبار في هذه الفئة</p>
              <Button 
                onClick={() => handleCategoryChange("all")}
                className="mt-4 bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full"
              >
                عرض جميع الأخبار
              </Button>
            </div>
          )}
        </div>
      </section>

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

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <SubscribeModal onClose={() => setShowSubscribeModal(false)} />
      )}
    </div>
  );
}

// Featured News Card Component
function FeaturedNewsCard({ article, large = false }: { article: NewsArticle; large?: boolean }) {
  const handleReadMore = () => {
    alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالتاريخ: ${article.date}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
  };

  if (large) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={article.image}
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
            <span>{article.date}</span>
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
          src={article.image}
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
          <span>{article.date}</span>
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
function NewsCard({ article }: { article: NewsArticle }) {
  const handleReadMore = () => {
    alert(`مقال: ${article.title}\n\nالكاتب: ${article.author}\nوقت القراءة: ${article.readTime}\nالفئة: ${article.category}\nالتاريخ: ${article.date}\n\n${article.content}\n\nسيتم إضافة صفحة المقال الكاملة قريباً!`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
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
          <span>{article.date}</span>
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

// Extended news data with proper content and images
const allNewsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "ارتفاع أسعار العقارات السكنية في الرياض بنسبة 12% خلال الربع الأول",
    summary: "شهدت العاصمة نمواً ملحوظاً في قطاع العقارات مدفوعاً بالطلب المتزايد والمشاريع الحكومية الجديدة والاستثمارات الضخمة في البنية التحتية مما أثر إيجاباً على السوق العقاري.",
    content: "أظهرت البيانات الحديثة الصادرة عن وزارة الإسكان ارتفاعاً كبيراً في أسعار العقارات السكنية بالرياض بنسبة 12% خلال الربع الأول من العام الحالي. هذا الارتفاع يأتي نتيجة للطلب المتزايد على العقارات السكنية والمشاريع التطويرية الجديدة في العاصمة. كما ساهمت رؤية المملكة 2030 ومشاريع البنية التحتية الضخمة في تعزيز الثقة في السوق العقاري وجذب الاستثمارات المحلية والأجنبية.",
    date: "22 سبتمبر 2025",
    category: "أخبار السوق",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "أحمد العبدالله",
    readTime: "5 دقائق"
  },
  {
    id: "2",
    title: "إطلاق مشروع نيوم السكني الجديد بتكلفة 15 مليار ريال",
    summary: "أعلنت شركة نيوم عن إطلاق مشروع سكني متكامل يضم 50 ألف وحدة سكنية بمواصفات عالمية ومرافق ترفيهية متطورة تواكب رؤية المملكة 2030.",
    content: "في خطوة تاريخية نحو تحقيق رؤية المملكة 2030، أعلنت شركة نيوم عن إطلاق مشروع سكني ضخم بتكلفة تقدر بـ 15 مليار ريال سعودي. المشروع سيضم 50 ألف وحدة سكنية متنوعة تشمل الفلل والشقق والمنازل التاونهاوس، بالإضافة إلى مرافق ترفيهية وتعليمية وصحية متطورة. المشروع مصمم وفقاً لأعلى المعايير البيئية والتقنية ويهدف إلى استيعاب نمو السكان المتوقع في المنطقة.",
    date: "21 سبتمبر 2025",
    category: "مشاريع جديدة",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "فاطمة المطيري",
    readTime: "7 دقائق"
  },
  {
    id: "3",
    title: "تحليل: توقعات نمو الاستثمار العقاري في المملكة لعام 2025",
    summary: "يتوقع الخبراء نمو الاستثمار العقاري بنسبة 18% مع تطبيق رؤية 2030 ومشاريع البنية التحتية الضخمة والإصلاحات الاقتصادية الجديدة.",
    content: "تشير التوقعات الاقتصادية إلى نمو قوي في قطاع الاستثمار العقاري بنسبة تصل إلى 18% خلال عام 2025. هذا النمو مدفوع بعدة عوامل رئيسية منها مشاريع رؤية المملكة 2030، والاستثمارات الضخمة في البنية التحتية، وإطلاق مشاريع الترفيه والسياحة الكبرى. كما تساهم التسهيلات الحكومية الجديدة للمستثمرين الأجانب في جذب رؤوس أموال إضافية للسوق العقاري المحلي.",
    date: "20 سبتمبر 2025",
    category: "تحليلات",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "خالد الشهراني",
    readTime: "6 دقائق"
  },
  {
    id: "4",
    title: "افتتاح أكبر مجمع تسوق في جدة بمساحة 500 ألف متر مربع",
    summary: "شهدت جدة افتتاح مجمع التسوق الأكبر في المنطقة الغربية، والذي يضم أكثر من 800 متجر ومطعم ومرافق ترفيهية عالمية.",
    content: "احتفلت مدينة جدة بافتتاح أكبر مجمع تسوق في المنطقة الغربية بمساحة إجمالية تبلغ 500 ألف متر مربع. المجمع الجديد يضم أكثر من 800 متجر ومطعم، بالإضافة إلى مرافق ترفيهية متطورة تشمل دور السينما وألعاب الأطفال ومناطق الطعام الراقية. هذا المشروع الضخم سيساهم في تعزيز القطاع التجاري وخلق آلاف الوظائف الجديدة.",
    date: "19 سبتمبر 2025",
    category: "مشاريع جديدة",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "سارة القحطاني",
    readTime: "4 دقائق"
  },
  {
    id: "5",
    title: "صندوق الاستثمارات العامة يطلق مبادرة للاستثمار العقاري بـ 50 مليار ريال",
    summary: "أعلن صندوق الاستثمارات العامة عن مبادرة جديدة للاستثمار في المشاريع العقارية السكنية والتجارية بقيمة 50 مليار ريال.",
    content: "في إطار جهود تنويع الاقتصاد وتحقيق رؤية المملكة 2030، أطلق صندوق الاستثمارات العامة مبادرة استثمارية ضخمة بقيمة 50 مليار ريال تستهدف تطوير المشاريع العقارية المتنوعة. المبادرة تشمل تطوير المجمعات السكنية والمراكز التجارية والمكاتب الإدارية في مختلف مناطق المملكة، مما سيساهم في تلبية الطلب المتزايد على العقارات وخلق فرص استثمارية جديدة.",
    date: "18 سبتمبر 2025",
    category: "استثمار",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "محمد العتيبي",
    readTime: "8 دقائق"
  },
  {
    id: "6",
    title: "تقرير: الطلب على العقارات الفاخرة يرتفع 25% في الرياض",
    summary: "أظهر تقرير حديث ارتفاعاً كبيراً في الطلب على العقارات الفاخرة والفلل في أحياء الرياض الراقية مدفوعاً بنمو الدخل والاستثمارات الجديدة.",
    content: "كشف تقرير السوق العقاري الربعي عن ارتفاع الطلب على العقارات الفاخرة في العاصمة بنسبة 25% مقارنة بالعام الماضي. هذا الارتفاع يركز بشكل خاص على الفلل في أحياء النرجس والعليا والملقا. الخبراء يربطون هذا النمو بزيادة الدخل للطبقة الوسطى العليا وجذب المواهب العالمية للعمل في المملكة ضمن مشاريع رؤية 2030.",
    date: "17 سبتمبر 2025",
    category: "أخبار السوق",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "نورا الرشيد",
    readTime: "5 دقائق"
  },
  {
    id: "7",
    title: "البنك المركزي يخفض معدلات الفائدة لدعم القروض العقارية",
    summary: "قرر البنك المركزي السعودي تخفيض معدلات الفائدة بهدف تحفيز الإقراض العقاري وتسهيل الحصول على التمويل للمواطنين.",
    content: "أعلن البنك المركزي السعودي عن قرار تخفيض معدلات الفائدة الأساسية بمقدار 0.5% لتصل إلى 4.75%، وذلك في إطار جهود دعم القطاع العقاري وتسهيل الحصول على القروض السكنية للمواطنين. هذا القرار متوقع أن يساهم في زيادة الطلب على العقارات وتحفيز النشاط الاقتصادي في القطاع، خاصة مع برامج الدعم الحكومية الأخرى مثل برنامج سكني.",
    date: "16 سبتمبر 2025",
    category: "أخبار السوق",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "عبدالعزيز الدوسري",
    readTime: "4 دقائق"
  },
  {
    id: "8",
    title: "مشروع القدية يعلن عن تطوير 30 ألف وحدة سكنية جديدة",
    summary: "كشفت شركة القدية للاستثمار عن خطط لتطوير 30 ألف وحدة سكنية متنوعة ضمن مدينة القدية الترفيهية بتصاميم عصرية ومرافق متكاملة.",
    content: "أعلنت شركة القدية للاستثمار عن مرحلة جديدة من التطوير تتضمن بناء 30 ألف وحدة سكنية متنوعة تشمل الشقق والفلل والمنازل التاونهاوس. هذا المشروع السكني سيكون جزءاً من مدينة القدية الترفيهية ويهدف إلى توفير بيئة سكنية متكاملة مع مرافق ترفيهية وتعليمية وصحية عالمية الجودة. المشروع متوقع أن يكتمل على عدة مراحل خلال السنوات القادمة.",
    date: "15 سبتمبر 2025",
    category: "مشاريع جديدة",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "ريم العنزي",
    readTime: "6 دقائق"
  },
  {
    id: "9",
    title: "دراسة: العقارات التجارية تحقق عوائد استثمارية تصل إلى 8% سنوياً",
    summary: "أظهرت دراسة حديثة أن الاستثمار في العقارات التجارية يحقق عوائد مجزية تصل إلى 8% سنوياً مع توقعات بنمو إضافي.",
    content: "كشفت دراسة أجراها معهد الاستثمار العقاري السعودي أن العقارات التجارية تحقق عوائد استثمارية قوية تتراوح بين 6-8% سنوياً. الدراسة شملت المراكز التجارية والمكاتب الإدارية والمستودعات في المدن الرئيسية. الخبراء يتوقعون استمرار هذا الأداء القوي مدفوعاً بنمو القطاعات الاقتصادية المختلفة والتوسع في الأنشطة التجارية.",
    date: "14 سبتمبر 2025",
    category: "تحليلات",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "حسام البلوي",
    readTime: "7 دقائق"
  },
  {
    id: "10",
    title: "إطلاق منصة رقمية جديدة لتسهيل المعاملات العقارية",
    summary: "أطلقت وزارة الإسكان منصة رقمية متطورة تهدف إلى تسهيل وتسريع المعاملات العقارية وتوفير الخدمات الحكومية إلكترونياً.",
    content: "في إطار التحول الرقمي وتحسين الخدمات الحكومية، أطلقت وزارة الإسكان منصة رقمية جديدة تسمح بإنجاز المعاملات العقارية إلكترونياً. المنصة توفر خدمات متنوعة تشمل نقل الملكية والرهن العقاري وإصدار الصكوك، مما يوفر الوقت والجهد على المواطنين والمستثمرين. هذه المبادرة جزء من جهود المملكة لرقمنة الخدمات الحكومية وتحسين بيئة الأعمال.",
    date: "13 سبتمبر 2025",
    category: "تحليلات",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop&auto=format&q=80&fm=webp",
    author: "لينا الغامدي",
    readTime: "5 دقائق"
  }
];