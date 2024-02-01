'use client'
import styles from './styles.module.scss'
import Image from 'next/image';
import { Project, ProjectContext} from '@/context/ProjectContext';
import { useContext, useEffect, useState } from 'react';
export interface prop {
    num:number
}
export function Galery(num:prop) {
    const {project}= useContext(ProjectContext)
    return<>
        <div className={styles.conteiner}>
            <h1>alooooooo</h1>
        </div>
    </>
}