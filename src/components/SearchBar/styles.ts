import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-block; 
`

export const SearchInput = styled.input`
    width: 37.63rem;
    height: 3.5rem;
    padding: 0.75rem 1rem;

    background: transparent;
    border-radius: 10px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.purple__first__gradient};
    box-sizing: border-box;
    
    color: ${({ theme }) => theme.colors.grey__100};


    &::placeholder{
        color: ${({ theme }) => theme.colors.grey__100};
        font-size: 1.25rem;
    }
`

export const SearchIcon = styled.img`
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    width: 2.375rem;
    height: 2.375rem;

    cursor: pointer;
`