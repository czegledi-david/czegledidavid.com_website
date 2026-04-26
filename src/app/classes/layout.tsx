import SchoolYearProgress from "@/components/SchoolYearProgress"; 

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)]">
      {/* 1. Maga az oldal tartalma (pl. a 10.A kártyái) */}
      <div className="flex-grow">
        {children}
      </div>
      
      {/* 2. Ez a csík fog megjelenni minden classes aloldal LEGALJÁN */}
      <div className="mt-auto pb-10">
        <SchoolYearProgress />
      </div>
    </div>
  );
}