import { gql } from "graphql-request";

export const GET_IMAGES = gql`
  query Images {
    images {
      nodes {
        author
        id
        liked
        likesCount
        picture
        price
        title
      }
    }
  }
`;
