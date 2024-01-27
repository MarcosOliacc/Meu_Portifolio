import { ImpactSection } from '../common/aboutContent/impactSect'
import { ProfileSect } from '../common/aboutContent/profileSect'
import styles from './styles.module.scss'

export function AboutMe() {
    return <>
        <div className={styles.conteiner}>
            <div className={styles.bg1}></div>
            <div className={styles.bg2}></div>
            <ImpactSection/>
            <ProfileSect/>
        </div>
    </>
}