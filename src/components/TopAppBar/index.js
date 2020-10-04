import React from "react";

import MenuLinks from "../MenuLinks";
import { brand } from "./content";
import * as S from './styled'

const TopAppBar = ({ lang }) => (
    <S.HeaderWrapper>
        <S.Header>
            <S.Brand>{brand}</S.Brand>
            <MenuLinks lang={lang} />
        </S.Header >
    </S.HeaderWrapper >
)

export default TopAppBar