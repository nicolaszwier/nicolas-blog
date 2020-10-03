import React from "react";

import Avatar from "../Avatar";
import SocialLinks from "../SocialLinks";
import * as S from './styled'
import { profile, profileEnglish } from "./content";

const Profile = ({ lang = 'pt-br' }) => {
    const { name, briefDescription, longDescription } = lang === 'pt-br' ? profile : profileEnglish;

    return (
        <S.Section>
            <Avatar />
            <S.ProfileName>{name}</S.ProfileName>
            <S.BriefDescription>{briefDescription}</S.BriefDescription>
            <SocialLinks />
            {longDescription.map((p, i) => (
                <S.Paragraph key={i}>{p}</S.Paragraph>
            ))}

        </S.Section>
    )
}

export default Profile