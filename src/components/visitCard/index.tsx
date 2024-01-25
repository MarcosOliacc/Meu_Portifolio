import Image from 'next/image'
import styles from './styles.module.scss'
import { Presentation } from '../common/apresentation'
import { NavPage } from '../common/navPage'

export function VisitCart() {
    return <>
        <section className={styles.conteiner}>
            <div className={styles.cardContent}>
                <div className={styles.imgContent}>
                    <h2>Olá!, eu sou...</h2>
                    <Image src='/marcos.jpg' alt='' width={250} height={250} className={styles.img}/>
                </div>
                <Presentation/>

            </div>

            <NavPage/>
        </section>
    </>
}