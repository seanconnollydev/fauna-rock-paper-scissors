import { query } from "faunadb";
const { Collection } = query;

const Public = {
  name: "Public",
  privileges: [
    {
      resource: Collection("Example"),
      actions: {
        read: true,
        create: true,
        delete: false,
      },
    },
  ],
};

export = Public;
