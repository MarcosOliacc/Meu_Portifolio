import Image from 'next/image'
import styles from './styles.module.scss'

export function Footer() {
    return<>
        <div className={styles.conteiner}>
            <div className={styles.footerContent}>
                <div className={styles.socialContent}>
                    <h2>Minhas Redes</h2>
                    <a target='blank' href="https://www.linkedin.com/in/marcos-oliveira-733151291/">
                        <Image src='/linkedinIcon.svg' alt='' width={40} height={40} className={styles.arrows}/>
                        Linkedin 
                    </a>
                    <a target='blank' href="https://www.instagram.com/vinixos1/">
                        <Image src='/instagramIcon.svg' alt='' width={40} height={40} className={styles.arrows}/>
                        Instagram 
                    </a>
                    <a target='blank' href="https://github.com/MarcosOliacc">
                        <Image src='/githubIcon.png' alt='' width={40} height={40} className={styles.arrows}/>
                        GitHub 
                    </a>
                </div>
                <div className={styles.acessContent}>
                    <h2>Acesse Agora</h2>
                    <a href="#aboutMe">Sobre mim
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                    <a href="#projects">Meus Projetos
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                    <a href="#career">Carreira
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                    <a href="#career">Contato
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                </div>
            </div>
            <div className={styles.copy}>
                <h3>&#169; Marcos Oliveira</h3>
            </div>
        </div>
    </>
}