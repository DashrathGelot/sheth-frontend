import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const config = {
    navbar: {
      logo: "https://shorturl.at/yIY46",
      text: "SHETHH",
    },
    banner: {
      videoUrl: "https://shorturl.at/HQR14",
      imageUrl: "https://shorturl.at/evS12", // If we want to use an image
      bannerHeading: "SHETHH",
      tagLine: "Transforming Transactions with Top-Notch Service",
    },
    landing: {
      sections: [
        {
          title: "Discover a World of Shopping Delights at Our Shethh Haven",
          tiles: [
            { image: "https://shorturl.at/evS12", text: "this is tile1" },
            { image: "https://shorturl.at/evS12", text: "this is tile2" },
            { image: "https://shorturl.at/evS12", text: "this is tile3" },
            { image: "https://shorturl.at/evS12", text: "this is tile4" },
            { image: "https://shorturl.at/evS12", text: "this is tile5" },
            { image: "https://shorturl.at/evS12", text: "this is tile6" },
            { image: "https://shorturl.at/evS12", text: "this is tile7" },
            { image: "https://shorturl.at/evS12", text: "this is tile8" },
          ],
          cols: 4,
        },
        {
          title: "SHETHH SERVICE",
          tagLine: "Elevating E-commerce, One Click at a Time",
          tiles: [
            { image: "https://shorturl.at/hMNV7" },
            { image: "https://shorturl.at/hMNV7" },
            { image: "https://shorturl.at/hMNV7" },
          ],
          cols: 3,
        },
      ],
    },
    footer: {
      footerLinksData: [
        {
          title: "Column 1",
          links: [
            {
              text: "Our Client Advisors are available to assist you by phone at +1.866.VUITTON . You can also chat or email us. ",
              url: "#",
            },
            { text: "FAQs", url: "#" },
            { text: "Product Care", url: "#" },
            { text: "Stores", url: "#" },
          ],
        },
        {
          title: "Column 2",
          links: [
            { text: "Repairs", url: "#" },
            { text: "Personalization", url: "#" },
            { text: "Art of Gifting", url: "#" },
            { text: "Download our Apps", url: "#" },
          ],
        },
        {
          title: "Column 3",
          links: [
            { text: "Fashion Shows", url: "#" },
            { text: "Arts & Culture", url: "#" },
            { text: "La Maison", url: "#" },
            { text: "Sustainability", url: "#" },
            { text: "Latest News", url: "#" },
          ],
        },
        {
          title: "Column 4",
          links: [
            {
              text: "Sign up for Louis Vuitton emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.",
              url: "#",
            },
            { text: "Follow Us", url: "#" },
          ],
        },
      ],
    },
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar config={config.navbar} />
      <Landing banner={config.banner} sections={config.landing.sections} />
      <Footer footerLinksData={config.footer.footerLinksData} />
    </main>
  );
}
