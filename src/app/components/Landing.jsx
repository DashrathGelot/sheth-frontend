import Banner from "./Banner";
import Section from "./Section";
import Tile from "./Tile";
import Grid from "./common/Grid";

const Landing = ({ banner, sections }) => {
  return (
    <div className="flex-wrap">
      <Banner banner={banner} />
      {sections.map((section, index) => (
        <Section key={index} title={section.title} tagLine={section.tagLine}>
          <Grid gap={1} cols={section.cols}>
            {section.tiles.map((tile, tileIndex) => (
              <Tile key={tileIndex} image={tile.image} text={tile.text} />
            ))}
          </Grid>
        </Section>
      ))}
    </div>
  );
};

export default Landing;
