import Image from "next/image";
import styles from '@/styles/home.module.scss'
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/common/header";
import { VisitCart } from "@/components/visitCard";
import { AboutMe } from "@/components/aboutMe";

export default function Home() {
  return (<>
    <main className={styles.main}>
      <section className={styles.section}>
        <Header/>
        <div className={styles.img1}></div>
        <div className={styles.img2}></div>
        <VisitCart/>
      </section>
      <section id="aboutMe" className={styles.section}>
          <AboutMe/>
      </section>
    </main>
  </>)
}
