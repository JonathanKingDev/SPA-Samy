import { IoMdSend } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import styles from "../images.module.scss";

interface Props {
  likesCount: number;
  imageId: string;
  onLike: (imageId: string) => void;
}

export const CardActions = ({ likesCount, imageId, onLike }: Props) => {
  return (
    <div className={styles["image-buttons"]}>
      <button className={styles.button} onClick={() => onLike(imageId)}>
        <CiHeart size={25} color="red" />
        <span>{likesCount}</span>
      </button>
      <button className={styles.button}>
        <IoMdSend className={styles["send-icon"]} size={20} />
        <span>0</span>
      </button>
    </div>
  );
};
