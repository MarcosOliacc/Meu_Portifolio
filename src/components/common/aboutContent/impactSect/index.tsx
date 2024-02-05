/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import styles from '../../../aboutMe/styles.module.scss'
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from 'react';
export function ImpactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView) { 
            mainControls.start('visible')
        }
    },[isInView])

    return <>
        <div ref={ref} className={styles.titleContent}>
            <div className={styles.soundContent}></div>
            <motion.div
            variants={{
                hidden:{opacity: 0, y: -250},
                visible: {opacity: 1, y:0}
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{
                    duration: 1.4, delay:0,ease:'easeInOut'
                }}

            className={styles.soundBg}></motion.div>
            <motion.h1
            
            variants={{
                hidden:{opacity: 0, y: 100},
                visible: {opacity: 1, y:0}
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{
                    duration: 0.5, delay:0.5
                }}
            className={styles.impactText}>Estarás pronto para agarrar um sonho aquele que não desistir de resolver um  <span >&#34;Uncaught Exception: Error&#34;</span> pelo caminho</motion.h1>
        </div>
    </>
}