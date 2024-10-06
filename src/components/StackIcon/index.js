import React from "react";
import PropTypes from "prop-types"

import * as S from './styled'
import Icons from "../Icons";

const ProjectCard = ({ project, language }) => {
    
    function extractFirstParagraph() {
        const descriptionHTML = project[language].description;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = descriptionHTML;
        return tempDiv.querySelector('p')?.outerHTML || ''
    }

    return (

        <S.Card>
            <S.IconWrapper>
                {project.type === 'backend' && <Icons.Code/>}
                {project.type === 'frontend' && <Icons.Monitor/>}
                {project.type === 'mobile' && <Icons.Smartphone/>}
            </S.IconWrapper>
            <S.Content>
                <h1>{project[language].title}</h1>
                <div dangerouslySetInnerHTML={{__html: extractFirstParagraph()}} />
                <S.CardFooter>
                    <div className="stack-wrapper">
                        {project.stack.map((el, index) => {
                            const Icon = Icons[el]
                             return (<Icon />)
                        })}
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