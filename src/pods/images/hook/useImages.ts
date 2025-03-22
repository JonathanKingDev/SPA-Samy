"use client";
import { useEffect, useState } from "react";
import { GET_IMAGES } from "../graphql/queries";
import { client } from "@/core/graphql-client";
import { GetPicturesResponse, Picture } from "../images.vm";

export function useImages() {
  const [images, setImages] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    client.request<GetPicturesResponse>(GET_IMAGES).then((data) => {
      setImages(data.images.nodes);
      setLoading(false);
    });
  }, []);

  return { images, loading };
}
