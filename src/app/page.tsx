import styles from '@/styles/home.module.scss'
import { Header } from "@/components/common/header";
import { VisitCart } from "@/components/visitCard";
import { AboutMe } from "@/components/aboutMe";
import { ProjectContent } from "@/components/projects/projectContent";
import { CareerSection } from '@/components/career/careerSection';
import { ContactSection } from '@/components/contact/contactSection';
import { Footer } from '@/components/footer';

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
      <section id="career" className={styles.section}>
        <CareerSection/>
      </section>
      <section id="contact" className={styles.section}>
        <ContactSection/>
      </section>
    </main>
    <section className={styles.footer}>
      <Footer/>
    </section>
    
  </>)
}
