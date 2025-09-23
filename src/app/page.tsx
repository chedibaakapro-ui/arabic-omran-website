import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-omran-teal text-white py-3 px-4 text-center">
        <p className="text-sm">
          اكتشف أحدث المشاريع العقارية والأخبار الحصرية في المملكة العربية السعودية
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Subscribe Button */}
          <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full">
            اشترك الآن
          </Button>

          {/* Navigation - Updated with Next.js Link */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-omran-teal font-semibold">الرئيسية</Link>
            <Link href="/projects" className="text-gray-700 hover:text-omran-teal">المشاريع</Link>
            <a href="#" className="text-gray-700 hover:text-omran-teal">الأخبار</a>
            <a href="#" className="text-gray-700 hover:text-omran-teal">التحليلات</a>
            <a href="#" className="text-gray-700 hover:text-omran-teal">السوق العقاري</a>
            <Link href="/about" className="text-gray-700 hover:text-omran-teal">من نحن</Link>
          </nav>

          {/* Logo - Updated with Link */}
          <div className="flex items-center">
            <Link href="/">
              <OmranLogo />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Updated with better spacing */}
      <section className="bg-omran-light py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16">
            {/* Left side - Hero Image */}
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

            {/* Right side - Content */}
            <div className="lg:w-1/2 text-center lg:text-right lg:order-0 lg:pr-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                مجلتك الرائدة
                <br />
                للعقارات والاستثمار
                <br />
                في المملكة
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                نقدم لك أحدث الأخبار والتحليلات العقارية، أفضل المشاريع السكنية والتجارية، 
                ونصائح الاستثمار من خبراء السوق السعودي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects">
                  <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg w-full sm:w-auto">
                    تصفح المشاريع
                  </Button>
                </Link>
                <Button variant="outline" className="border-omran-gold text-omran-gold hover:bg-omran-gold hover:text-white px-8 py-3 rounded-full text-lg">
                  اقرأ الأخبار
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">المشاريع المميزة</h2>
            <p className="text-gray-600 text-lg">
              اكتشف أحدث المشاريع العقارية الرائدة في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full">
                عرض جميع المشاريع
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">النشرة الإخبارية</h2>
            <p className="text-gray-600 text-lg">
              احصل على أحدث الأخبار والتحليلات العقارية مباشرة في بريدك الإلكتروني
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="text-right h-12"
                />
              </div>
              <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 h-12 rounded-md">
                اشترك الآن
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              نحن نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-omran-teal mb-4">آخر الأخبار</h2>
            <p className="text-gray-600">تابع أحدث التطورات في السوق العقاري السعودي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omran-teal text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <li><a href="#" className="hover:text-omran-gold">المشاريع العقارية</a></li>
                <li><a href="#" className="hover:text-omran-gold">أخبار العقارات</a></li>
                <li><a href="#" className="hover:text-omran-gold">تحليلات السوق</a></li>
                <li><a href="#" className="hover:text-omran-gold">نصائح الاستثمار</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-omran-gold">تقييم المشاريع</a></li>
                <li><a href="#" className="hover:text-omran-gold">استشارات عقارية</a></li>
                <li><a href="#" className="hover:text-omran-gold">تقارير السوق</a></li>
                <li><a href="#" className="hover:text-omran-gold">النشرة الإخبارية</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>contact@omranmagazine.com</p>
                <p>المملكة العربية السعودية</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-300">
              جميع الحقوق محفوظة لدى مجلة عمران 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Geometric Omran Logo Component
function OmranLogo({ isDark = false }: { isDark?: boolean }) {
  const primaryColor = isDark ? "#DDAF37" : "#1B4848";
  const secondaryColor = isDark ? "#FFFFFF" : "#DDAF37";
  
  return (
    <div className="flex items-center space-x-3 space-x-reverse">
      <svg width="40" height="40" viewBox="0 0 40 40" className="flex-shrink-0">
        {/* Geometric building blocks representing construction/real estate */}
        <rect x="4" y="20" width="12" height="16" fill={primaryColor} />
        <polygon points="4,20 10,12 16,20" fill={secondaryColor} />
        <rect x="18" y="16" width="10" height="20" fill={primaryColor} />
        <polygon points="18,16 23,8 28,16" fill={secondaryColor} />
        <rect x="30" y="24" width="8" height="12" fill={primaryColor} />
        <polygon points="30,24 34,18 38,24" fill={secondaryColor} />
        {/* Accent geometric elements */}
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

interface ProjectCardProps {
  project: {
    title: string;
    location: string;
    price: string;
    type: string;
    image: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
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
        <p className="text-omran-gold font-bold text-lg">{project.price}</p>
      </div>
    </div>
  );
}

interface NewsCardProps {
  article: {
    title: string;
    summary: string;
    date: string;
    category: string;
    image: string;
  };
}

function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
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
          <span>{article.date}</span>
          <Button variant="ghost" className="text-omran-teal hover:text-omran-gold p-0 h-auto">
            اقرأ المزيد
          </Button>
        </div>
      </div>
    </div>
  );
}

const featuredProjects = [
  {
    title: "مجمع الواحة السكني الفاخر",
    location: "الرياض - حي النرجس",
    price: "من 850,000 ريال",
    type: "سكني",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "برج العاصمة التجاري",
    location: "جدة - الكورنيش",
    price: "من 1,200,000 ريال",
    type: "تجاري",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "قرية البحيرات الذكية",
    location: "الدمام - الخبر",
    price: "من 950,000 ريال",
    type: "مجمع سكني",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  }
];

const latestNews = [
  {
    title: "ارتفاع أسعار العقارات السكنية في الرياض بنسبة 12% خلال الربع الأول",
    summary: "شهدت العاصمة نمواً ملحوظاً في قطاع العقارات مدفوعاً بالطلب المتزايد والمشاريع الحكومية الجديدة والاستثمارات الضخمة في البنية التحتية...",
    date: "22 سبتمبر 2025",
    category: "أخبار السوق",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "إطلاق مشروع نيوم السكني الجديد بتكلفة 15 مليار ريال",
    summary: "أعلنت شركة نيوم عن إطلاق مشروع سكني متكامل يضم 50 ألف وحدة سكنية بمواصفات عالمية ومرافق ترفيهية متطورة تواكب رؤية المملكة 2030...",
    date: "21 سبتمبر 2025",
    category: "مشاريع جديدة",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "تحليل: توقعات نمو الاستثمار العقاري في المملكة لعام 2025",
    summary: "يتوقع الخبراء نمو الاستثمار العقاري بنسبة 18% مع تطبيق رؤية 2030 ومشاريع البنية التحتية الضخمة والإصلاحات الاقتصادية الجديدة...",
    date: "20 سبتمبر 2025",
    category: "تحليلات",
    image: "https://images.unsplash.com/photo-1590725175722-30bb1d6c5715?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  }
];
