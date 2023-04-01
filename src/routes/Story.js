import styled from 'styled-components';
import StoryBg from '../assets/uijeongbu/StoryBg.svg';
import {useHistory} from 'react-router-dom';

const Story = () => {
    const history = useHistory();
    const toQestion = () => {
        history.push("/charchoice");
    }

    return (
        <>
        <BackgroundImg>
        <BgGray/>
        <StoryText>
        두근두근! <br/>
        오늘은 문화도시 의정부 마법학교 입학식! <br/>
        입학생들은 모두 “마법모자”에게 <br/>
        사업을 하나씩 배정받는다.<br/>
        나는 과연 어떤 사업에 배정될까?<br/>
        … <br/>
        나만의 캐릭터를 선택하고<br/>
        마법모자에게 사업을 배정받아 봐! <br/>
        <br/>
        나에게 딱 맞는 문화도시 의정부 사업은 뭘까?
        </StoryText>
            <MainBgImg className="col-lg-8 col-12 mx-auto" src={StoryBg}/>
            <ButtonWrapper onClick={toQestion}>TEST 시작하기</ButtonWrapper>
        </BackgroundImg>
        </>
    )
}

export default Story;


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
  top: 80%;
  position: absolute;
  z-index: 2;
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

const BgGray = styled.div`
    background: rgba(0, 0, 0, 0.5);
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
`

const StoryText = styled.div`
    font-size: 14px;
    line-height: 154.4%;
    text-align: center;
    letter-spacing: 0.025em;
    color: #FFFFFF;
    position: absolute;
    z-index: 4;
    top: 28%;
`