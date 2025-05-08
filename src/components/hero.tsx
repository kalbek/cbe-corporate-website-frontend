import Link from "next/link";
import Image from "next/image";
type HeroProps = {
  header: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

const hero: React.FC<HeroProps> = ({ header, description, cta }) => {
  return (
    <main className="font-primary bg-[url(/images/hero-image.png)] bg-cover bg-center bg-no-repeat grid grid-cols-2 items-center">
      <Link href="/">
        <Image
          src="/icon-and-logos/about-us/previous.svg"
          width={40}
          height={40}
          alt="previous"
          className="ml-2"
        />
      </Link>

      <div className="flex justify-between items-center gap-20">
        <div className="text-foreground w-[523px] my-[160px]">
          <h1 className="text-5xl font-bold mb-5">{header}</h1>
          <p className="text-[18px] font-normal mb-7">{description}</p>
          <Link
            href={cta.href}
            className="bg-foreground/40 py-3 px-5 rounded-[8px] cursor-pointer"
          >
            {cta.label}
          </Link>
        </div>

        <Link href="/">
          <Image
            src="/icon-and-logos/about-us/next.svg"
            width={40}
            height={40}
            alt="next"
            className="mr-2"
          />
        </Link>
      </div>
    </main>
  );
};

export default hero;
