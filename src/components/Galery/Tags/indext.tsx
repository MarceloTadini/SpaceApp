import React from "react";
import tags from './tags.json'
import * as S from './styles'

const Tags: React.FC = () => {
    return(
        <S.Container>
            <S.Paragraph>Busque por tags: </S.Paragraph>
            {tags.map(tag => <S.TagButton key={tag.id}>{tag.titulo}</S.TagButton>)}
        </S.Container>
    )
}

export default Tags