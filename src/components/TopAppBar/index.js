import React from "react";

import MenuLinks from "../MenuLinks";
import { brand } from "./content";
import * as S from './styled'

const TopAppBar = () => (
    <S.HeaderWrapper>
        <S.Header>
            <S.Brand>{brand}</S.Brand>
            <MenuLinks />
        </S.Header >
    </S.HeaderWrapper >
)

export default TopAppBar