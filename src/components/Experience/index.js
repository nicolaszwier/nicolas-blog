import React from "react";
import * as S from './styled'
import { experience } from "../../data/i18n";
import { urls } from "../../data/routes";
import { iconsMapping } from "../Icons/iconsMapping";
import { Link } from "gatsby";

const Experience = ({ lang = 'pt-br' }) => {
    const { 
        title, 
        subtitle, 
        career,
        projects,
        about
    } = experience[lang]

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Content>
                {/* <div dangerouslySetInnerHTML={{__html: subtitle}} /> */}
                <h2>{subtitle}</h2>
                <S.Timeline>

                    {career.map((job, index) => (
                        <div className="item" key={index}>
                            <div className="title">
                                <div className="circle"></div>
                                <h3>{job.jobTitle}</h3>
                            </div>
                            <div className="content">
                                <div className="line-wrapper"><div className="line"></div></div>  
                                <div className="description" dangerouslySetInnerHTML={{__html: job.description}} />
                            </div>
                        </div>
                    ))}

                </S.Timeline>
                
                <div className="actions">
                    <Link to={urls[lang].aboutMe.url} >
                        {about}
                    </Link> 
                    <Link to={urls[lang].projects.url} >
                        {projects}
                    </Link>
                </div>
             
            </S.Content>
        </S.Container>
    )
}

export default Experience