import HeroSection from "@/components/custom/HeroSection";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href, {cache: 'no-store'});
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  const { title, description, blocks } = strapiData.data;
  console.dir(strapiData, { depth: null });

  return (
    <>
      <main>
        <HeroSection data={blocks[0]} />
      </main>
    </>
  );
}
