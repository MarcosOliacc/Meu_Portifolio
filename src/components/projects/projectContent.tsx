'use client'

import { ProjectProvider } from "@/context/ProjectContext"
import { Projects } from "./projectSection"

export function ProjectContent() {
    return<ProjectProvider>
        <Projects/>
    </ProjectProvider>
}