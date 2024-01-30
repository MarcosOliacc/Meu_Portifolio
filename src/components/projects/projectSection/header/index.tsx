/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import styles from './styles.module.scss'
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

export function Header() {
    const ref = useRef(null)
    const isInview = useInView(ref, {once:true})
    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInview) {
            mainControls.start('visible')
        }
    },[isInview])

    return<>
        <div className={styles.headerContent}>
            <div className={styles.circuitOver}>
                <div className={styles.circuitContent}></div>
                <motion.div
                variants={{
                    hidden:{opacity: 0, x: -650},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1.5, delay:0,ease:'easeInOut'
                    }}
                
                className={styles.circuits}></motion.div> 
            </div>
            <div ref={ref} className={styles.header}>      
                <motion.h1
                variants={{
                    hidden:{opacity: 0},
                    visible: {opacity: 1}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 2, delay:0.7
                    }}
                >Projetos Pessoais e Acadêmicos</motion.h1>
                <nav className={styles.navContent}>
                    <motion.button
                    variants={{
                    hidden:{opacity: 0, x: 100},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.4,ease:'easeOut'
                    }}
                    >OneBitFlix</motion.button>
                    <motion.button
                    variants={{
                    hidden:{opacity: 0, x: 100},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.6,ease:'easeOut'
                    }}
                    >Ranger Rover</motion.button>
                    <motion.button
                    variants={{
                    hidden:{opacity: 0, x: 100},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.8,ease:'easeOut'
                    }}
                    >Fresco Pizzaria</motion.button>
                    <motion.button
                    variants={{
                    hidden:{opacity: 0, x: 100},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:1,ease:'easeOut'
                    }}
                    >Banco Digital</motion.button>
                    <motion.p
                    variants={{
                    hidden:{opacity: 0, x: 100},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:1.2,ease:'easeOut'
                    }}
                    >Em breve mais projetos...</motion.p>
                </nav>
            </div>
        </div>
        
        
    </>
}