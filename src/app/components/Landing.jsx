import Banner from "./Banner";
import Section from "./Section";
import Tile from "./Tile";
import Grid from "./common/Grid";

const Landing = () => {
  const tiles = [
    { image: "https://shorturl.at/evS12", text: "this is tile1" },
    { image: "https://shorturl.at/evS12", text: "this is tile2" },
    { image: "https://shorturl.at/evS12", text: "this is tile3" },
    { image: "https://shorturl.at/evS12", text: "this is tile4" },
    { image: "https://shorturl.at/evS12", text: "this is tile5" },
    { image: "https://shorturl.at/evS12", text: "this is tile6" },
    { image: "https://shorturl.at/evS12", text: "this is tile7" },
    { image: "https://shorturl.at/evS12", text: "this is tile8" },
  ];

  const serviceTiles = [
    { image: "https://shorturl.at/hMNV7" },
    { image: "https://shorturl.at/hMNV7" },
    { image: "https://shorturl.at/hMNV7" },
  ];

  return (
    <div className="flex-wrap">
      <Banner />
      <Section tiles={tiles} title={"This is a section title"}>
        <Grid gap={1} cols={4}>
          {tiles.map((tile, index) => (
            <Tile key={index} image={tile.image} text={tile.text} />
          ))}
        </Grid>
      </Section>

      <Section
        title={"Another section title"}
        tagLine={"A tag line for this section"}
        tiles={serviceTiles}
      >
        <Grid gap={1} cols={3}>
          {serviceTiles.map((serviceTiles, index) => (
            <Tile
              key={index}
              image={serviceTiles.image}
              text={serviceTiles.text}
            />
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default Landing;
