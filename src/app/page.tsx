import React, {useState, useEffect} from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar"

export default function Home() {
  return (
    <main className={styles.main}>
       <Navbar />
      <h1>
        home
      </h1>
    
    </main>
  );
}
