import Banner from "./components/Banner";
import Section from "./components/Section";
import Tile from "./components/Tile";
import Grid from "./components/common/Grid";
import rest, { createURI } from "./services/rest";

import { HttpMethod, paths, UI_Paths } from "./constant/urlResource";
import { home } from "./constant/staticResources";
import Link from "next/link";

export default async function Home() {
  const data = await rest(HttpMethod.GET, paths.HOME_RESOURCES);

  const isBanner = (showAs) => {
    return showAs === home.BANNER;
  }

  return (
      <div className="flex-wrap">
        {
          data.sections.map((section, index) => 
            isBanner(section.showAs) ? <Banner key={index} banner={section} /> :
            <Section key={index} title={section.title} tagLine={section.tagLine}>
              <Grid cols={section.type.includes(home.PRODUCT_SHOWCASE) ? 4 : 3}>
                {section.attires.map((attire) => (
                  <Link key={attire.title} href={createURI([UI_Paths.PRODUCTS, attire.type, attire.subType])}>
                    <Tile image={attire.media} text={attire.title} />
                  </Link>
                ))}
              </Grid>
            </Section>
          )
        }
      </div>
  );
}

export const revalidate = 10;