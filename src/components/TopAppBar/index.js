import React from "react";

import MenuLinks from "../MenuLinks";
import { brand } from "./content";
import * as S from './styled'

const TopAppBar = ({ lang }) => (
    <S.HeaderWrapper>
        <S.Header>
            <S.BrandLink to={lang === 'pt-br' ? '/' : '/en'}>{brand}</S.BrandLink>
            <MenuLinks lang={lang} />
        </S.Header >
    </S.HeaderWrapper >
)

export default TopAppBar