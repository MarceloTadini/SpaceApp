import React from "react";
import * as  S from './styles'

interface BannerProps{
    text: string
    backgroundImage: string
}

const Banner: React.FC<BannerProps> = ({backgroundImage, text}) => {
    return(
        <S.Container $image={backgroundImage}>
            <S.Title>{text}</S.Title>
        </S.Container>
    )
}

export default Banner