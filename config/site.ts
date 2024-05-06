export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Policy",
      href: "/policy",
    },
    {
      label: "MyShop",
      href: "/myshop",
    },
    
	],
	navMenuItems: [
		{
			label: "About Us",
			href: "/about",
		  },
		  {
			label: "Policy",
			href: "/policy",
		  },
		  {
			label: "MyShop",
			href: "/myshop",
		  },
	],

};
