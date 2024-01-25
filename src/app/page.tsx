import Image from "next/image";
import styles from '@/styles/home.module.scss'
import { Open_Sans } from "next/font/google";
import { Welcome } from "@/components/common/welcome";
import { VisitCart } from "@/components/visitCard";

export default function Home() {
  return (<>
    <main className={styles.main}>
      <Welcome/>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <VisitCart/>
      <div id="aa" className={styles.teste}><p>aaaaaaaaaaa</p></div>
    </main>
  </>)
}
