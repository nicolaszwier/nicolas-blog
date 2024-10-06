import React, { useState } from "react";
import * as S from './styled'
import { ptBr, en, projects } from "./content";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const Projects = ({ lang = 'pt-br' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const { title, subtitle } = lang === 'pt-br' ? ptBr : en;

    function handleOpenModal(project) {
        setSelectedProject(project)
        setIsModalOpen(true)   
    }

    function handleCloseModal() {
        setIsModalOpen(false)   
    }

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <S.ListWrapper>
                {projects.map((project, index) => (
                    <S.ListItemWrapper key={index}>
                        <ProjectCard 
                            onOpenModal={handleOpenModal} 
                            project={project} 
                            language={lang} 
                        />
                    </S.ListItemWrapper>
                ))}
            </S.ListWrapper>
            <ProjectModal 
                isOpen={isModalOpen} 
                project={selectedProject} 
                language={lang} 
                onClose={handleCloseModal}
            />
        </S.Container>
    )
}

export default Projects