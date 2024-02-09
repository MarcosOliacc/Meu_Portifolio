'use client'
import styles from '../../visitCard/styles.module.scss'
import Image from 'next/image'
import { motion, useInView, useAnimation } from "framer-motion";
export function NavPage() {
    return <>
    <div className={styles.navPageContent}>
        <motion.button
        variants={{
            hidden:{opacity: 0, x:150},
            visible: {opacity: 1, x:0}
            }}
            initial= 'hidden'
            animate= 'visible'
            transition={{
                duration: 0.3, delay: 0.5
            }}
        className={styles.acessBtn}>
            <a href="#aboutMe">Sobre mim <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
        </motion.button>
        <motion.button
        variants={{
            hidden:{opacity: 0, x:150},
            visible: {opacity: 1, x:0}
            }}
            initial= 'hidden'
            animate= 'visible'
            transition={{
                duration: 0.3, delay: 0.6
            }}
        className={styles.acessBtn}>
            <a href="#projects">Meus Projetos <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
        </motion.button>
        <motion.button
        variants={{
            hidden:{opacity: 0, x:150},
            visible: {opacity: 1, x:0}
            }}
            initial= 'hidden'
            animate= 'visible'
            transition={{
                duration: 0.3, delay: 0.7
            }}
        className={styles.acessBtn}>
            <a href="#career">Carreira <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
        </motion.button>
        <motion.button
        variants={{
        hidden:{opacity: 0, x:150},
        visible: {opacity: 1, x:0}
        }}
        initial= 'hidden'
        animate= 'visible'
        transition={{
            duration: 0.3, delay: 0.8
        }}
        className={styles.acessBtn}>
            <a href="#contact">Contato <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
        </motion.button>
    </div>
    </>
}