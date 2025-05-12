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
    <main className="font-primary items-center bg-[url(/images/hero-image.png)] bg-cover bg-center grid sm:grid-cols-2">
      <Link href="/">
        <Image
          src="/previous.svg"
          width={40}
          height={40}
          alt="previous"
          className="hidden sm:flex ml-2"
        />
      </Link>

      <div className="sm:flex justify-between items-center gap-20 p-4">
        <div className="text-foreground  max-w-[523px] my-[160px]">
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
            src="/next.svg"
            width={40}
            height={40}
            alt="next"
            className="hidden sm:flex mr-2"
          />
        </Link>
      </div>
    </main>
  );
};

export default hero;
