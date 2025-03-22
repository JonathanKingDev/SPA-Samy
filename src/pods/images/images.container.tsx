"use client";
import React from "react";
import { useImages } from "./hook/useImages";
import { Images } from "./images.component";

export const ImagesContainer = () => {
  const { images, loading } = useImages();

  return <Images images={images} loading={loading} />;
};
