import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-wala-green text-white py-3 px-4 text-center">
        <p className="text-sm">
          هل بيئة عمليك جاذبة للمواهب أم طاردة لها؟ تعرف الإجابة الآن مع اختبارنا المجاني!
        </p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Request Demo Button */}
          <Button className="bg-wala-green hover:bg-green-600 text-white px-6 py-2 rounded-full">
            اطلب تجربة
          </Button>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-wala-green">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-wala-green">من نحن</a>
            <a href="#" className="text-gray-700 hover:text-wala-green">الباقات</a>
            <a href="#" className="text-gray-700 hover:text-wala-green">الوظائف</a>
            <a href="#" className="text-gray-700 hover:text-wala-green">مركز المعرفة</a>
            <a href="#" className="text-gray-700 hover:text-wala-green">انضم كتاجر</a>
          </nav>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3300832623/4192563342.png"
              alt="WalaPlus Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-wala-light-green py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Illustration */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="https://ext.same-assets.com/3300832623/383507575.png"
                alt="Work Environment Assessment Illustration"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                هل تصنع بيئة العمل
                <br />
                لديكم الولاء... أم
                <br />
                تغذي التسرب؟
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                اختبر بيئة العمل في شركتك من خلال 10 أسئلة دقيقة. واحصل على تحليل فوري لمستوى الولاء والسعادة الوظيفية داخل مؤسستك.
              </p>
              <Button className="bg-wala-green hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg">
                ابدأ التقييم الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="assessment-form" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-wala-green mb-4">ابدأ التقييم الآن</h2>
            <p className="text-gray-600">
              يرجى الإجابة على جميع الأسئلة التالية، باستخدام مقياس من 1 إلى 5 (1 = لا أبداً، 5 = نعم دائماً)
            </p>
          </div>

          {/* Personal Information */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-right">البيانات الشخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-right block mb-2">الاسم *</Label>
                <Input
                  id="name"
                  className="text-right"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-right block mb-2">البريد الإلكتروني *</Label>
                <Input
                  id="email"
                  type="email"
                  className="text-right"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>
          </div>

          {/* Assessment Questions */}
          <div className="space-y-8">
            {assessmentQuestions.map((question, index) => (
              <QuestionCard
                key={index}
                number={index + 1}
                question={question}
              />
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12">
            <Button className="bg-wala-green hover:bg-green-600 text-white px-12 py-3 rounded-full text-lg">
              إرسال
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <Image
                src="https://ext.same-assets.com/3300832623/4192563342.png"
                alt="WalaPlus Logo"
                width={120}
                height={40}
                className="h-10 w-auto mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-600 text-sm">
                عن ولاء بلس
              </p>
            </div>

            {/* Solutions */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-800 mb-4">حلولنا</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>عروض وخصومات الموظفين</li>
                <li>تقدير ومكافآت الموظفين</li>
                <li>مقياس السعادة والولاء في بيئة العمل</li>
                <li>الصحة والرشاقة للموظفين</li>
              </ul>
            </div>

            {/* Important Links */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-800 mb-4">روابط تهمك</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>سياسة الخصوصية</li>
                <li>الشروط والأحكام</li>
                <li>سياسة الاسترداد والاستبدال</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-800 mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+966 8 001240461</p>
                <p>Wecare@walaplus.com</p>
                <p>طريق الحياة، الموهيني، الرياض، المملكة العربية السعودية</p>
              </div>

              {/* Social Media */}
              <div className="flex justify-center md:justify-start space-x-4 space-x-reverse mt-4">
                <a href="#" className="text-gray-400 hover:text-wala-green">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-wala-green">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-wala-green">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              جميع الحقوق محفوظة لدى ولاء بلس 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface QuestionCardProps {
  number: number;
  question: string;
}

function QuestionCard({ number, question }: QuestionCardProps) {
  const options = [
    { value: "1", label: "لا أبداً" },
    { value: "2", label: "نادراً" },
    { value: "3", label: "أحياناً" },
    { value: "4", label: "غالباً" },
    { value: "5", label: "دائماً" },
  ];

  return (
    <div className="bg-wala-light-green p-6 rounded-lg">
      <div className="text-right mb-4">
        <h4 className="text-lg font-medium text-gray-800">
          {number}- {question}
        </h4>
      </div>

      <RadioGroup className="grid grid-cols-5 gap-4" dir="rtl">
        {options.map((option) => (
          <div key={option.value} className="flex flex-col items-center space-y-2">
            <Label htmlFor={`q${number}-${option.value}`} className="text-sm text-gray-700 text-center">
              {option.label}
            </Label>
            <RadioGroupItem
              value={option.value}
              id={`q${number}-${option.value}`}
              className="border-wala-green data-[state=checked]:bg-wala-green"
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

const assessmentQuestions = [
  "موظفونا ملمون بوضوح كيف تساهم أعمالهم اليومية في تحقيق أهداف الشركة.",
  "نوفر مرونة للموظف في الحضور والانصراف ما دام يلتزم بعدد الساعات أو الإنتاجية.",
  "لدينا أنظمة عادلة وواضحة في التقدير، الترقية، والمكافآت.",
  "يُعبر الموظفون لدينا عن آرائهم ومقترحاتهم بحرية، دون خوف من الرد السلبي.",
  "نوفر فرصاً دورية للتدريب والتطوير المهني والشخصي.",
  "يتم الاحتفال بإنجازات الموظفين وتقدير جهودهم باستمرار.",
  "لدينا مبادرات تدعم الصحة النفسية والجسدية لموظفينا.",
  "التواصل الداخلي لدينا منظم وشفاف وسريع بين الفرق والإدارات.",
  "يشعر الموظفون بأنهم محل ثقة ويحظون بالاحترام داخل بيئة العمل.",
  "مكان العمل لدينا مصمم ليكون مريحاً، ملهماً، وجاذباً بصرياً.",
];
