import Image from "next/image";

interface ShowCaseCardProps {
  title: string;
  image: string;
  category: string;
  isWide?: boolean;
  isTall?: boolean;
}

function ShowCaseCard({
  title,
  image,
  category,
  isWide = false,
  isTall = false,
}: ShowCaseCardProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
        isWide
          ? "col-span-full" // Tam genişlik için
          : isTall
          ? "md:col-span-2" // Uzunluk için, grid yapınıza bağlı olarak ayarlayın
          : "col-span-1" // Varsayılan
      }`}>
      <div
        className={`relative ${
          isWide ? "aspect-[16/9]" : isTall ? "aspect-[3/4]" : "aspect-[4/3]"
        } overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-gray-500 mb-2 uppercase">
          {category}
        </div>
        <h3 className="text-lg font-medium leading-tight text-gray-900">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default ShowCaseCard;
