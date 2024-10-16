import { FeatureSection } from "@/components/custom/FeaturesSection";
import HeroSection from "@/components/custom/HeroSection";
import { getGlobalPageData, getHomePageData } from "@/data/loaders";


const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData?.data || [];
  return <main>{blocks.map(blockRenderer)}</main>;
}
