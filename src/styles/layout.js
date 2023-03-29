import { useEffect } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

//background-color: #F5F5F5;
export const MediaDiv = styled.div`
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    margin: 0 auto;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        margin: 0px;
    }

    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
    }
    div {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
    }
    
`