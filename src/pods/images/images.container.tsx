"use client";
import React, { useEffect } from "react";
import { useImages } from "./hook/useImages";
import { Images } from "./images.component";
import { NotFound } from "@/common/not-found/not-found.component";
import { useSearchParams } from "next/navigation";

export const ImagesContainer = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const { images, fetchImages, hasMore, likeImage, fetchFilteredImages } =
    useImages();

  const handleLike = (imageId: string) => {
    likeImage(imageId);
  };

  useEffect(() => {
    if (query === "") {
      fetchImages(true);
    } else if (query) {
      fetchFilteredImages(query);
    }
  }, [query]);

  return (
    <>
      {query && images.length === 0 ? (
        <NotFound />
      ) : (
        <Images
          images={images}
          hasMore={hasMore}
          fetchImages={fetchImages}
          onLike={handleLike}
        />
      )}
    </>
  );
};
