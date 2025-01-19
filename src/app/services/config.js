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
          text: "Need help? Our Client Advisors are just a E-mail away at help@rollyrich.com.",
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
      title: "Email Sign-Up",
      links: [
        {
          text: "Sign up for Rolly Rich emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.",
          url: "#",
        }
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
    "blue": "bg-[blue]",
    "black": "bg-[black]",
    "gray": "bg-[gray]"
  }
};
