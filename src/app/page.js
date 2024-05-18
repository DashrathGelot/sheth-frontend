import Banner from "./components/Banner";
import Section from "./components/Section";
import Tile from "./components/Tile";
import Grid from "./components/common/Grid";
import rest from "./services/rest";

import { HttpMethod, paths } from "./constant/urlResource";
import { home } from "./constant/staticResources";

export default async function Home() {

  const data = await rest(HttpMethod.GET, paths.HOME_RESOURCES);

  const config = {
    banner: data.sections.filter(section => section.type === home.BANNER)[0],
    sections: data.sections.filter(section => section.type !== home.BANNER)
  };

  console.log("this is config: ", config)

  return (
      <div className="flex-wrap">
        <Banner banner={config.banner} />
        {config.sections.map((section, index) => (
          <Section key={index} title={section.title} tagLine={section.tagLine}>
            <Grid cols={home.PRODUCT_SHOWCASE === section.type ? 4 : 3}>
              {section.attires.map((tile, tileIndex) => (
                <Tile key={tileIndex} image={tile.media} text={tile.title} />
              ))}
            </Grid>
          </Section>
        ))}
      </div>
  );
}
