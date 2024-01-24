import Image from 'next/image'
import styles from './styles.module.scss'

export function VisitCart() {
    return <>
        <section className={styles.conteiner}>
            <div className={styles.imgContent}>
                <h2>Olá!, eu sou...</h2>
                <Image src='/marcos.jpg' alt='' width={250} height={250} className={styles.img}/>
            </div>
            <div className={styles.descripContent}>
                <h1 className={styles.devName}>Marcos Vinicius Oliveira</h1>
                <h1 className={styles.devJob1}>Full-Stack Enginer Web</h1>
                <h1 className={styles.devJob2}>e Freelancer Developer</h1>
                <p className={styles.devWords}>Sinta-se à vontade para explorar e aprender um pouco sobre mim : )</p>

                <nav className={styles.navLinks}>
                    <a target='blank' href="https://www.linkedin.com/in/marcos-oliveira-733151291/">Linkedin <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                    <a target='blank' href="https://www.instagram.com/vinixos1/">Instagram <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                    <a target='blank' href="https://github.com/MarcosOliacc">GitHub <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                </nav>
            </div>
            <div className={styles.navPageContent}>

            </div>
        </section>
    </>
}