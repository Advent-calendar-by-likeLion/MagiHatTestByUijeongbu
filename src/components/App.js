import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { GlobalStyle, MediaDiv } from "../styles/layout";

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
