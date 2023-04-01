import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import HomeIcon from "./assets/svg/Home.svg";
import EyeIcon from "./assets/svg/Eye.svg";
import StarIcon from "./assets/svg/Star.svg";
import CaptureIcon from "./assets/svg/CaptureIcon.svg";
import ShareIcon from "./assets/svg/ShareIcon.svg";

import resultData from './assets/data/resultData';

import result01 from "./assets/svg/result/01.svg"
import result02 from "./assets/svg/result/02.svg"
import result03 from "./assets/svg/result/03.svg"
import result04 from "./assets/svg/result/04.svg"
import result05 from "./assets/svg/result/05.svg"
import result06 from "./assets/svg/result/06.svg"
import result07 from "./assets/svg/result/07.svg"
import result08 from "./assets/svg/result/08.svg"
import result09 from "./assets/svg/result/09.svg"
import result10 from "./assets/svg/result/10.svg"
import result11 from "./assets/svg/result/11.svg"
import result12 from "./assets/svg/result/12.svg"
import result13 from "./assets/svg/result/13.svg"
import result14 from "./assets/svg/result/14.svg"
import result15 from "./assets/svg/result/15.svg"
import result16 from "./assets/svg/result/16.svg"

import suggest01 from "./assets/svg/business/01.svg"
import suggest02 from "./assets/svg/business/02.svg"
import suggest03 from "./assets/svg/business/03.svg"
import suggest04 from "./assets/svg/business/04.svg"
import suggest05 from "./assets/svg/business/05.svg"
import suggest06 from "./assets/svg/business/06.svg"
import suggest07 from "./assets/svg/business/07.svg"
import suggest08 from "./assets/svg/business/08.svg"
import suggest09 from "./assets/svg/business/09.svg"
import suggest10 from "./assets/svg/business/10.svg"
import suggest11 from "./assets/svg/business/11.svg"
import suggest12 from "./assets/svg/business/12.svg"
import suggest13 from "./assets/svg/business/13.svg"
import suggest14 from "./assets/svg/business/14.svg"
import suggest15 from "./assets/svg/business/15.svg"
import suggest16 from "./assets/svg/business/16.svg"

import { Header, Wrapper, Button } from "./layout/CommonLayout";

const mbtiMatch = {
  "INTJ" : 1, // 문화도시 콜로키움
  "ESTJ" : 2, // 333문화쌀롱
  "ESFP" : 3, // 횡단자캠프
  "ENTJ" : 4, // 협력활동가 네트워크
  "ESTP" : 5, // 시민문화활동가 지원
  "ENFP" : 6, // 문화도시 실험실
  "INTP" : 7, // 문화자치학교
  "ISTJ" : 8, // 문화시민 동네연구
  "ISTP" : 9, // 경기북부 작은연구
  "ENFJ" : 10, // 백만원 실험실
  "INFP" : 11, // 문화도시 에디터
  "ENTP" : 12, // U+ 스팟 꼭! 꼭!
  "ISFP" : 13, // 이달의 예술가
  "ISFJ" : 14, // 예술가의 예술
  "ESFJ" : 15, // 영감모임
  "INFJ" : 16, // 아이디어 공모
}

const resultImg = new Array(
    result01, //index 0
    result01,
    result02,
    result03,
    result04,
    result05,
    result06,
    result07,
    result08,
    result09,
    result10,
    result11,
    result12,
    result13,
    result14,
    result15,
    result16,
)

const suggestImg = new Array(
    suggest01, //index 0
    suggest01,
    suggest02,
    suggest03,
    suggest04,
    suggest05,
    suggest06,
    suggest07,
    suggest08,
    suggest09,
    suggest10,
    suggest11,
    suggest12,
    suggest13,
    suggest14,
    suggest15,
    suggest16,
)

const ResultCard = ({ match }) => {
    const history = useHistory();
    const result = 2;
    const firstSuggest = resultData[resultData[result].suggest[0]].subject.replace(/<br>/g, ' ');
    const secondSuggest = resultData[resultData[result].suggest[1]].subject.replace(/<br>/g, ' ');
    const toHome = () => {
        history.push("/");
    }

    const toAllBusinessPage = () => {
      history.push("/allbusiness");
    }

    const toInstagramPage = () => {
      window.open("https://www.instagram.com/ccity_ujb/");
    }

    const toNaverBlogPage = () => {
      window.open("https://blog.naver.com/ccity_ujb");
    }

    const toNaverCafeaPage = () => {
      window.open("https://cafe.naver.com/ccityujb");
    }

    function copyUrl() {
      var url = ''; 
      var textarea = document.createElement("textarea");
      
      document.body.appendChild(textarea);
      url = window.document.location.href;
      textarea.value = url;
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      alert("링크 복사가 완료되었습니다. 원하는 곳에 공유하세요!")
    }

    return (
      <>
          <Header>
            <img src={HomeIcon} onClick={toHome} />
            <img src={HomeIcon} onClick={toHome} />
          </Header>
          <Wrapper>
            <QTop>
              <QuestionFont dangerouslySetInnerHTML={{__html: resultData[mbtiMatch[match.params.id]].subject}}>
              </QuestionFont>
            </QTop>
          </Wrapper>

          <Wrapper className='pb-5'>
            <BusinessIcon><img src={resultImg[mbtiMatch[match.params.id]]}/></BusinessIcon>
            <ResultWrapper>
              <ResultContent dangerouslySetInnerHTML={{__html: resultData[mbtiMatch[match.params.id]].content}}/>
            </ResultWrapper>

            <SuggestWrapper>
              <img src={EyeIcon}/>
              <SubjectTxt>함께 보면 좋은 사업</SubjectTxt>
            </SuggestWrapper>
              <SuggestBox>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[mbtiMatch[match.params.id]].suggest[0]]}/>
                  <div style={{fontSize:"22px"}}>{firstSuggest}</div>
                  <div style={{fontSize:"12px"}}>{resultData[resultData[mbtiMatch[match.params.id]].suggest[0]].hashtag}</div>
                </SuggestSubWrapper>
                <Line/>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[mbtiMatch[match.params.id]].suggest[1]]}/>
                  <div style={{fontSize:"22px"}}>{secondSuggest}</div>
                  <div style={{fontSize:"12px"}}>{resultData[resultData[mbtiMatch[match.params.id]].suggest[1]].hashtag}</div>
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
              <a onClick={copyUrl}><CaptureShareImg src={ShareIcon}/></a>
            </CaptureShareDiv>

              <br/>
              <br/>
              <br/>
              <br/>
          <Button style={{backgroundColor:"#B180E0"}} onClick={toAllBusinessPage}>모든 사업 유형 보기</Button>
              <br/>
          <Button style={{backgroundColor:"#FF88B6"}} onClick={toInstagramPage}>문화도시 의정부 인스타그램 둘러보기</Button>
          <Button style={{backgroundColor:"#56B381"}} onClick={toNaverBlogPage}>문화도시 의정부 네이버 블로그 둘러보기</Button>
          <Button style={{backgroundColor:"#5A66FF"}} onClick={toNaverCafeaPage}>문화도시 의정부 네이버 카페 둘러보기</Button>
            
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
  font-size: 37px;
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
  line-height: 143.9%;
`
  
const SubjectTxt = styled.span `
  margin-top: 10px;
  font-size: 20px;
`

const CaptureShareDiv = styled.div `

`

const CaptureShareImg = styled.img `

`