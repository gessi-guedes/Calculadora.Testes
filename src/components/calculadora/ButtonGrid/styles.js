import styled from "styled-components";

export const StyledTeclado = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width:100%;
    margin-top: 100px;
    max-width: 40%;
    padding: 20px;
    margin: auto
    
`;

export const StyledButton = styled.button`
    padding: 20px;
    background-color: #B0C4DE;
    font-size: 19px;
    font-weight: bold;
    color: white;

    &:hover{
    background-color: #708090;
    }


`;


