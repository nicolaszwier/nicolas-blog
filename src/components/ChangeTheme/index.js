import React, { useState, useEffect } from "react";
import Icons from "../Icons";
import * as S from './styled'

const ChangeTheme = () => {
    const [theme, setTheme] = useState(null);
    const isDarkMode = theme === "dark";
    const Icon = isDarkMode ? Icons['Sun'] : Icons['Moon'];

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.ChangeThemeWrapper
            title={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={() => {
                window.__setPreferredTheme(isDarkMode ? "light" : "dark")
            }}
        >
            <S.ChangeThemeToggle>
                <S.IconWrapper className={theme}>
                    <Icon />
                </S.IconWrapper>
            </S.ChangeThemeToggle>
        </S.ChangeThemeWrapper>
    )
}

export default ChangeTheme