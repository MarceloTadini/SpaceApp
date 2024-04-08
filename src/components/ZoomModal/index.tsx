import React from "react";
import { Photo } from "../../types";
import Picture from "../Picture";
import * as S from './styles'
import { ButtonIcon } from "../ButtonIcon/styles";

interface Props{
    photo: Photo
    onClose: () => void
    toggleFavorites: (photo: Photo) => void
}

const ZoomModal: React.FC<Props> = ({photo, onClose, toggleFavorites}) => {
    return(
        <>
            {photo && <>
                <S.Overlay>
                    <S.Dialog open={!!photo} onClose={onClose}>
                        <Picture photo={photo} isExpanded toggleFavorites={toggleFavorites}/>
                        <form method="dialog">
                            <ButtonIcon formMethod="dialog">
                                <img src="/icons/fechar.png" alt=" Ícone de fechar" />
                            </ButtonIcon>
                        </form>
                    </S.Dialog>
                </S.Overlay>
            </>}
        </>
    )
}

export default ZoomModal