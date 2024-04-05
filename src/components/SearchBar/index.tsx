import React from "react"
import * as S from './styles'
import search from '/icons/search.png'

const SearchBar: React.FC  = () => {
    return(
        <S.Container>
            <S.SearchInput placeholder="O que você procura?">
            </S.SearchInput>
            <S.SearchIcon src={search} alt="Ícone de busca" />
        </S.Container>

    )
}

export default SearchBar