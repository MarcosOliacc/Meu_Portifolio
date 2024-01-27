'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from 'react';
import styles from './styles.module.scss'

export function ProfileSect() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView) {
            mainControls.start('visible')
        }
    },[isInView])

    return <>
        <div className={styles.conteiner}>
            <div className={styles.tecnologies1}></div>
            <div className={styles.tecnologies2}></div>
            <div className={styles.tecnologies3}></div>
        </div>
    </>
}