import styled from 'styled-components';
import MainCharacter from '../assets/uijeongbu/MainCharacter.svg';
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const toQestion = () => {
        history.push("/question/1");
    }

    return (
        <>
          <BackgroundImg>
            <HomeMent1>나에게 어울리는 문화도시 의정부 사업은?</HomeMent1>
            <MainCharacterImg className="col-lg-8 col-12 mx-auto" src={MainCharacter}/>
            <ButtonWrapper onClick={toQestion}>찾으러 가기</ButtonWrapper>
          </BackgroundImg>
        </>
    )
}

export default Home;


const HomeMent1 = styled.div `
  font-size: 24px;
`
const MainCharacterImg = styled.img `
    margin-top: 36px;
`

const ButtonWrapper = styled.div `
  border-radius: 6px;
  background-color: #56B381;
  padding: 18px;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  font-size: 20px;

`;


const BackgroundImg = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 50px;
  text-align: center;
`;
