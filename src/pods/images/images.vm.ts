export interface Picture {
  id: string;
  picture: string;
  author: string;
  liked: boolean;
  likesCount: number;
  price: number;
  title: string;
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface GetPicturesResponse {
  images: {
    nodes: Picture[];
    pageInfo: PageInfo;
  };
}

export interface LikeImageData {
  id: string;
  liked: boolean;
  likesCount: number;
}

export interface LikeImageResponse {
  likeImage: {
    clientMutationId: string;
    image: Picture;
  };
}
