"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher2() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  const buttonText = locale === 'en' ? 'العربية' : 'English';

  return (
    <Button
      onClick={handleLanguageSwitch}
      variant="outline"
      size="sm"
      className="border-omran-teal text-omran-teal hover:bg-omran-teal hover:text-white min-w-[80px]"
    >
      {buttonText}
    </Button>
  );
}