import React from "react";
import { Picture } from "./images.vm";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./images.module.scss";
import { Card } from "./components/card.component";

interface Props {
  images: Picture[];
  hasMore: boolean;
  fetchImages: () => void;
  onLike: (imageId: string) => void;
}

export const Images = ({ images, hasMore, fetchImages, onLike }: Props) => {
  return (
    <main className={styles.main}>
      <h1 className={styles["head-title"]}>Image gallery</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        scrollThreshold={0.9}
      >
        <ul className={styles["images-list"]}>
          {images.map((image) => (
            <Card key={image.id} image={image} onLike={onLike} />
          ))}
        </ul>
      </InfiniteScroll>
    </main>
  );
};
