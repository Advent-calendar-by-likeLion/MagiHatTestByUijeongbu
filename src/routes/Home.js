
import styled from 'styled-components';
import MainCharacter from '../assets/uijeongbu/MainCharacter.svg';
import { useHistory } from 'react-router-dom';
import { RedButton } from "./styles/buttonstyle";

const Home = () => {
    const history = useHistory();
    const toWrite = () => {
        history.push("/write");
    }

  return (
       <BackgroundImg>
          <HomeMent1>나에게 어울리는 문화도시 의정부 사업은?</HomeMent1>
          <MainCharacterImg className="col-lg-5 col-8 mx-auto " src={MainCharacter} />
          <RedButton className="mt-5" onClick={toQNA}>찾으러 가기</RedButton>
      </BackgroundImg>
  )
}

export default Home;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 50px;
  text-align: center;
`;


const HomeMent1 = styled.div`
  font-size: 24px;
`
const MainCharacterImg = styled.img`
    margin-top: 36px;
`