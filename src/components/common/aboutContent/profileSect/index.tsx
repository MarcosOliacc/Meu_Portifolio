'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect,useState } from 'react';
import styles from './styles.module.scss'

export function ProfileSect() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    const [bar1, setBar1] = useState(0)
    const [bar2, setBar2] = useState(0)
    const [bar3, setBar3] = useState(0)
    const [bar4, setBar4] = useState(0)

    useEffect(()=> {
        if(isInView) {
            mainControls.start('visible')
            let res1 = 0
            const res2 = 50
            const res3 = 20
            const res4 = 70
            const typer:any = setInterval(()=> {
                if(res1 >= 80) {
                    clearInterval(typer)
                }     
                else {
                    res1++
                    setTimeout(()=>{setBar1(state=>state += 1)},600)
                }      
            },20)
            
        }
    },[isInView])

    return <>
        <div ref={ref} className={styles.conteiner}>
            <div className={styles.tecnosContent}>
                <div className={styles.tecnologies1}></div>
                <div className={styles.tecnologies2}></div>
                <div className={styles.tecnologies3}></div>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.cards}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sequi voluptate et facilis nobis ex error in! Unde, sint perspiciatis corporis itaque aperiam reiciendis, repudiandae adipisci expedita consectetur quos praesentium!</p>
                </div>
                <div className={styles.cards}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sequi voluptate et facilis nobis ex error in! Unde, sint perspiciatis corporis itaque aperiam reiciendis, repudiandae adipisci expedita consectetur quos praesentium!</p>
                </div>
                <div className={styles.cards}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sequi voluptate et facilis nobis ex error in! Unde, sint perspiciatis corporis itaque aperiam reiciendis, repudiandae adipisci expedita consectetur quos praesentium!</p>
                </div>
            </div>
            <div className={styles.analytcsContent}>
                <h2>Tecnologias / Projetos feitos</h2>
                <div className={styles.graph}>
                    <h2>JavaScript</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <motion.div
                            variants={{
                                hidden:{x: -250},
                                visible: {x:-40}
                                }}
                                initial= 'hidden'
                                animate= {mainControls}
                                transition={{
                                    duration: 2, delay:0.3
                                }}
                            className={styles.bar}></motion.div>
                        </div>
                        <p className={styles.porcents}>{bar1}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>JavaScript</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <motion.div
                            variants={{
                                hidden:{x: -250},
                                visible: {x:-40}
                                }}
                                initial= 'hidden'
                                animate= {mainControls}
                                transition={{
                                    duration: 2, delay:0.3
                                }}
                            className={styles.bar}></motion.div>
                        </div>
                        <p className={styles.porcents}>{bar1}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>JavaScript</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <motion.div
                            variants={{
                                hidden:{x: -250},
                                visible: {x:-40}
                                }}
                                initial= 'hidden'
                                animate= {mainControls}
                                transition={{
                                    duration: 2, delay:0.3
                                }}
                            className={styles.bar}></motion.div>
                        </div>
                        <p className={styles.porcents}>{bar1}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>JavaScript</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <motion.div
                            variants={{
                                hidden:{x: -250},
                                visible: {x:-40}
                                }}
                                initial= 'hidden'
                                animate= {mainControls}
                                transition={{
                                    duration: 2, delay:0.3
                                }}
                            className={styles.bar}></motion.div>
                        </div>
                        <p className={styles.porcents}>{bar1}%</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}