
import React from "react";

const FooterLinkGroup = ({ title, links }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mt-3">
            <a href={link.url} className="font-light" >{link.text}</a>
          </li>
        ))}
      </ul>
      <hr />
      
    </div>
  );
};

export default FooterLinkGroup;
