import styled from "styled-components";

interface Props{
    $image: string
}

export const Container = styled.figure<Props>`
    flex-grow: 1;
    background-image: ${({ $image }) => `url(${$image})`};
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    max-width: 100%;
    margin: 0;
    border-radius: 20px;
    background-size: cover; 
`

export const Title = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${({ theme }) => (theme.colors.grey__100)};
    max-width: 18.75rem;
    padding: 0 4rem;
`