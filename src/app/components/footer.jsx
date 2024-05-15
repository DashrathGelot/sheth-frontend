import React from "react";
import Grid from "../components/common/Grid";
import FooterLinkGroup from "./FooterLinkGroup";

const Footer = () => {
  const footerLinksData = [
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
  ];
  return (
    <footer className="bg-fifth text-primary py-8">
      <div className="container mx-auto">
        <Grid gap={1} cols={4}>
          {footerLinksData.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
            />
          ))}
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
