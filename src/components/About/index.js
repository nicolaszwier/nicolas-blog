import React from "react";
import * as S from './styled'
import { aboutMe } from "../../data/i18n";
import { urls } from "../../data/routes";
import { iconsMapping } from "../Icons/iconsMapping";
import { Link } from "gatsby";

const About = ({ lang = 'pt-br' }) => {
    const { 
        title, 
        subtitle, 
        experience, 
        projects, 
        skills, 
        programmingLanguages, 
        frameworks, 
        databases,
        cloud, 
        other, 
        testing, 
        agile, 
        footnoteHtml, 
        footnoteCss 
    } = aboutMe[lang]

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Content>
                <div dangerouslySetInnerHTML={{__html: subtitle}} />
                <div className="actions">
                    {/* <Link to={urls[lang].experience.url} >
                        {experience}
                    </Link> */}
                    <Link to={urls[lang].projects.url} >
                        {projects}
                    </Link>
                </div>
                <h2>{skills}</h2>
                <h3>{programmingLanguages.label}</h3>
                <S.Stack>
                    {programmingLanguages.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <S.Footnote>{footnoteHtml}<br /></S.Footnote>
                <S.Footnote>{footnoteCss}</S.Footnote>
                <h3>{frameworks.label}</h3>
                <S.Stack>
                    {frameworks.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <h3>{databases.label}</h3>
                <S.Stack>
                    {databases.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <h3>{cloud.label}</h3>
                <S.Stack>
                    {cloud.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <h3>{testing.label}</h3>
                <S.Stack>
                    {testing.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <h3>{agile.label}</h3>
                <S.Stack>
                    {agile.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
                <h3>{other.label}</h3>
                <S.Stack>
                    {other.stack.map((el, index) => (
                        <div key={index} title={el}>
                            {iconsMapping[el]}
                            <p>{el}</p>
                        </div>
                    ))}
                </S.Stack>
            </S.Content>
        </S.Container>
    )
}

export default About