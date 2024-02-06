/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import styles from './styles.module.scss'
import { useEffect, useState, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion';

interface Props {
    title: string
}
export function Header({title}:Props) {
    const ref = useRef(null)
    const isInview = useInView(ref, {once:true})
    const mainControls = useAnimation()
    const mainControls2 = useAnimation()
    const [curTitle, setTitle] = useState('')

    useEffect(()=> {
        if(isInview) {
            setTimeout(()=>{mainControls.start('visible')},1000)
        }
        mainControls.start('hidden')
        setTimeout(()=>{
           setTitle(title) 
           mainControls.start('visible') 
        },800)


    },[title,isInview])
    useEffect(()=>{if(isInview)mainControls2.start('visible')},[isInview])

    return<>
        <div ref={ref} className={styles.conteiner}>
            <div className={styles.bgContent}></div>
            <motion.div
            variants={{
                hidden:{opacity: 0, y: 200},
                visible: {opacity: 1, y:0}
                }}
                initial= 'hidden'
                animate= {mainControls2}
                transition={{
                    duration: 0.8, delay: 0.8
                }}
            className={styles.bg}></motion.div>
            <motion.h1
            variants={{
                hidden:{opacity: 0, y: 200},
                visible: {opacity: 1, y:0}
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{
                    duration: 0.8,delay:0.2
                }}
            className={styles.title}>{curTitle}</motion.h1>
        </div>
    </>
}