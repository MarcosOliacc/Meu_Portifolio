import { ImpactSection } from '../common/aboutContent/impactSect'
import { ProfileSect } from '../common/aboutContent/profileSect'
import styles from './styles.module.scss'

export function AboutMe() {
    return <>
        <div className={styles.conteiner}>
            <ImpactSection/>
            <ProfileSect/>
        </div>
    </>
}