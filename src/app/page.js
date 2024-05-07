// import Button from "./components/Button";
import Tile from "./components/Tile";
// import Testimg from "./assets/images/test.webp";

export default function Home() {
  return (
    <main className="container">
      <Tile
        image={
          "https://cdn.shopify.com/s/files/1/0250/5057/9028/files/WSP24_46342520_ESSENTIAL_RELAXED_TEE_TOFU_MED_01_0026.jpg?v=1706730186"
        }
        title={"this is title"}
      />
    </main>
  );
}
