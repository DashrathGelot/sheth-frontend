const FooterLinkGroup = ({ title, links }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-900 uppercase ml-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index} className="mt-3 px-4">
            <a href={link.url} className="text-sm text-gray-600 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default FooterLinkGroup;