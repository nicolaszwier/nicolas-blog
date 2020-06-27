import React from "react";

import Avatar from "../Avatar";
import SocialLinks from "../SocialLinks";
import * as S from './styled'
import { profile } from "./content";

const Profile = () => {
    const { name, briefDescription, longDescription } = profile;

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