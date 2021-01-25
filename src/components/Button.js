import styled from 'styled-components';

export const ButtonAdd = styled.button`
    background-color: green;
    border: 2px solid transparent;
    padding: 15px 50px;
    color: white;
    font-size: 20px;
    transition-property: color, background-color, border;
    transition-duration:.3s;
    border-radius:3px;
    &:hover{
        background-color: white;
        color: green;
        border: 2px solid green;
    }
`;