import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    margin: 2.5rem 0;
`

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.grey__100};
    font-weight: 400;
    font-size: 1.5rem;
    margin-right: 1.5rem;
`
export const TagButton = styled.button`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grey__100};
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: ${({ theme }) => theme.colors.purple__first__gradient};
    }
`