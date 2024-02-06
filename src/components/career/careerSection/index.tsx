/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Header } from '../header'
import styles from './styles.module.scss'
import { useEffect, useState, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion';

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
                setLineHeight('800px')
                setTimeline(1)
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
                    hidden:{y: Number(`-${lineHeight.split('').slice(0,3).join('')}`)*5},
                    visible: {y:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 0.8, delay: 0.2
                    }}
                style={{height:lineHeight}}
                className={styles.timelineContent}>
                    {timeline? <>
                        <div className={styles.card1}>
                            <div className={styles.lines}>
                                <div className={styles.line1}></div>
                                <div className={styles.line2}></div>
                            </div>
                            <div className={styles.textContent1}>
                                <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis quam vitae accusamus unde nesciunt fugiat. Expedita iste dolorem laborum architecto maxime! Obcaecati harum eligendi ducimus et omnis corrupti quibusdam.</p>
                            </div>
                        </div>

                        <div className={styles.point2}></div>

                        <div className={styles.card2}>
                            <div className={styles.lines}>
                                <div className={styles.line3}></div>
                                <div className={styles.line4}></div>
                            </div>
                            <div className={styles.textContent2}>
                                <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis quam vitae accusamus unde nesciunt fugiat. Expedita iste dolorem laborum architecto maxime! Obcaecati harum eligendi ducimus et omnis corrupti quibusdam.</p>
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <div className={styles.lines}>
                                <div className={styles.line3}></div>
                                <div className={styles.line4}></div>
                            </div>
                            <div className={styles.textContent2}>
                                <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis quam vitae accusamus unde nesciunt fugiat. Expedita iste dolorem laborum architecto maxime! Obcaecati harum eligendi ducimus et omnis corrupti quibusdam.</p>
                            </div>
                        </div>
                        <div className={styles.card3}>
                            <div className={styles.lines}>
                                <div className={styles.line8}></div>
                                <div className={styles.line9}></div>
                                <div className={styles.line10}></div>
                            </div>
                            <div className={styles.textContent3}>
                                <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis quam vitae accusamus unde nesciunt fugiat. Expedita iste dolorem laborum architecto maxime! Obcaecati harum eligendi ducimus et omnis corrupti quibusdam.</p>
                            </div>
                        </div>
                        <div className={styles.card4}>
                            <div className={styles.lines}>
                                <div className={styles.line5}></div>
                                <div className={styles.line6}></div>
                                <div className={styles.line7}></div>
                            </div>
                            <div className={styles.textContent4}>
                                <p className={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis quam vitae accusamus unde nesciunt fugiat. Expedita iste dolorem laborum architecto maxime! Obcaecati harum eligendi ducimus et omnis corrupti quibusdam.</p>
                            </div>
                        </div>

                        <div className={styles.point3}></div>
                        





            




                    </>:''}
                    <div className={styles.lastPoint}></div>
                </motion.div>
                <p onClick={()=>setLines((st)=>!st)}>alo</p>
            </div>
        </motion.div>
    </>
}