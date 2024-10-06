import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"

import * as S from './styled'
import Icons from "../Icons";
import { iconsMapping } from "../Icons/iconsMapping";

const ProjectModal = ({ project, language, isOpen, onClose }) => {

    function handleOverlayClick(event) {
        if (event.target.id === 'overlay') {
            onClose()
        }
    }

    return (
        <>
        {isOpen && 
            <S.Overlay id="overlay" onMouseUp={(event) => handleOverlayClick(event)}>
                <S.Modal>
                    <S.Header>
                        <S.IconWrapper>
                            {project.type === 'backend' && <Icons.Code/>}
                            {project.type === 'frontend' && <Icons.Monitor/>}
                            {project.type === 'mobile' && <Icons.Smartphone/>}
                        </S.IconWrapper>
                        <button onClick={() => onClose()}>
                            <Icons.Close/>
                        </button>
                     </S.Header>
                    <S.Content>
                        <h1>{project[language].title}</h1>
                        <div dangerouslySetInnerHTML={{__html: project[language].description}} />
                        <h2>Stack</h2>
                        <S.Stack>
                            {project.stack.map((el, index) => (
                                <div key={index} title={el}>
                                    {iconsMapping[el]}
                                    <p>{el}</p>
                                </div>
                            ))}
                        </S.Stack>
                        <S.Footer>
                           
                            <div className="actions">
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
                                
                        </S.Footer>
                    </S.Content>

                </S.Modal>
            </S.Overlay>
        }
        </>
    )
}

ProjectModal.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default ProjectModal