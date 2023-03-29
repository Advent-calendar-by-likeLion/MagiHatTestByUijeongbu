import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import HomeIcon from "./assets/svg/Home.svg";
import EyeIcon from "./assets/svg/Eye.svg";
import StarIcon from "./assets/svg/Star.svg";
import CaptureIcon from "./assets/svg/CaptureIcon.svg";
import ShareIcon from "./assets/svg/ShareIcon.svg";

import resultData from './assets/data/resultData';

import result2 from "./assets/svg/result/2.svg";


import sug1 from "./assets/svg/business/01.svg"

import { Header, Wrapper, Button } from "./layout/CommonLayout";


const resultImg = new Array(
  /*0 */   result2, 
  /*1 */   result2, 
  /*2 */   result2,
  /*3 */   result2,
)
const suggestImg = new Array(
  /*0 */   sug1, 
  /*1 */   sug1, 
  /*2 */   sug1,
  /*3 */   sug1,
)

const ResultCard = ({ match }) => {
    const history = useHistory();
    const result = 2;
    const firstSuggest = resultData[resultData[result].suggest[0]].subject.replace(/<br>/g, ' ');
    const secondSuggest = resultData[resultData[result].suggest[1]].subject.replace(/<br>/g, ' ');
    const toHome = () => {
        history.push("/");
    }

    return (
      <>
          <Header>
            <img src={HomeIcon} onClick={toHome} />
            <img src={HomeIcon} onClick={toHome} />
          </Header>
          <Wrapper>
            <QTop>
              <QuestionFont dangerouslySetInnerHTML={{__html: resultData[2].subject}}>
              </QuestionFont>
            </QTop>
          </Wrapper>

          <Wrapper>
            <BusinessIcon><img src={resultImg[match.params.id]}/></BusinessIcon>
            <ResultWrapper>
              <ResultContent dangerouslySetInnerHTML={{__html: resultData[2].content}}/>
            </ResultWrapper>

            <SuggestWrapper>
              <img src={EyeIcon}/>
              <SubjectTxt>함께 보면 좋은 사업</SubjectTxt>
            </SuggestWrapper>
              <SuggestBox>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[0].suggest[0]]}/>
                  <div style={{fontSize:"22px"}}>{firstSuggest}</div>
                  <div style={{fontSize:"12px"}}>{resultData[resultData[2].suggest[0]].hashtag}</div>
                </SuggestSubWrapper>
                <Line/>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[0].suggest[1]]}/>
                  <div style={{fontSize:"22px"}}>{secondSuggest}</div>
                  <div style={{fontSize:"12px"}}>{resultData[resultData[2].suggest[1]].hashtag}</div>
                </SuggestSubWrapper>
              </SuggestBox>

            <div style={{marginTop:"60px"}}>
              <img src={StarIcon}/> <br/>
              <SubjectTxt>결과 이미지 캡쳐/공유하기</SubjectTxt>
            </div>

            <CaptureShareDiv>
              <br/>
              <br/>
              <CaptureShareImg src={CaptureIcon}/> 
              <br/>
              <br/>
              <CaptureShareImg src={ShareIcon}/>
            </CaptureShareDiv>

              <br/>
              <br/>
              <br/>
              <br/>
          <Button style={{backgroundColor:"#B180E0"}}>모든 사업 유형 보기</Button>
              <br/>
          <Button style={{backgroundColor:"#FF88B6"}}>문화도시 의정부 인스타그램 둘러보기</Button>
          <Button style={{backgroundColor:"#56B381"}}>문화도시 의정부 네이버 블로그 둘러보기</Button>
          <Button style={{backgroundColor:"#5A66FF"}}>문화도시 의정부 네이버 카페 둘러보기</Button>
            
          </Wrapper>
      </>
        )
}

export default ResultCard;

const QTop = styled.div `
width: 90%;
text-align: center;

display: flex;
flex-direction: column;
align-items: center;
`
const QuestionFont = styled.div `
  font-size: 40px;
`
const BusinessIcon = styled.div `
  position: relative;
  top:43px;
`

const Line = styled.div` 
  width: 80%;
  height: 1px;
  border: 1px solid #000000;
  margin : 35px;
`
const SuggestSubWrapper = styled.div` 
  display: flex;
  width: 80%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
  `;

const SuggestWrapper = styled.div` 
  margin-top: 10%;
  display: flex;
  width: 80%;
  justify-cotents: center;
  align-items: baseline;
  flex-direction: column;
  `;
  
  const SuggestBox = styled.div`
    margin-top: 10px;
    width: 80%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background: #FFFFFF;
    border: 1px solid #000000;

    padding: 40px 15px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 8px;
`;

const SuggestImg = styled.img`
  width: 182px;
  height: 182px;
  margin: 10px;
`;

// result content
const ResultWrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background: #FFFFFF;
  border: 1px solid #000000;

  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const ResultContent = styled.span `
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;
  `
  
const SubjectTxt = styled.span `
  margin-top: 10px;
  font-size: 20px;
`

const CaptureShareDiv = styled.div `

`

const CaptureShareImg = styled.img `

`