import { gql } from "@apollo/client";

import client from "./client";

const getCompanies = () =>
  client.query({
    query: gql`
      query companies {
        companies {
          id
          name
        }
      }
    `,
  });

const companies = [
  {
    name: "Apollo",
  },
  {
    name: "Prisma",
  },
  {
    name: "Mixcloud",
  },
  {
    name: "ProKeep",
  },
  {
    name: "Formidable",
  },
  {
    name: "Kickstarter",
  },
  {
    name: "Hasura",
  },
  {
    name: "GraphCMS",
  },
  {
    name: "Verbling",
  },
  {
    name: "Verve",
  },
  {
    name: "Bustle Digital Group",
  },
  {
    name: "Shopify",
  },
  {
    name: "The New York Times",
  },
  {
    name: "Artsy",
  },
  {
    name: "Twitter",
  },
  {
    name: "Crystallize",
  },
  {
    name: "New Story",
  },
  {
    name: "StackShare",
  },
  {
    name: "Cheddar",
  },
  {
    name: "Amplitude",
  },
  {
    name: "Jupiter",
  },
  {
    name: "Saagie",
  },
  {
    name: "1stdibs",
  },
  {
    name: "Glossier",
  },
  {
    name: "GoCo",
  },
  {
    name: "Digital Warehouse, YouSee",
  },
  {
    name: "EverEstate",
  },
  {
    name: "Mirumee",
  },
  {
    name: "4th Source",
  },
  {
    name: "Inside Labs",
  },
  {
    name: "Appier",
  },
  {
    name: "Taikai",
  },
  {
    name: "Blender Bottle",
  },
  {
    name: "Catapult",
  },
  {
    name: "Kittyhawk",
  },
  {
    name: "MojoTech",
  },
  {
    name: "DataStax",
  },
  {
    name: "Stockwell",
  },
  {
    name: "AddJust",
  },
  {
    name: "Close",
  },
  {
    name: "Theorem",
  },
  {
    name: "DeepCrawl",
  },
  {
    name: "Segment",
  },
  {
    name: "Unrealists",
  },
];

export default {
  getCompanies,
};
