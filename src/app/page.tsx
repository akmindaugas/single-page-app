import React, {useState, useEffect} from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
import Hero from "./components/Hero/Hero"
 

export default function Home() {
  return (
    <main className={styles.main}>
       <Navbar />
       <Hero/>
       <About/>
       <Gallery/>
     
    
    </main>
  );
}
