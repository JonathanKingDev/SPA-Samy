import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://sandbox-api-test.samyroad.com/graphql"
);
