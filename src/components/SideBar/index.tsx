import React from "react"
import * as S from './styles'
import NavItem from "./NavItem"

const SideBar: React.FC = () => {
    return(
        <aside>
            <nav>
                <S.StyledList>
                    <NavItem 
                      activeIcon="/icons/home-ativo.png"
                      inactiveIcon="/icons/home-inativo.png"
                      isActive
                    >
                        Início
                    </NavItem>

                    <NavItem 
                      activeIcon="/icons/mais-vistas-ativo.png"
                      inactiveIcon="/icons/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </NavItem>
                    <NavItem 
                      activeIcon="/icons/mais-curtidas-ativo.png"
                      inactiveIcon="/icons/mais-curtidas-inativo.png"
                    >
                        Mais Curtidas
                    </NavItem>
                    <NavItem 
                      activeIcon="/icons/novas-ativo.png"
                      inactiveIcon="/icons/novas-inativo.png"
                    >
                        Novas
                    </NavItem>
                    <NavItem 
                      activeIcon="/icons/surpreenda-me-ativo.png"
                      inactiveIcon="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </NavItem>
                </S.StyledList>
            </nav>
        </aside>
    )
}

export default SideBar