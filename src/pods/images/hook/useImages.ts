"use client";
import { useEffect, useState } from "react";
import { client } from "@/core/graphql-client";
import {
  GET_FILTERED_IMAGES,
  GET_IMAGES,
  LIKE_IMAGE,
} from "../graphql/queries";
import { GetPicturesResponse, LikeImageResponse, Picture } from "../images.vm";

export function useImages() {
  const [images, setImages] = useState<Picture[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState<string | null>(null);

  const fetchImages = async (reset = false) => {
    if (!hasMore && !reset) return;

    const data = await client.request<GetPicturesResponse>(GET_IMAGES, {
      after: reset ? null : cursor,
      first: 12,
    });

    setImages((prev) =>
      reset ? data.images.nodes : [...prev, ...data.images.nodes]
    );
    setHasMore(data.images.pageInfo.hasNextPage);
    setCursor(data.images.pageInfo.endCursor);
  };

  const likeImage = async (imageId: string) => {
    const data = await client.request<LikeImageResponse>(LIKE_IMAGE, {
      imageId,
    });
    const updatedImage = data.likeImage.image;

    setImages((prevImages) =>
      prevImages.map((img) =>
        img.id === updatedImage.id ? { ...img, ...updatedImage } : img
      )
    );
  };

  const fetchFilteredImages = async (title: string) => {
    const data = await client.request<GetPicturesResponse>(
      GET_FILTERED_IMAGES,
      {
        title,
      }
    );

    setImages(data.images.nodes);
    setHasMore(false);
    setCursor(null);
  };

  useEffect(() => {
    fetchImages(true);
  }, []);

  return {
    images,
    hasMore,
    fetchImages,
    likeImage,
    fetchFilteredImages,
  };
}
