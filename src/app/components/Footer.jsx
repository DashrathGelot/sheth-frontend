import Grid from "./common/Grid";
import FooterLinkGroup from "./FooterLinkGroup";

const Footer = ({ footerLinksData }) => {
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