import styled from "styled-components"

export const Wrapper = styled.div ` 
    display: flex;
    width: 100%;
    justify-cotents: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
`;

export const Button = styled.button `
border-radius: 6px;
color: #fff;
text-align: center;
border: 1px solid black;
height: 54px;
font-size: 16px;
width: 95%;
margin: 10px;
font-family: 'S-Core Dream-5Medium';
font-weight: 500;
font-style: normal;
padding-top: 5px;
box-shadow: 0 4px 4px -4px black;
`;