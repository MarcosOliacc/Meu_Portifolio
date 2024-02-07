/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import { Header } from '../header'
import styles from './styles.module.scss'
import { useEffect, useState, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion';
import { TimelineAcademic } from '../timelineacademic';

export function CareerSection() {
    const ref = useRef(null)
    const isInview = useInView(ref, {once:true})
    const mainControls = useAnimation()
    const mainControls2 = useAnimation()
    const [timeline, setTimeline] = useState(0)
    const [lines, setLines] = useState(false)
    const [lineHeight, setLineHeight] = useState('200px')
    
    useEffect(()=>{
        if(isInview) {
            setTimeout(()=>{mainControls.start('visible')},1000)
        }
        mainControls.start('hidden')
        setTimeout(()=>{
            if(!lines) {
            setLineHeight('200px')
            setTimeline(0)
            } else {
                setTimeline(1)
                setLineHeight('1000px')
                
            }
            mainControls.start('visible') 
        },800)
        
    },[lines,isInview])
    useEffect(()=>{if(isInview)mainControls2.start('visible')},[isInview])
    return<>
        <motion.div
        variants={{
            hidden:{opacity: 0},
            visible: {opacity: 1}
            }}
            initial= 'hidden'
            animate= {mainControls}
            transition={{
                duration: 2, delay: 0.5
            }}
        className={styles.conteiner}>
            <Header title={timeline? 'Minha Carreira Acadêmica': 'Minha Carreira Profissional'}/>
            <div ref={ref} className={styles.careerContent}>
                
                <div className={styles.firstPoint}><p>Jane 2023</p></div>
                <motion.div
                variants={{
                    hidden:{y: Number(`-${lineHeight.split('').slice(0,3).join('')}`)*30},
                    visible: {y:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 2, delay: 0.2
                    }}
                style={{height: lineHeight}}
                className={styles.timelineContent}>
                    {timeline?<TimelineAcademic/>:''}
                    <div className={styles.lastPoint}></div>
                </motion.div>
                <div className={styles.finalContent}>
                    <p>{timeline?
                    'Hoje me encontro focando ao máximo para realizar meu sonho de me tornar um programador, descobrindo e aprendendo cada vez mais.'
                    :'Esta é a minha linha do tempo de carreira, tenho fé que um dia a oportunidade virá e as linhas serão preenchidas. Sinta-se a vontade para ver minha jornada acadêmica.'
                    }</p>

                    <Image className={styles.arrow} alt='' src='/arrowLeft.svg' width={30} height={30}/>
                    <a href="#career">
                    <button onClick={()=>setLines((st)=>!st)}>{timeline? 'Carreira':'Acadêmico'}</button>
                    </a>
                </div>
                
            </div>
        </motion.div>
    </>
}