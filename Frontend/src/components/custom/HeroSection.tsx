import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { getUserMeLoader } from "@/data/services/getUserMeLoader";

interface HeroSectionProps {
  data: {
    __component: string;
    id: number;
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

async function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const { heading, subHeading, image, link } = data;

  const user = await getUserMeLoader();
  const linkUrl = user.ok ? "/dashboard" : link.url

  return (
    <>
      <header className="relative h-[40rem] overflow-hidden truncate">

        <StrapiImage 
        src={image.url}
        width={1920}
        height={1080}
        alt={image.alternativeText}
        className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{heading}</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>

          <Link className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100" href={linkUrl}>
            {user.ok ? "Dashboard" : "Login"}
          </Link>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
