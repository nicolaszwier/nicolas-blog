import React from "react";
import Avatar from "../Avatar";
import SocialLinks from "../SocialLinks";
import * as S from './styled'
import Icons from "../Icons";
import { profile } from "../../data/i18n";
import { urls } from "../../data/routes";

const Profile = ({ lang = 'pt-br' }) => {
    const { name, briefDescription, longDescription, seeMore, languageToggle } = profile[lang]
    
    return (
        <S.Section>
            <S.ChangeLanguageLink to={lang === 'en' ? '/' : '/en'}>{languageToggle}</S.ChangeLanguageLink>
            <Avatar />
            <S.ProfileName>{name}</S.ProfileName>
            <S.BriefDescription>{briefDescription}</S.BriefDescription>
            <SocialLinks />
            <S.Paragraph>{longDescription[0]}</S.Paragraph>
            <S.CustomLink to={urls[lang].aboutMe.url}>{seeMore} <Icons.ArrowSmRight /> </S.CustomLink>
        </S.Section>
    )
}

export default Profile