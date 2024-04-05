import React from "react";
import * as S from './styles'
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
    return(
        <S.Container>
            <img src="/images/logo.png" alt="Logo" />
            <SearchBar/>
        </S.Container>
    )
}

export default Header