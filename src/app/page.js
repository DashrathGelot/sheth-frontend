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

  const config = {
    banner: data.sections.filter(section => section.type === home.BANNER)[0],
    sections: data.sections.filter(section => section.type !== home.BANNER)
  };

  return (
      <div className="flex-wrap">
        <Banner banner={config.banner} />
        {config.sections.map((section, index) => (
          <Section key={index} title={section.title} tagLine={section.tagLine}>
            <Grid cols={home.PRODUCT_SHOWCASE === section.type ? 4 : 3}>
              {section.attires.map((attire) => (
                <Link key={attire.title} href={createURI([UI_Paths.PRODUCTS, attire.type, attire.subType])}>
                  <Tile image={attire.media} text={attire.title} />
                </Link>
              ))}
            </Grid>
          </Section>
        ))}
      </div>
  );
}

export const revalidate = 10;