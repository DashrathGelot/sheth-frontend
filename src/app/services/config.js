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
  cart: {
    items: [
      {
        id: 1,
        name: "Damier Cotton Pique Polo",
        color: "Midnight Blue",
        size: "S",
        price: 845.00,
        imageUrl: "https://shorturl.at/M5sKJ",
        quantityOptions: [1, 2, 3, 4, 5]
      }
    ],
    totals: {
      subtotal: 845.00,
      shipping: 0.00,
      tax: "Will be calculated according to your delivery address",
      total: 845.00
    }
  },
  productDetails: {
    name: "Men Striped Polo Neck Polyester Light Green T-Shirt",
    title: "Men Striped Polo Neck Polyester Light Green T-Shirt",
    price: "$465.00",
    colors: ["Light Blue", "Red", "Green", "Pink"],  
    sizes: ["S", "M", "L", "XL"],     
    images: [
      "https://shorturl.at/evS12",
      "https://shorturl.at/hUm9i"
    ],
    accordions: [
      { title: "Accordion Title 1 ", details: "This is details for accordion 1." },
      { title: "Accordion Title 2", details: "This is details for accordion 2." },
      { title: "Accordion Title 3", details: "This is details for accordion 3." },
    ]
  },
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
  productAccords: ['Product Details', 'Delivery and Return']
};
