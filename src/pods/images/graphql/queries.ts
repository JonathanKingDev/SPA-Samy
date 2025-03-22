import { gql } from "graphql-request";

export const GET_IMAGES = gql`
  query Images {
    images {
      nodes {
        picture
        id
      }
    }
  }
`;
