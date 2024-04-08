import React, { Dispatch, SetStateAction } from "react";
import * as S from './styles'
import SearchBar from "../SearchBar";

interface Props{
    setFilter: Dispatch<SetStateAction<string>>
}

const Header: React.FC<Props> = ({setFilter}) => {
    return(
        <S.Container>
            <img src="/images/logo.png" alt="Logo" />
            <SearchBar setFilter={setFilter}/>
        </S.Container>
    )
}

export default Header