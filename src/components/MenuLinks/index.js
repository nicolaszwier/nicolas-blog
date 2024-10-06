import React, { useState } from "react";
import ChangeTheme from "../ChangeTheme";
import * as S from './styled';
import Icons from "../Icons";
import { linksPt, linksEn } from './content'

const MenuLinks = ({ lang }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const links = lang === 'pt-br' ? linksPt : linksEn

    const handleMenuToggle = () => {
        setIsMenuVisible((last)=>!last)
      }

    function handleOverlayClick(event) {
        if (event.target.id === 'overlay') {
            setIsMenuVisible(false)
        }
    }
    
    return (
        <>
            <S.MenuLinksWrapper>
                <S.MenuLinksList>
                    {links.map((link, i) => (
                        <S.MenuLinksItem key={i}>
                            <S.MenuLinksLink activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
                        </S.MenuLinksItem>
                    ))}
                    <ChangeTheme />
                </S.MenuLinksList>
                <S.MobileToggleButton onMouseUp={handleMenuToggle}>
                    <Icons.MenuAlt3 />  
                </S.MobileToggleButton>
            </S.MenuLinksWrapper>
            {isMenuVisible && (
                <S.MobileMenuOverlay id="overlay" onMouseUp={handleOverlayClick}>
                    <S.MobileMenu>
                        <ul>
                            {links.map((link, i) => (
                                <S.MenuLinksItem key={i}>
                                    <S.MenuLinksLink activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
                                </S.MenuLinksItem>
                            ))}
                            <ChangeTheme />
                        </ul>
                    </S.MobileMenu>
                </S.MobileMenuOverlay>
            )}
        </>
    )
}

export default MenuLinks