'use client'
import styles from './styles.module.scss'
import Image from 'next/image';
import { Project, ProjectContext} from '@/context/ProjectContext';
import { useContext, useEffect, useState } from 'react';
export interface prop {
    num:number
}
export function Galery(num:prop) {
    const [pict, setPict] = useState('01')
    const {project}= useContext(ProjectContext)
    function nextPic() {
        if(pict == '01') {setPict('02')} 
        else if(pict == '02') {setPict('03')} 
        else if(pict == '03') {setPict('04')} 
        else if(pict == '04') {setPict('05')}
        else if(pict == '05') {setPict('01')}
    }
    function prevPic() {
        if(pict == '01') {setPict('05')} 
        else if(pict == '02') {setPict('01')} 
        else if(pict == '03') {setPict('02')} 
        else if(pict == '04') {setPict('03')}
        else if(pict == '05') {setPict('04')}
    }
    return<>
        <div className={styles.conteiner}>
            <h1>{project?.name}</h1>
            <div className={styles.imgConteiner}>
                <button className={styles.btn1} onClick={prevPic}>
                    <Image alt='' 
                    src={`/arrowLeft.svg`}
                    width={50}
                    height={50}
                    className={styles.arrow}
                    />
                </button>

                <Image alt='' 
                src={`/galery/${project?.galery[Number(pict[1]) - 1]}`}
                width={800}
                height={480}
                className={styles.img}
                />
                

                <button className={styles.btn2} onClick={nextPic}>
                    <Image alt='' 
                    src={`/arrowRight.svg`}
                    width={50}
                    height={50}
                    className={styles.arrow}
                    />
                </button>
            </div>
        </div>
    </>
}