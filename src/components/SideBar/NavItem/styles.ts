import styled from "styled-components";

interface ListItemProps {
    $isActive?: boolean
}

export const ListItem = styled.li<ListItemProps>`
    font-size: 1.5rem;
    line-height: 1.813rem;
    margin-bottom: 1.875rem;
    display: flex;
    align-items: center;
    gap: 1.375rem;
    
    cursor: pointer;
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.purple : theme.colors.grey__100)};
    font-family: ${({ $isActive }) => ($isActive ? 'GandhiSansBold' : 'GandhiSansRegular')};
`