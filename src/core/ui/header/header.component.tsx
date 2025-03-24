"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import { SearchBarContainer } from "@/pods/search-bar";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 50;
  const rotation = scrollY * 0.3;

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logoWrapper}>
        <Image
          src="/samy-logo.svg"
          alt="Logo SAMY"
          width={138}
          height={24}
          className={`${styles.logo} ${isScrolled ? styles.fadeOut : ""}`}
        />
        <Image
          src="/spinner.svg"
          alt="Spinner"
          width={45}
          height={45}
          className={`${styles.spinnerLogo} ${
            isScrolled ? styles.visible : ""
          }`}
          style={{ transform: `rotate(${rotation}deg)`, marginRight: "45px" }}
        />
      </div>

      <div className={styles.searchBar}>
        <SearchBarContainer placeholder="You're looking for something?" />
      </div>
    </header>
  );
};
