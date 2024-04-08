import React from "react";
import tags from './tags.json'
import * as S from './styles'

interface Props{
    setTag: React.Dispatch<React.SetStateAction<number>>
}

const Tags: React.FC<Props> = ({setTag}) => {
    return(
        <S.Container>
            <S.Paragraph>Busque por tags: </S.Paragraph>
            {tags.map(tag => <S.TagButton key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</S.TagButton>)}
        </S.Container>
    )
}

export default Tags