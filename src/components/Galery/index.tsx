import React from "react";
import Tags from "./Tags/indext"; // Assuming Tags is a separate component
import * as S from './styles'
import Picture from "../Picture";
import { Photo } from "../../types";
import Populars from "./Populars";

interface Props {
    photos: Photo[];
    onSelect: (photo: Photo) => void;
    toggleFavorites: (photo: Photo) => void;
}

const Galery: React.FC<Props> = ({ photos, onSelect, toggleFavorites }) => {
    return(
        <>
            <Tags/>
            <S.Container>
                <S.Section>
                    <S.Title>Navegue pela galeria</S.Title>
                    <S.Wrapper>
                        {photos.map((photo) => (
                            <Picture 
                              key={photo.id} 
                              photo ={photo}
                              onZoom={onSelect}
                              toggleFavorites={toggleFavorites}
                            />
                        ))}
                    </S.Wrapper>
                </S.Section>
                <Populars/>
            </S.Container>
        </>
    )
}

export default Galery
