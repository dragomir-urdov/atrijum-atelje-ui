import * as globals from "@/globals";

export const links = [
  {
    id: "home-route",
    title: globals.ROUTES.HOME,
    name: globals.ROUTES.HOME,
  },
  {
    id: "engagements",
    title: "Engagements",
    name: globals.ROUTES.COLLECTIONS,
    param: "engagements",
    subLinks: [
      {
        title: "Hello",
        param: {
          id: "hello",
        },
        image: "/images/all-rings.png",
      },
      {
        title: "World",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
    ],
  },
  {
    id: "brands",
    title: "Brands",
    name: globals.ROUTES.COLLECTIONS,
    param: "brands",
    subLinks: [
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
    ],
  },
  {
    id: "collections",
    title: "Collections",
    name: globals.ROUTES.COLLECTIONS,
    param: "collection",
    subLinks: [
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
      {
        title: "Some",
        param: "",
        image: "/images/all-rings.png",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    name: globals.ROUTES.COLLECTIONS,
    param: "extras",
  },
  {
    id: "about-us-route",
    title: globals.ROUTES.ABOUT,
    name: globals.ROUTES.ABOUT,
  },
];
