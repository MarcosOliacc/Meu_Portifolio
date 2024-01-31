'use client'
import { Project, ProjectContext, ProjectProvider } from '@/context/ProjectContext';
import { Header } from './header';
import styles from './styles.module.scss';
import { useContext, useEffect, useState } from 'react';

export function Projects() {
    const [currProject, setCurrProject] = useState<Project | undefined>()
    const {project, setProject} = useContext(ProjectContext)

    useEffect(()=> {
        setCurrProject(project)
        console.log(project)
    },[project])

    return <>
        <div className={styles.conteiner}>
            <Header/>
            <div className={styles.projectConteiner}>   
                <div className={styles.projectInfosContent}>
                    <h1>{currProject?.name}</h1>
                    <div className={styles.projDescrip}>{currProject?.description.map((ele)=><p key={Math.random()}>
                        {ele}
                        <br/>
                    </p>)}</div>

                    <h3>Tencologias do Projeto:</h3>
                    <div className={styles.tecnosContent}>
                        {project?.tecnos.map((tecno)=><>
                            <div key={project.id} className={styles.tecnos}>
                                <div className={tecno.name}></div>
                                <p>{tecno.name}</p>
                                <p>{tecno.percent}%</p>
                            </div>
                        </>)}
                    </div>
                </div>
                <div className={styles.projectImgsContent}>
                    <h2>Demonstração Responsiva</h2>
                    <div className={styles.responsiveScreensContent}>
                        <p>aaaaaaaaaa</p>
                    </div>
                    <button className={styles.galeryBtn}>Galeria</button>
                </div>
                <div className={styles.projectBackground} style={{
                    background: `radial-gradient(transparent 20%, #060c0f), url('/backgrounds/${currProject?.bg}')`
                }}></div>
            </div>  
        </div>
    </>
}