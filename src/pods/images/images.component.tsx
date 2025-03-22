import React from "react";
import Image from "next/image";
import { Picture } from "./images.vm";

interface Props {
  images: Picture[];
  loading: boolean;
}

export const Images = ({ images, loading }: Props) => {
  return (
    <main>
      <h1>Images</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.picture}
              alt="images"
              width={400}
              height={400}
              priority={false}
            />
          ))}
        </ul>
      )}
    </main>
  );
};
