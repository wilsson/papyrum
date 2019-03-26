import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    font-family: 'Nunito', sans-serif;
    width: 300px;
    background-color: #F4F4F4;
`;

export const SidebarItem =  styled.li`
    ${(props) => props.active && `
        background-color: #00A8FF;
    `}
`;
