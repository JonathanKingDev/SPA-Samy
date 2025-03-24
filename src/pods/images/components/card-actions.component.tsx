import React from "react";
import { IoMdSend } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import styles from "../images.module.scss";

interface Props {
  likesCount: number;
  imageId: string;
  liked: boolean;
  onLike: (imageId: string) => void;
}

export const CardActions = ({ likesCount, imageId, liked, onLike }: Props) => {
  return (
    <div className={styles["image-buttons"]}>
      <button
        className={styles.button}
        onClick={() => onLike(imageId)}
        aria-pressed={liked}
        aria-label={liked ? "Unlike image" : "Like image"}
      >
        <span className={`${liked ? styles.liked : ""}`}>
          {liked ? (
            <FaHeart size={25} color="red" />
          ) : (
            <CiHeart size={25} color="red" />
          )}
        </span>
        <span>{likesCount}</span>
      </button>
      <button className={styles.button} aria-label="Send image">
        <IoMdSend className={styles["send-icon"]} size={20} />
        <span>0</span>
      </button>
    </div>
  );
};
