export const config = {
  navbar: {
    logo: "/logo.svg",
    text: "Rolly Rich",
  },
  footer: [
    {
      title: "Help",
      links: [
        {
          text: "Need help? Our Client Advisors are just a call away at +91987654321. You can also connect with us through email for personalized support at help@rollyrich.com.",
          url: "#",
        },
        { text: "FAQs", url: "#" },
        { text: "Product Care", url: "#" }
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Personalization", url: "#" },
        { text: "Gift wrapping", url: "#" },
      ],
    },
    {
      title: "About Rolly Rich",
      links: [
        { text: "Rolly Rich Culture", url: "#" },
        { text: "Latest News", url: "#" },
      ],
    },
    {
      title: "Contact US",
      links: [
        {
          text: "Subscribe to Rolly Rich emails to stay updated with the latest news from the Maison, including exclusive online pre-launches and new collections.",
          url: "#",
        },
        { text: "Follow Us", url: "#" },
      ],
    }
  ],
  menuData: [
    {
      label: 'Men',
      items: ['T-Shirt', 'Shirt', 'Sweatshirt', 'Hoodies', 'Jackets', 'Bottom Wear'],
    },
    {
      label: 'Women',
      items: ['T-Shirt', 'Shirt', 'Sweatshirt', 'Hoodies', 'Jackets', 'Jeans'],
    },
    {
      label: 'Capsules',
      items: ['T-Shirt', 'Polo', 'Jeans'],
    },
    {
      label: 'World of RollyRich'
    },
    {
      label: 'Services'
    },
  ],
  colorVariants: {
    "red": "bg-[red]",
    "blue": "bg-[blue]"
  }
};
