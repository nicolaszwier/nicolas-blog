import React from "react";

import ChangeTheme from "../ChangeTheme";

import * as S from './styled'
import { linksPt, linksEn } from './content'

const MenuLinks = ({ lang }) => {
    const links = lang === 'pt-br' ? linksPt : linksEn
    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
                <ChangeTheme />
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    )
}

export default MenuLinks