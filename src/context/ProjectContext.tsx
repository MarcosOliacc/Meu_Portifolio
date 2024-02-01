import { Dispatch, SetStateAction, createContext, useState } from "react";
import ProjectArray from './projects'

export interface Project {
    id:number,
    name:string,
    description: string[],
    tecnos:{
        id:number
        name:string,
        percent:number
    }[],
    responsiveGalery: string[],
    galery:string[],
    bg: string
}
export type GlobalContent = {
    project: Project | undefined
    setProject: Dispatch<SetStateAction< Project | undefined >>
}
const iUserContextState = {
    project: ProjectArray[0],
    setProject: () => {}
}

export const ProjectContext = createContext<GlobalContent>(iUserContextState) 

export function ProjectProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [project, setProject] = useState< Project | undefined >(ProjectArray[0])

    return(
        <ProjectContext.Provider value={{project, setProject}}>
            {children}
        </ProjectContext.Provider>
        
    )
  }