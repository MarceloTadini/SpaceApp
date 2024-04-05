import styled from "styled-components";

export const PictureColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.purple};
    font-size: 2rem;
    text-align: center;
`


export const Image = styled.img`
    max-width: 22rem;
    border-radius: 20px;
`

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey__100};
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.purple__first__gradient};
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;
