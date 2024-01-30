'use client'
import { useState, useEffect,useRef } from "react"
import styles from './styles.module.scss'
import Image from "next/image"

export function NavBurguer() {
    const ref1 = useRef(null)
    const [burguerClass, setBurguerClass] = useState(styles.closed)
    const [menuClass, setMenuClass] = useState(styles.hidden)
    const [burguer, setBurguer] = useState(false)

    function changeMenu() {
        if(burguer === false) {
            setBurguer(true)
            setMenuClass(styles.visible)
            setBurguerClass(styles.opened)
        } else {
            setBurguer(false)
            setMenuClass(styles.hidden)
            setBurguerClass(styles.closed)
        } 
    }
    return <>
        <div className={styles.conteiner}>
            <div ref={ref1} className={`${styles.acessContent} ${menuClass}`}>
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
                    <a href="#">
                        Carreira
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
                <button className={styles.acessBtn}>
                    <a href="#">
                        Contato
                    <Image src='/arrowsWLink.png' alt='' width={25} height={25} className={styles.arrows}/>
                    </a>
                </button>
            </div>
            <div className={`${styles.barsContent} ${burguerClass}`} onClick={()=>changeMenu()}>
                <div className={`${styles.bar1} ${styles.bars}`}></div>
                <div className={`${styles.bar2} ${styles.bars}`}></div>
                <div className={`${styles.bar3} ${styles.bars}`}></div>
            </div>
        </div>
    </>
}