import { query } from "faunadb";
import { Debug } from "faunadb-fql-lib";
const { Lambda, Query } = query;

const Example = {
  name: "test",
  body: Query(Lambda([], Debug({ foo: "bar" }))),
};

export = Example;
