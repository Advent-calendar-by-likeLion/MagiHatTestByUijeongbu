import AppRouter from "components/Router";
import {GlobalStyle, MediaDiv} from "../styles/layout";
import styled from "styled-components";

function App() {

    return (
        <>
            <GlobalStyle/>
            <MediaDiv>
                        <AppRouter/>
            </MediaDiv>
        </>
    )
}

export default App;


const MainContainer = styled.div `
    background-color: whitesmoke ;
    width: 90%;
    height: 80%;
    text-align: center ;
    border-radius: 20px;

    margin-left: auto;
    margin-right: auto;
    margin-top : 3%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

