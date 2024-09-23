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
    color: black;

    &:hover{
    background-color: #708090;
    }
`;

export const StyledCalc = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;
  width: 320px;
  margin: 0 auto;
  background-color: #778899;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;



