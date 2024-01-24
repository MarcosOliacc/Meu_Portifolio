import Image from "next/image";
import styles from '@/styles/home.module.scss'
import { Open_Sans } from "next/font/google";
import { Welcome } from "@/components/common/welcome";

export default function Home() {
  return (<>
    <main className={styles.main}>
      <Welcome/>
      <h1 className={styles.area1} >
        
        <p className=''>Texto que vai aparecer reveal</p>
        <p>Texto que vai aparecer reveal</p>
        <p>Texto que vai aparecer reveal</p>
        </h1>
    </main>
  </>)
}
