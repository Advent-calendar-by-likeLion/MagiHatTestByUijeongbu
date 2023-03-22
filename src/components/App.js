import AppRouter from "components/Router";
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
