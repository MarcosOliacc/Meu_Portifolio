import { NavBurguer } from "../navBurguer";
import { Welcome } from "../welcome";
import styles from './styles.module.scss'
import Image from "next/image";
export function Header() {
    return<>
        <div className={styles.conteiner}>
            <Welcome/>
            <nav className={styles.navPageContent}>
                <button className={styles.acessBtn}>
                    <a href="#aboutMe">
                        Sobre mim
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#projects">
                        Meus Projetos
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#career">
                        Carreira
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#contact">
                        Contato
                    <Image src='/arrowsLink.png' alt='' width={19} height={19} className={styles.arrows}/>
                    </a>
                </button>
            </nav>
            <NavBurguer/>
        </div>
    </>
}