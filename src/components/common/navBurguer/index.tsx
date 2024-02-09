'use client'
import { useState, useEffect } from "react"
import styles from './styles.module.scss'
import Image from "next/image"

export function NavBurguer() {
    const [burguerClass, setBurguerClass] = useState(styles.closed)
    const [menuClass, setMenuClass] = useState(styles.hidden)
    const [burguer, setBurguer] = useState(true)

    useEffect(()=>{
        if(burguer === false) {
            setMenuClass(styles.visible)
            setBurguerClass(styles.opened)
        } else {
            setMenuClass(styles.hidden)
            setBurguerClass(styles.closed)
        } 
    },[burguer])

    return <>
        <div className={styles.conteiner}>
            <div className={`${styles.acessContent} ${menuClass}`}> 
                <button className={styles.acessBtn}>
                    <a href="#aboutMe">
                        Sobre mim
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#projects">
                        Meus Projetos
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#career">
                        Carreira
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#contact">
                        Contato
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
            </div>
            <div className={`${styles.barsContent} ${burguerClass}`} onClick={()=>{setBurguer((state)=>!state)}}>
                <div className={`${styles.bar1} ${styles.bars}`}></div>
                <div className={`${styles.bar2} ${styles.bars}`}></div>
                <div className={`${styles.bar3} ${styles.bars}`}></div>
            </div>
        </div>
    </>
}