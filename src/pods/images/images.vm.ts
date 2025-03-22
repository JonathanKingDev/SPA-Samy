export interface Picture {
  id: string;
  picture: string;
  author: string;
  liked: boolean;
  likesCount: number;
  price: number;
  title: string;
}

export interface GetPicturesResponse {
  images: {
    nodes: Picture[];
  };
}
