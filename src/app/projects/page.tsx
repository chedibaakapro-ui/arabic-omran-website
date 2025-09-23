import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "المشاريع العقارية | مجلة عمران",
  description: "اكتشف أحدث المشاريع العقارية والاستثمارية في المملكة العربية السعودية",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-6 py-2 rounded-full">
            اشترك الآن
          </Button>

          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-omran-teal">الرئيسية</Link>
            <Link href="/projects" className="text-omran-teal font-semibold">المشاريع</Link>
            <a href="#" className="text-gray-700 hover:text-omran-teal">الأخبار</a>
            <a href="#" className="text-gray-700 hover:text-omran-teal">التحليلات</a>
            <a href="#" className="text-gray-700 hover:text-omran-teal">السوق العقاري</a>
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
          <h1 className="text-4xl font-bold text-omran-teal mb-4">المشاريع العقارية</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            اكتشف أحدث المشاريع العقارية الرائدة في المملكة العربية السعودية، من المجمعات السكنية الفاخرة إلى المراكز التجارية والاستثمارية
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" className="bg-omran-teal text-white">
              جميع المشاريع
            </Button>
            <Button variant="outline" className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white">
              سكني
            </Button>
            <Button variant="outline" className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white">
              تجاري
            </Button>
            <Button variant="outline" className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white">
              مختلط
            </Button>
            <Button variant="outline" className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white">
              فندقي
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-omran-gold hover:bg-omran-gold/90 text-white px-8 py-3 rounded-full">
              عرض المزيد من المشاريع
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-omran-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-omran-teal mb-4">
            هل لديك مشروع عقاري؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا لعرض مشروعك العقاري في مجلة عمران والوصول إلى آلاف المستثمرين والمهتمين بالعقارات
          </p>
          <Button className="bg-omran-teal hover:bg-omran-teal/90 text-white px-8 py-3 rounded-full text-lg">
            اتصل بنا الآن
          </Button>
        </div>
      </section>
    </div>
  );
}

// Reuse the same components from your main page
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

function ProjectCard({ project }: { project: any }) {
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
        <p className="text-omran-gold font-bold text-lg mb-4">{project.price}</p>
        <Button className="w-full bg-omran-teal hover:bg-omran-teal/90 text-white">
          عرض التفاصيل
        </Button>
      </div>
    </div>
  );
}

const allProjects = [
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
  },
  {
    title: "مجمع الأندلس الراقي",
    location: "الرياض - حي الملقا",
    price: "من 750,000 ريال",
    type: "سكني",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "مول الخليج التجاري",
    location: "جدة - طريق الملك عبدالعزيز",
    price: "من 2,500,000 ريال",
    type: "تجاري",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  },
  {
    title: "منتجع الصحراء الفندقي",
    location: "العلا - المدينة القديمة",
    price: "من 3,000,000 ريال",
    type: "فندقي",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80&fm=webp"
  }
];