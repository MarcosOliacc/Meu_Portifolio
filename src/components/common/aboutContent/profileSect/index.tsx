'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect,useState } from 'react';
import { useMediaQuery } from "react-responsive";
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
            let res1 = 0
            let res2 = 0
            let res3 = 0
            let res4 = 0
            let typer1:any = setInterval(()=> {
                if(res1 >= 84) {
                    clearInterval(typer1)
                }     
                else {
                    res1++
                    setTimeout(()=>{setBar1(state=>state += 1)},700)
                }      
            },10)
            const typer2:any = setInterval(()=> {
                if(res2 >= 56) {
                    clearInterval(typer2)
                }     
                else {
                    res2++
                    setTimeout(()=>{setBar2(state=>state += 1)},700)
                }      
            },15)
            const typer3:any = setInterval(()=> {
                if(res3 >= 23) {
                    clearInterval(typer3)
                }     
                else {
                    res3++
                    setTimeout(()=>{setBar3(state=>state += 1)},700)
                }      
            },25)
            const typer4:any = setInterval(()=> {
                if(res4 >= 78) {
                    clearInterval(typer4)
                }     
                else {
                    res4++
                    setTimeout(()=>{setBar4(state=>state += 1)},700)
                }      
            },10)
            
        }
        if (isInView) {
            mainControls.start('visible')
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
                <motion.div
                variants={{
                    hidden:{opacity: 0, x: 250},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.5,ease:'easeInOut'
                    }}
                className={styles.cards}>
                    <p>Olá, eu sou o Marcos, estudante de Tecnologia e freelancer. Venho me empenhando nessa carreira desde janeiro de 2023, com o objetivo de ser um futuro profissional na area da programação.</p>
                </motion.div>
                <motion.div
                variants={{
                    hidden:{opacity: 0, x: 250},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.7,ease:'easeInOut'
                    }}
                className={styles.cards}>
                    <p>Durante meus estudos, consisti meu foco em torno da linguagem Javascript, onde me sustentei em diversos cursos. Com base nisso, estou a cada dia mais aperfeiçoando minhas habilidades tecnicas e sociais.</p>
                </motion.div>
                <motion.div
                variants={{
                    hidden:{opacity: 0, x: 250},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 1, delay:0.9,ease:'easeInOut'
                    }}
                className={styles.card3}>
                    <h3>Resumo de Tecnologias</h3>
                    <p> - Typescript - JavaScript - React - Html - Sass/css - Nextjs - PostgresSQL - Sequelize - Express - Nodejs - Axios</p>
                </motion.div>
            </div>
            <div className={styles.analytcsConteiner}>
                <h1>Tecnologias / Projetos feitos:</h1>
                <div className={styles.analytcsContent}>
                <div className={styles.graph}>
                    <h2>JavaScript</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <div style={{width:`${bar1}%`}} className={styles.bar}></div>
                        </div>
                        <p className={styles.porcents}>{bar1}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>React/Nextjs</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <div style={{width:`${bar2}%`}} className={styles.bar}></div>
                        </div>
                        <p className={styles.porcents}>{bar2}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>Postgres</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <div style={{width:`${bar3}%`}} className={styles.bar}></div>
                        </div>
                        <p className={styles.porcents}>{bar3}%</p>
                    </div>
                </div>
                <div className={styles.graph}>
                    <h2>HTML/SCSS</h2>
                    <div className={styles.barConteiner}>
                        <div className={styles.barContent}>
                            <div style={{width:`${bar4}%`}} className={styles.bar}></div>
                        </div>
                        <p className={styles.porcents}>{bar4}%</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
}