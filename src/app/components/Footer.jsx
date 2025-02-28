import IconButton from "./common/IconButton";
import FooterLinkGroup from "./FooterLinkGroup";
import Link from "next/link";

const Footer = ({ footerLinksData }) => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-40">
      <div className="max-w-[100%] mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-8">
          {footerLinksData.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>
        <div className="mt-10 border-gray-200 pt-4 flex flex-col items-center space-y-4 px-4 py-6 relative">
          <h3 className="text-lg font-semibold mb-4">
            Follow Us on Social Media
          </h3>
          <div className="flex space-x-6">
            <IconButton
              iconSrc="/facebook.svg"
              altText="Facebook"
              onClick={() => window.open("https://facebook.com", "_blank")}
            />
            <IconButton
              iconSrc="/twitter.svg"
              altText="Twitter"
              onClick={() => window.open("https://twitter.com", "_blank")}
            />
            <IconButton
              iconSrc="/instagram.svg"
              altText="Instagram"
              onClick={() => window.open("https://instagram.com", "_blank")}
            />
            <IconButton
              iconSrc="/linkedin.svg"
              altText="LinkedIn"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 text-gray-600 text-sm">
            <Link href="/privacyPolicy" className="hover:underline">
              Legal Notices
            </Link>
            <Link href="/privacyPolicy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-gray-600">© Rolly Rich</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
