import Image from "next/image";
import styles from '@/styles/home.module.scss'

export default function Home() {
  return (<>
    <main className={styles.main}>
      <h1 className={styles.area1} >
        <p>Texto que vai aparecer reveal</p>
        <p>Texto que vai aparecer reveal</p>
        <p>Texto que vai aparecer reveal</p>
        </h1>
    </main>
  </>)
}
