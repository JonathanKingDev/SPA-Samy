import React from "react";
import styles from "./not-found.module.scss";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.error}>Search Again</h1>
      <div className={styles.message} role="alert" aria-live="assertive">
        Image Not found
      </div>
    </main>
  );
};
