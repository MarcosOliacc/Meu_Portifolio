'use client'
import styles from '../careerSection/styles.module.scss'
import { useEffect, useState, useRef } from 'react'

export function TimelineAcademic() {
    const [point, setPoint] = useState(0)
    const [point2, setPoint2] = useState(0)
    const [date, setDate] = useState('')
    const [date2, setDate2] = useState('')
    const [topDate, setTopDate] = useState('0')
    const [topDate2, setTopDate2] = useState('0')
    useEffect(()=>{
        switch(point) {
            case 0: setDate(''); setTopDate('0')
            break
            case 1: setDate('Julho 2023'); setTopDate('180px')
            break
            case 2: setDate('Outubro 2023'); setTopDate('380px')
            break
        }
        switch(point2) {
            case 0: setDate2(''); setTopDate2('0')
            break
            case 1: setDate2('Julho 2023'); setTopDate2('230px')
            break
            case 2: setDate2('Outubro 2023'); setTopDate2('400px')
            break
        }

    },[point,point2])
    return <>
    {point?<div
    style={{
        top: topDate
    }}
    onMouseEnter={()=>setPoint(point)} onMouseLeave={()=>setPoint(0)}
    className={styles.datePoint}><p>{date}</p></div>:''}
    {point2?<div
    style={{
        top: topDate2
    }}
    onMouseEnter={()=>setPoint2(point2)} onMouseLeave={()=>setPoint2(0)}
    className={styles.datePoint}><p>{date2}</p></div>:''}
    <div className={styles.card1}>
        <div className={styles.lines}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
        </div>
        <div className={styles.textContent1}>
            <p className={styles.cardText}>Nessa jornada, o professor Guanabara (do Curso em Video) foi quem me ensinou os conceitos básicos de Html, CSS e Javascript e abriu minha mente para eu continuar estudando e me aprofundando.</p>
        </div>
    </div>
    <div className={styles.card2}>
        <div className={styles.lines}>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
        </div>
        <div className={styles.textContent2}>
            <p className={styles.cardText}>Em Janeiro de 2023, dei inicio aos meus estudos na area da programação. De começo, procurei aprender com conteúdo gratuito no Youtube, onde encontei o canal Curso em video.</p>
        </div>
    </div>

    <div onMouseEnter={()=>setPoint(1)} onMouseLeave={()=>setPoint(0)} className={styles.point2}></div>
    <div onMouseEnter={()=>setPoint2(1)} onMouseLeave={()=>setPoint2(0)} className={styles.point22}></div>

    <div className={styles.card3}>
        <div className={styles.lines}>
            <div className={styles.line8}></div>
            <div className={styles.line9}></div>
            <div className={styles.line10}></div>
        </div>
        <div className={styles.textContent3}>
            <p className={styles.cardText}>No treinamento da Onebitcode, me aprofundei na linguagem Javascript e suas Bibliotecas, realizando projetos com orientação à objetos, recursividade e diversos outros conceitos.</p>
        </div>
    </div>
    <div className={styles.card4}>
        <div className={styles.lines}>
            <div className={styles.line5}></div>
            <div className={styles.line6}></div>
            <div className={styles.line7}></div>
        </div>
        <div className={styles.textContent4}>
            <p className={styles.cardText}>Em Julho, consegui juntar dinheiro suficiente apra entrar no treinamento da Onebitcode, lá evolui muito minhas habilidades em diversas tecnologias para FrontEnd e BackEnt também.</p>
        </div>
    </div>

    <div onMouseEnter={()=>setPoint(2)} onMouseLeave={()=>setPoint(0)} className={styles.point3}></div>
    <div onMouseEnter={()=>setPoint2(2)} onMouseLeave={()=>setPoint2(0)} className={styles.point33}></div>
    
    <div className={styles.card5}>
        <div className={styles.lines}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
        </div>
        <div className={styles.textContent5}>
            <p className={styles.cardText}>Como projeto final do treinamento de Javascript FullStack da Onebitcode, construímos uma aplicação que simula um site de EAD de cursos e esse foi o maior projeto que já realizei.</p>
        </div>
    </div>
    <div className={styles.card6}>
        <div className={styles.lines}>
            <div className={styles.line3}></div>
            <div className={styles.line4}></div>
        </div>
        <div className={styles.textContent6}>
            <p className={styles.cardText}>Depois do treinamento de Javascript, decidi me aprofundar ainda mais e explorar novos recursos da tecnologia, além de praticar exercícios para me manter ativo.</p>
        </div>
    </div>
    <div className={styles.card7}>
        <div className={styles.lines}>
            <div className={styles.line5}></div>
            <div className={styles.line6}></div>
            <div className={styles.line7}></div>
        </div>
        <div className={styles.textContent7}>
            <p className={styles.cardText}>Estudando um pouco sobre como ser um Desenvolvedor Freelancer, analizei que tem uma grande demanda para quem trabalha com Wordpress, no mercado. Com isso, decidi me aprofundar nessa tecnologia.</p>
        </div>
    </div>
    <div className={styles.card8}>
        <div className={styles.lines}>
            <div className={styles.line8}></div>
            <div className={styles.line9}></div>
            <div className={styles.line10}></div>
        </div>
        <div className={styles.textContent8}>
            <p className={styles.cardText}>Realizei um curso de Wordpress básico e outro de Ecommerce com Wordpress, os dois sendo novamente do canal Curso em Video. Lá vimos conceitos de segurança, SEO e aprimoramento de site.</p>
        </div>
    </div>









</>
}