/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image';
import { Project, ProjectContext} from '@/context/ProjectContext';
import { Header } from './header';
import styles from './styles.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { Galery } from './galery';
import { useAnimation, useInView, motion } from 'framer-motion';

export function Projects() {
    const ref = useRef(null)
    const isInview = useInView(ref, {once:true})
    const mainControls = useAnimation()
    const [currProject, setCurrProject] = useState<Project | undefined>()
    const [galery, setGalery] = useState(0)
    const {project, setProject} = useContext(ProjectContext)

    useEffect(()=> {
        if(isInview) {
            setTimeout(()=>{mainControls.start('visible')},1000)
            
        }
        mainControls.start('hidden')

        setTimeout(()=>{
            setCurrProject(undefined)
            setGalery(0)
           setCurrProject(project) 
           
        },500)
        setTimeout(()=>{
            mainControls.start('visible') 
           
        },500)

    },[project,isInview])

    return <>
        <div className={styles.conteiner}>
            <Header/>
            <div ref={ref} className={styles.projectConteiner}>   
                <motion.div
                variants={{
                    hidden:{opacity: 0, x: 200},
                    visible: {opacity: 1, x:0}
                    }}
                    initial= 'hidden'
                    animate= {mainControls}
                    transition={{
                        duration: 0.5, delay:0
                    }}
                className={styles.projectInfosContent}>
                    <h1
                    
                    >{currProject?.name ? currProject.name : ''}</h1>
                    <div className={styles.projDescrip}>{currProject?.description?currProject?.description.map((ele)=><p key={ele}>
                        {ele}
                        <br/>
                    </p>):''}</div>

                    <h3>Tencologias do Projeto:</h3>
                    <div className={styles.tecnosContent}>
                        {currProject?.tecnos? currProject?.tecnos.map((tecno)=><>
                            <div key={tecno.id} className={styles.tecnos}>
                                <div className={tecno.name}></div>
                                <p>{tecno.name}</p>
                                <p>{tecno.percent}%</p>
                            </div> 
                        </>):<></>}
                    </div>
                </motion.div>
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
                <div className={styles.galeryClose} onClick={()=>setGalery(0)}></div>
                <Galery num={galery}/>
            </div> 
            : null}
              
        </div>
    </>
}