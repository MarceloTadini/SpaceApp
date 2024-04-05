import React from "react";
import * as S from './styles'
import { ButtonIcon } from "../ButtonIcon/styles";
import { Photo } from "../../types";

interface Props{
    photo: Photo
    isExpanded?: boolean
    onZoom?: (photo: Photo) => void
}

const Picture: React.FC<Props> = ({photo, isExpanded, onZoom}) => {
    const handleZoom = () => {
        if (onZoom) { // Verifica se onZoom é uma função antes de chamar
            onZoom(photo);
            console.log("isExpanded: ", isExpanded)
        }
    };

    return(
        <S.Figure $isExpanded={isExpanded} id={photo.id}>
            <img src={photo.path}/>
            <figcaption>
                <h3>{photo.titulo}</h3>
                <S.Footer>
                    <h4>{photo.fonte}</h4>
                    <ButtonIcon>
                        <img src="/icons/favorito.png" alt="Ícone de favorito" />
                    </ButtonIcon>
                    {!isExpanded && <ButtonIcon aria-hidden={isExpanded} onClick={handleZoom}>
                        <img src="/icons/expandir.png" alt="Ícone de expandir" />
                    </ButtonIcon>}
                </S.Footer>
            </figcaption>
        </S.Figure>
    )
}

export default Picture
