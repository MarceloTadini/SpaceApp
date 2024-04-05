import React from "react"
import * as S from './styles'

interface Props{
    children: React.ReactNode
    activeIcon: string
    inactiveIcon: string
    isActive?: boolean
}

const NavItem: React.FC<Props> = ({activeIcon, inactiveIcon, isActive, children}) => {
    return(
        <S.ListItem $isActive={isActive}>
            <img src={isActive ? activeIcon : inactiveIcon} alt="Ícone Home" />
            {children}
        </S.ListItem>
    )
}

export default NavItem