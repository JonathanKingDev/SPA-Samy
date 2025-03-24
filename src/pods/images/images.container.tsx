"use client";
import React from "react";
import { useImages } from "./hook/useImages";
import { Images } from "./images.component";

export const ImagesContainer = () => {
  const { images, fetchImages, hasMore, likeImage } = useImages();

  const handleLike = (imageId: string) => {
    likeImage(imageId);
  };

  return (
    <Images
      images={images}
      hasMore={hasMore}
      fetchImages={fetchImages}
      onLike={handleLike}
    />
  );
};
