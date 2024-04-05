import React from "react";
import * as S from './styles'
import photos from './fotos-populares.json'

const Populars: React.FC = () => {
    return(
        <div>
            <S.Title>Populares</S.Title>
            <S.PictureColumn>
                {photos.map(photo => <S.Image key={photo.id} src={photo.path} alt={photo.alt}/>)}
            </S.PictureColumn>
            <S.Button>Ver mais</S.Button>
        </div>
    )
}

export default Populars