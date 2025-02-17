import Banner from "./components/Banner";
import Section from "./components/Section";
import Tile from "./components/Tile";
import Grid from "./components/common/Grid";
import rest, { createCaseURI, createURI } from "./services/rest";

import { HttpMethod, paths, UI_Paths } from "./constant/urlResource";
import { home } from "./constant/staticResources";
import Link from "next/link";

export default async function Home() {
  const data = await rest(HttpMethod.GET, paths.HOME_RESOURCES);

  const isBanner = (showAs) => {
    return showAs === home.BANNER;
  }

  const productURI = (type) => {
    if (type.includes("Basics")) return createURI([UI_Paths.PRODUCTS, "basics", "all"]);
    return createURI([UI_Paths.PRODUCTS, "capsules", "all"])
  }

  return (
      <div className="flex-wrap">
        {
          data.sections.map((section, index) => 
            isBanner(section.showAs) ? <Banner key={index} banner={section} /> :
            <Section key={index} title={section.title} tagLine={section.tagLine}>
              <Grid cols={section.type.includes(home.PRODUCT_SHOWCASE) ? 4 : 3}>
                {section.attires.map((attire) => (
                  <Link key={attire.title} href={createCaseURI([UI_Paths.PRODUCT, attire.subType, attire.productCode])}>
                    <Tile image={attire.media} text={attire.title} />
                  </Link>
                ))}
              </Grid>
              <Link href={productURI(section.type)}>
                <button className="bg-transparent font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
                  Explore All
                </button>
              </Link>
            </Section>
          )
        }
      </div>
  );
}

export const revalidate = 10;