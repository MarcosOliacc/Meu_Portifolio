import Image from "next/image";
import styles from '@/styles/home.module.scss'
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/common/header";
import { VisitCart } from "@/components/visitCard";

export default function Home() {
  return (<>
    <main className={styles.main}>
      <Header/>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <VisitCart/>
      <div id="aa" className={styles.teste}><p>aaaaaaaaaaa</p></div>
    </main>
  </>)
}
