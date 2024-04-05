import styled from "styled-components";

interface Props{
    $isExpanded?: boolean
}

export const Figure = styled.figure<Props>`
    width: ${({$isExpanded}) => ($isExpanded ? '60rem' : '45rem')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 2rem;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
            font-weight: 300;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 1.6rem;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
