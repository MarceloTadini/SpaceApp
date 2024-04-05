import styled from "styled-components";

interface GaleryProps {
    $isAligned?: string
}

export const Title = styled.h2<GaleryProps>`
    color: ${({ theme }) => theme.colors.purple};
    font-size: 2rem;
    text-align: ${({ $isAligned }) => ($isAligned ? $isAligned : 'left')};
    
`

export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const Section = styled.section`
    flex-grow: 1;
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`

