import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"

import * as S from './styled'
import Icons from "../Icons";
import ProjectModal from "../ProjectModal";
import { iconsMapping } from "../Icons/iconsMapping";

const ProjectCard = ({ project, language, onOpenModal }) => {
    const [firstParagraph, setFirstParagraph] = useState('');
        
    function handleOpenModal() {
        onOpenModal(project)
    }

    useEffect(() => {
        // This will run only on the client side after the component mounts
        function extractFirstParagraph() {
            const descriptionHTML = project[language].description;
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = descriptionHTML;
            return tempDiv.querySelector('p')?.outerHTML || '';
        }

        // Set the first paragraph to state
        setFirstParagraph(extractFirstParagraph());
    }, [project, language]); // Dependency array ensures it re-runs when project or language changes


    return (

        <S.Card>
            <S.IconWrapper>
                {project.type === 'backend' && <Icons.Code/>}
                {project.type === 'frontend' && <Icons.Monitor/>}
                {project.type === 'mobile' && <Icons.Smartphone/>}
            </S.IconWrapper>
            <S.Content>
                <h1>{project[language].title}</h1>
                <div dangerouslySetInnerHTML={{__html: firstParagraph}} />
                <S.CardFooter>
                    <div className="stack-wrapper">
                        {project.stack.map((el, index) => (
                            <span key={index} title={el}>
                                {iconsMapping[el]}
                            </span>
                        ))}
                    </div>
                    <div className="actions">
                        <button 
                            className="link"
                            onClick={() => handleOpenModal()}
                        >
                            See more details
                        </button>
                        {project.githubRepoUrl && 
                            <a href={project.githubRepoUrl} target="_blank">
                                Github Repo <Icons.Git />
                            </a>
                        }
                        {project.liveDemoUrl && 
                            <a href={project.liveDemoUrl} target="_blank">
                                Live demo <Icons.FilledMonitor />
                            </a>
                        }
                        {project.appStoreLink && 
                            <a href={project.appStoreLink} target="_blank">
                                App Store <Icons.Apple/>
                            </a>
                        }
                    </div>
                        
                </S.CardFooter>
            </S.Content>
        </S.Card>

    )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectCard