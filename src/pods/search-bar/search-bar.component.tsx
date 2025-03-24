import { CiSearch } from "react-icons/ci";
import styles from "./search-bar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <CiSearch className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        placeholder="You're looking for something?"
      />
    </div>
  );
};
