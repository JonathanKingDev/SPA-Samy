import { Picture } from "../images.vm";

import Image from "next/image";
import styles from "../images.module.scss";
import { CardActions } from "./card-actions.component";

interface Props {
  image: Picture;
  onLike: (imageId: string) => void;
}

export const Card = ({ image, onLike }: Props) => {
  return (
    <li key={image.id}>
      <article className={styles.card}>
        <div className={styles.price}>{image.price} €</div>

        <Image
          src={image.picture}
          alt={`${image.title} by ${image.author}`}
          width={300}
          height={300}
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

        <CardActions
          likesCount={image.likesCount}
          imageId={image.id}
          liked={image.liked}
          onLike={onLike}
        />
      </article>
    </li>
  );
};
