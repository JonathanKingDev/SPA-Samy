import { gql } from "graphql-request";

export const GET_IMAGES = gql`
  query Images($after: String, $first: Int) {
    images(after: $after, first: $first) {
      nodes {
        id
        author
        liked
        likesCount
        picture
        price
        title
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const LIKE_IMAGE = gql`
  mutation LikeImage($imageId: ID!) {
    likeImage(input: { imageId: $imageId }) {
      clientMutationId
      image {
        id
        liked
        likesCount
      }
    }
  }
`;
