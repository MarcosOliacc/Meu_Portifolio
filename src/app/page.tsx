import styles from '@/styles/home.module.scss'
import { Header } from "@/components/common/header";
import { VisitCart } from "@/components/visitCard";
import { AboutMe } from "@/components/aboutMe";
import { ProjectContent } from "@/components/projects/projectContent";
import { CareerSection } from '@/components/career/careerSection';

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
      <section id="projects" className={styles.section}>
        <ProjectContent/>
      </section>
      <section id="projects" className={styles.section}>
        <CareerSection/>
      </section>
    </main>
  </>)
}
