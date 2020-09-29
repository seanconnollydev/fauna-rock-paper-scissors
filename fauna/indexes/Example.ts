import { query } from "faunadb";
const { Collection } = query;

const Example = {
  name: "examples_by_foo",
  source: Collection("Example"),
  unique: true,
  terms: [
    {
      field: ["data", "foo"],
    },
  ],
};

export = Example;
