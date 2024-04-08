import React, { Dispatch, SetStateAction } from "react"
import * as S from './styles'
import search from '/icons/search.png'

interface Props{
    setFilter: Dispatch<SetStateAction<string>>; 
}

const SearchBar: React.FC<Props>  = ({setFilter}) => {
    return(
        <S.Container>
            <S.SearchInput onChange={(e) => {setFilter(e.target.value)}} placeholder="O que você procura?">
            </S.SearchInput>
            <S.SearchIcon src={search} alt="Ícone de busca" />
        </S.Container>

    )
}

export default SearchBar