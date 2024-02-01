'use client'
import Image from 'next/image';
import { Project, ProjectContext} from '@/context/ProjectContext';
import { Header } from './header';
import styles from './styles.module.scss';
import { useContext, useEffect, useState } from 'react';
import { Galery } from './galery';

export function Projects() {
    const [currProject, setCurrProject] = useState<Project | undefined>()
    const [galery, setGalery] = useState(0)
    const {project, setProject} = useContext(ProjectContext)

    useEffect(()=> {
        setCurrProject(undefined)
        setGalery(0)
        setTimeout(()=>{
           setCurrProject(project) 
        },100)
    },[project])

    return <>
        <div className={styles.conteiner}>
            <Header/>
            <div className={styles.projectConteiner}>   
                <div className={styles.projectInfosContent}>
                    <h1>{currProject?.name ? currProject.name : 'xxxxx'}</h1>
                    <div className={styles.projDescrip}>{currProject?.description?currProject?.description.map((ele)=><p key={ele}>
                        {ele}
                        <br/>
                    </p>):''}</div>

                    <h3>Tencologias do Projeto:</h3>
                    <div className={styles.tecnosContent}>
                        {currProject?.tecnos? currProject?.tecnos.map((tecno, index)=><>
                            <div key={index} className={styles.tecnos}>
                                <div className={tecno.name}></div>
                                <p>{tecno.name}</p>
                                <p>{tecno.percent}%</p>
                            </div> 
                        </>):<></>}
                    </div>
                </div>
                <div className={styles.projectImgsContent}>
                    <div className={styles.responsiveScreensContent}>
                        <Image alt='' src='/responsiveGalery/telaG.png'
                        width={250}
                        height={185}
                        className={styles.telaG}
                        />
                        <div className={styles.backG} style={currProject?.responsiveGalery[0]?{
                            background: `url(/responsiveGalery/${currProject?.responsiveGalery[0]}), #060C0F`
                        }: {
                            background: '#060C0F'
                        }}></div>
                        <Image alt='' src='/responsiveGalery/telaM.png'
                        width={256}
                        height={161}
                        className={styles.telaM}
                        />
                        <div className={styles.backM} style={currProject?.responsiveGalery[1]?{
                            background: `url(/responsiveGalery/${currProject?.responsiveGalery[1]}), #060C0F`
                        }: {
                            background: '#060C0F'
                        }}></div>
                        <Image alt='' src='/responsiveGalery/telaP.png'
                        width={76}
                        height={147}
                        className={styles.telaP}
                        />
                        <div className={styles.backP} style={currProject?.responsiveGalery[2]?{
                            background: `url(/responsiveGalery/${currProject?.responsiveGalery[2]}), #060C0F`
                        }: {
                            background: '#060C0F'
                        }}></div>
                    </div>
                    <button className={styles.galeryBtn} onClick={()=>setGalery(currProject?.id? currProject?.id: 0)}>Galeria de Imagens</button>
                </div>
                <div className={styles.projectBackground} style={{
                    background: `radial-gradient(transparent 0%, #060c0f 90%), url('/backgrounds/${currProject?.bg}') bottom`
                }}></div>
            </div>
            {galery !== 0?
            <div className={styles.galeryConteiner}>
                <p>aaa</p>
                <div className={styles.galeryClose} onClick={()=>setGalery(0)}></div>
                <Galery num={galery}/>
            </div> 
            : null}
              
        </div>
    </>
}