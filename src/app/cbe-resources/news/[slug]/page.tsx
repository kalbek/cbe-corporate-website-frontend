'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

const newsItems = [
  {
    id: 1,
    title: 'የኢትዮጵያ ንግድ ባንክ 122.5 ሚሊዮን ዶላር ለደንበኞቹ ድልድል አደረገ።',
    date: '05 Apr 2025',
    image: '/images/news-image1.png',
    slug: 'news-title-one',
    description:
      'የደምበኞቻችንን የውጪ ምንዛሪ ጥያቄ ለመመለስ እ.ኤ.አ እስከ 31/03/2025 ድረስ ባጠቃላይ በቁጥር 711 ደንበኞቻችን ያቀረቡትን ጥያቄዎች በሙሉ በመገምገም ከቀረቡት ጥያቄዎች ውስጥ ብዛታቸው 698(98%) ለሆኑ ደንበኞች በድምሩ የ122.5 �ሚሊዮን የአሜሪካን ዶላር ድልድል የተደረገ መሆኑን እንገልጻለን።',
  },
  {
    id: 2,
    title:
      'የኢትዮጵያ ንግድ ባንክ ባለፉት ስምንት ወራት ብቻ 264.65 ቢልዮን ብር ብድር ለደንበኞቹ ማቅረቡ ተገለፀ።',
    date: '04 Apr 2025',
    image: '/images/news-image2.png',
    slug: 'news-title-two',
    description:
      'አቶ አቤ በዲጂታል አማራጭ ባለፉት ስምንት ወራት አጠቃላይ ብር 3.9 ቢሊዮን ብድር ማቅረብ የተቻለ መሆኑን ገልፀው፣ በዚህም እስከ ፌብርዋሪ 28 ቀን 2025 ድረስ 717 ሺህ ደንበኞች ተጠቃሚ መሆናቸውን አስረድተዋል፡፡',
  },
  {
    id: 3,
    title:
      'የኢትዮጵያ ንግድ ባንክ በባንክ ኢንዱስትሪው ውስጥ ያለውን የገበያ ድርሻ ማሳደጉ ተገለፀ፡፡',
    date: '04 Apr 2025',
    image: '/images/news-image3.png',
    slug: 'news-title-three',
    description:
      'በፌብሩዋሪ 2025 መጨረሻ የኢትዮጵያ ንግድ ባንክ ጠቅላላ ተቀማጭ ገንዘብ ብር 1.541 ትሪሊዮን፣ ጠቅላላ የብድርና የቦንድ ክምችት መጠን ብር 1.393 ትሪሊዮን፣ እንዲሁም አጠቃላይ ሃብት ብር 2.073 ትሪሊየን መድረሱን አቶ አቤ በሪፖርታቸው አመላክተዋል፡፡',
  },
  {
    id: 4,
    title:
      'የኢትዮጵያ ንግድ ባንክ በስምንት ወራት ብር 367.40 ቢሊዮን ተቀማጭ ገንዘብ አሰባሰበ፡፡',
    date: '04 Apr 2025',
    image: '/images/news-image4.png',
    slug: 'news-title-Four',
    description:
      'አቶ አቤ በስምንት ወራት በተቀማጭ ገንዘብ አሰባሰብ የነበረው አፈፃፀም በጁን 2024 ከነበረው ጠቅላላ ተቀማጭ አንጻር የ31.3% ዕድገት እንዲያሳይ ማስቻሉን ገልፀዋል፡፡',
  },
  {
    id: 5,
    title:
      'የኢትዮጵያ ንግድ ባንክ የፖስ ማሽኖችን በመጠቀም ክፍያ የፈጸሙ ደንበኞችን ሸለመ።',
    date: '03 Apr 2025',
    image: '/images/news-image5.png',
    slug: 'news-title-five',
    description:
      'የሲቢኢ ኑር ፕሮዳክት ዴቨሎፕመንት እና ቢዝነስ ኤክስፓንሽን ሥራ አስኪያጅ አቶ አንዋር መሐመድ ደንበኞች ዲጂታል የባንክ አገልግሎቶችን እንዲጠቀሙ ለማበረታታት የሽልማት መርሀ ግብሩ መዘጋጀቱን ገልፀዋል፡፡',
  },
  {
    id: 6,
    title:
      'የኢትዮጵያ ንግድ ባንክ ከማስተር ካርድ ኩባንያ ጋር በመሆን አዲስ የፕላስቲክ እና ቨርችዋል ካርድ አገልግሎት ላይ አዋለ፡፡',
    date: '02 Apr 2025',
    image: '/images/news-image6.png',
    slug: 'news-title-six',
    description:
      'አቶ አቤ ይህ ስትራቴጂካዊ ትብብር የኢትዮጵያ ንግድ ባንክ በሞባይል ባንኪንግ አገልግሎት ያለውን ሰፊ የገበያ ድርሻ በመጠቀም፤ በቨርቹዋል የካርዴ አገልግሎት የባንኩን ከ40 ሚሊየን በላይ ደንበኞች የዘመናዊ ዲጂታል የባንክ አገልግሎት ተጠቃሚ ማድረግ እንደሚያስችል ገልፀዋል፡፡',
  },
  {
    id: 7,
    title:
      '”አብሮነት ለበጎነት ፤ በረመዷን ” በሚል መሪ ቃል የኢትዮጵያ ንግድ ባንክ ታላቅ የኢፍጣር መርሃ-ግብር አከናወነ፡፡',
    date: '01 Apr 2025',
    image: '/images/news-image7.png',
    slug: 'news-title-seven',
    description:
      'የኢትዮጵያ ንግድ ባንክ ፕሬዚዳንት አቶ አቤ ሳኖ በበኩላቸው ከወለድ ነፃ የባንክ አገልግሎት በመስጠት 11 ስኬታማ ዓመታትን ያስቆጠረው የሲቢኢ ኑር አገልግሎት በደንበኞቹ ዘንድ ተአማኒነት በማትረፉ ውጤታማ ስለሆነ ለአጋርነታችሁ ምስጋና ይገባችሃል ብለዋል፡፡',
  },
  {
    id: 8,
    title: 'የኢትዮጵያ ንግድ ባንክ 15 ሚሊዮን ብር ድጋፍ አደረገ።',
    date: '31 Mar 2025',
    image: '/images/news-image8.png',
    slug: 'news-title-eight',
    description:
      'ባቡል ኽይር የበጎ አድራጎት ድርጅት በቀን ከአራት ሺህ ስምንት መቶ በላይ አባወራዎችን የምገባ አገልግሎት ይሰጣል፡፡',
  },
];

export default function NewsArticle() {
  const { slug } = useParams();

  const newsItem = newsItems.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <div className="bg-white w-full flex flex-col">
      {/* Date and Title */}
      <section className="w-full max-w-[1440px] mx-auto gap-[14px] pt-16 px-4 pb-16 sm:px-8 lg:px-24">
        <p className="w-full max-w-[1240px] mx-auto h-[24px] text-[#E9A029] font-pt-sans-caption font-bold text-[clamp(14px,2vw,18px)] leading-[24px] text-center">
          {newsItem.date}
        </p>
        <h1 className="text-purple-800 w-full max-w-[1240px] mx-auto font-pt-sans-caption font-normal text-[clamp(24px,5vw,48px)] leading-[1.25] tracking-[-0.02em] text-center">
          {newsItem.title}
        </h1>
      </section>

      {/* Image and Paragraph */}
      <div className="w-full max-w-[1440px] mx-auto gap-[57px] px-4 sm:px-8 lg:px-20 pb-8 sm:pb-16 pt-8">
        <div className="flex justify-center">
          <Image
            src={newsItem.image}
            alt="CBE News"
            layout="responsive"
            width={768}
            height={432}
            className="w-full max-w-[768px] h-auto object-cover"
          />
        </div>

        {/* Paragraph */}
        <section className="justify-center flex pt-[80px] pb-[100px]">
          <p className="w-full max-w-[732px] mx-auto text-[#000000] font-pt-sans-caption font-normal text-[clamp(14px,2vw,16px)] leading-[24px] tracking-[0] text-center">
            {newsItem.description}
          </p>
        </section>
      </div>
    </div>
  );
}