export interface Picture {
  id: string;
  picture: string;
}

export interface GetPicturesResponse {
  images: {
    nodes: Picture[];
  };
}
