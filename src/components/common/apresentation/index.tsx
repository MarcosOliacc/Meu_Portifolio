/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import styles from '../../visitCard/styles.module.scss';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

export function Presentation() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()
    useEffect(()=> {
        if(isInView) {
            mainControls.start('visible')
        }
    },[isInView])
    return <>
        <div ref={ref} className={styles.descripContent}>
            <motion.h1
            variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y:0}
            }}
            initial= 'hidden'
            animate= {mainControls}
            transition={{
                duration: 0.3, delay:0.1
            }}
            className={styles.devName}>Marcos Vinicius Oliveira</motion.h1>
            <motion.h1
            variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y:0}
            }}
            initial= 'hidden'
            animate= {mainControls}
            transition={{
                duration: 0.3, delay:0.3
            }}
            className={styles.devJob1}>Full-Stack Enginer Web</motion.h1>
            <motion.h1
            variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y:0}
            }}
            initial= 'hidden'
            animate= {mainControls}
            transition={{
                duration: 0.3, delay:0.5
            }}
            className={styles.devJob2}>e Freelancer Developer</motion.h1>
            <motion.p
            variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y:0}
            }}
            initial= 'hidden'
            animate= {mainControls}
            transition={{
                duration: 0.3, delay:0.7
            }}
            className={styles.devWords}>Sinta-se à vontade para explorar e aprender um pouco sobre mim : )</motion.p>
            
            <motion.nav
            variants={{
            hidden:{opacity: 0, y: 50},
            visible: {opacity: 1, y:0}
            }}
            initial= 'hidden'
            animate= 'visible'
            transition={{
                duration: 0.3, delay:0.9
            }}
            className={styles.navLinks}>
                <a target='blank' href="https://www.linkedin.com/in/marcos-oliveira-733151291/">Linkedin <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                <a target='blank' href="https://www.instagram.com/vinixos1/">Instagram <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
                <a target='blank' href="https://github.com/MarcosOliacc">GitHub <Image src='/arrowsLink.png' alt='' width={25} height={25} className={styles.arrows}/></a>
            </motion.nav>
        </div>
    </>
}