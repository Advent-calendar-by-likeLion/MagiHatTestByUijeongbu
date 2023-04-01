import styled from 'styled-components';
import MainBg from '../assets/uijeongbu/mainBg.svg';
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const toStory = () => {
        history.push("/Story");
    }

    return (
        <>
          <BackgroundImg>
            <MainBgImg className="col-lg-8 col-12 mx-auto" src={MainBg}/>
            <ButtonWrapper onClick={toStory}>TEST 시작하기</ButtonWrapper>
          </BackgroundImg>
        </>
    )
}

export default Home;


const HomeMent1 = styled.div `
  font-size: 24px;
`
const MainBgImg = styled.img `
    background-position: center;
    position: relative;
    object-fit: cover;
    height: 100vh;
`

const ButtonWrapper = styled.div `
  border-radius: 6px;
  background-color: #5A66FF;
  padding: 18px;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  width: 358px;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  top: 85%;
  z-index: 1;
  position: absolute;

  @media screen and (max-width: 768px) {
      top: 80%;
    }
`;


const BackgroundImg = styled.div `
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;
