import React from "react";

import { footerContent } from "./content";
import * as S from './styled'

const Footer = () => (
    <S.Footer>
        <S.FooterText>{footerContent}</S.FooterText>
    </S.Footer >
)

export default Footer