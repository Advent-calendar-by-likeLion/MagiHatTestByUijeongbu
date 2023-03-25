import AppRouter from "components/Router";
import { GlobalStyle, MediaDiv } from "../styles/layout";
import styled from "styled-components";

function App() {

  return (
    <>
    <GlobalStyle/>
      <MediaDiv>
        <MainContainer className="mx-auto mt-5 py-5 px-3">
          <AppRouter/>
        </MainContainer>
      </MediaDiv>
    </>
  )
}

export default App;


const MainContainer = styled.div`
    background-color: whitesmoke ;
    width: 80%;
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