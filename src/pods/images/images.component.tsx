import React from "react";
import Image from "next/image";
import { Picture } from "./images.vm";
import { IoMdSend } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import styles from "./images.module.scss";

interface Props {
  images: Picture[];
  loading: boolean;
}

export const Images = ({ images, loading }: Props) => {
  return (
    <main>
      <h1 className={styles["head-title"]}>Image gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles["images-list"]}>
          {images.map((image) => (
            <li key={image.id}>
              <article className={styles.card}>
                <div className={styles.price}>{image.price} €</div>

                <Image
                  src={image.picture}
                  alt={`${image.title} by ${image.author}`}
                  width={300}
                  height={300}
                  priority={false}
                  className={styles.image}
                />

                <div className={styles["info-container"]}>
                  <h2 className={styles["card-title"]} title={image.title}>
                    {image.title}
                  </h2>
                  <p className={styles.author}>
                    <span>by</span> {image.author}
                  </p>
                </div>

                <div className={styles["image-buttons"]}>
                  <button className={styles.button}>
                    <CiHeart size={25} color="red" />
                    <span>{image.likesCount}</span>
                  </button>
                  <button className={styles.button}>
                    <IoMdSend className={styles["send-icon"]} size={20} />
                    <span>0</span>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
