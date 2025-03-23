import { LikeImageResponse, LikeImageData } from "../images.vm";
import { client } from "@/core/graphql-client";
import { LIKE_IMAGE } from "../graphql/queries";

export function useLike() {
  const likeImage = async (imageId: string): Promise<LikeImageData> => {
    const data = await client.request<LikeImageResponse>(LIKE_IMAGE, {
      imageId,
    });
    return data.likeImage.image;
  };

  return { likeImage };
}
