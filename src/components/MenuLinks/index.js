import React, { useState } from "react";
import ChangeTheme from "../ChangeTheme";
import * as S from './styled';
import Icons from "../Icons";
import { urls } from "../../data/routes";
import SocialLinks from "../SocialLinks";

const MenuLinks = ({ lang }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

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
                    <S.MenuLinksItem>
                        <S.MenuLinksLink activeClassName="active" to={urls[lang].home.url}>{urls[lang].home.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                    <S.MenuLinksItem>
                        <S.MenuLinksLink activeClassName="active" to={urls[lang].blog.url}>{urls[lang].blog.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                    <S.MenuLinksItem>
                        <S.MenuLinksLink activeClassName="active" to={urls[lang].projects.url}>{urls[lang].projects.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                    <S.MenuLinksItem>
                        <S.MenuLinksLink activeClassName="active" to={urls[lang].aboutMe.url}>{urls[lang].aboutMe.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
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
                            <S.MenuLinksItem>
                                <S.MenuLinksLink activeClassName="active" to={urls[lang].home.url}>{urls[lang].home.label}</S.MenuLinksLink>
                            </S.MenuLinksItem>
                            <S.MenuLinksItem>
                                <S.MenuLinksLink activeClassName="active" to={urls[lang].blog.url}>{urls[lang].blog.label}</S.MenuLinksLink>
                            </S.MenuLinksItem>
                            <S.MenuLinksItem>
                                <S.MenuLinksLink activeClassName="active" to={urls[lang].projects.url}>{urls[lang].projects.label}</S.MenuLinksLink>
                            </S.MenuLinksItem>
                            <S.MenuLinksItem>
                                <S.MenuLinksLink activeClassName="active" to={urls[lang].aboutMe.url}>{urls[lang].aboutMe.label}</S.MenuLinksLink>
                            </S.MenuLinksItem>
                            <ChangeTheme showLabel />
                        </ul>
                    </S.MobileMenu>
                </S.MobileMenuOverlay>
            )}
        </>
    )
}

export default MenuLinks