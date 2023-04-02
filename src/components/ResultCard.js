import styled from 'styled-components';

import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';

import HomeIcon from "./assets/svg/Home.svg";
import EyeIcon from "./assets/svg/Eye.svg";
import StarIcon from "./assets/svg/Star.svg";
import CaptureIcon from "./assets/svg/CaptureIcon.svg";
import ShareIcon from "./assets/svg/ShareIcon.svg";
import KakaoShareIcon from "./assets/svg/KakaoShareIcon.svg";

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

import insta from '../components/assets/svg/SNS/instagram.svg'
import blog from '../components/assets/svg/SNS/naverblog.svg'
import cafe from '../components/assets/svg/SNS/navercafe.svg'

import { Header, Wrapper, Button } from "./layout/CommonLayout";
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/CharState';

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
    const result = mbtiMatch[match.params.id];
    const firstSuggest = resultData[resultData[result].suggest[0]];
    const secondSuggest = resultData[resultData[result].suggest[1]];
    const [char, setChar] = useRecoilState(userState);

    const toHome = () => {
        history.push("/");
    }

    const toAllBusinessPage = () => {
      history.push("/allbusiness");
    }

    const onBusinessLink = () => {
      history.push(`/result/${resultData[resultData[result].suggest[0]].mbti}`)
    }

    const onBusinessLink2 = () => {
      history.push(`/result/${resultData[resultData[result].suggest[1]].mbti}`)
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

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      document.body.appendChild(script);
      return () => document.body.removeChild(script);
    }, []);

    function shareToKakao() {
      if (window.Kakao) {
        const url = window.document.location.href;
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("838f36a0158a761f70cce49490bd20b7");
        }
    
        kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: "마법모자 테스트",
            description: "2023 문화도시 의정부 사업 추천 성향 검사",
            imageUrl: "https://raw.githubusercontent.com/Advent-calendar-by-likeLion/MagiHatTestByUijeongbu/8b36da21e1bdd5fd056e2ad88d86d5a2b215ea4e/src/components/assets/img/share-test.png",
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          },
          buttons: [
            {
              title: "결과보러 가기",
              link: {
                mobileWebUrl: url,
                webUrl: url
              }
            }
          ]
        });
      }
    }

    return (
      <>
          <Header>
            <img src={HomeIcon} onClick={toHome} />
          </Header>
          <Wrapper>
            <QTop>
              <QuestionFont dangerouslySetInnerHTML={{__html: resultData[result].subject}}>
              </QuestionFont>
            </QTop>
          </Wrapper>

          <Wrapper className='pb-5'>
            <BusinessIcon><img src={resultImg[result]}/></BusinessIcon>
            <ResultWrapper>
              <ResultContent dangerouslySetInnerHTML={{__html: resultData[result].content}}/>
              <br/>
              <u style={{fontWeight:"bold"}}>진행 일정</u>
              <Schedule dangerouslySetInnerHTML={{__html: resultData[result].schedule}}/>
            </ResultWrapper>

            <SuggestWrapper>
              <img src={EyeIcon}/>
              <SubjectTxt>함께 보면 좋은 사업</SubjectTxt>
            </SuggestWrapper>
              <SuggestBox>
                <SuggestSubWrapper>
                  <SuggestImg onClick={onBusinessLink} src={suggestImg[resultData[result].suggest[0]]}/>
                  <div style={{fontSize:"22px", textAlign:"center"}} dangerouslySetInnerHTML={{__html: firstSuggest.subject}}></div>
                  <div style={{fontSize:"12px", marginTop:"10px"}}>{resultData[resultData[result].suggest[0]].hashtag}</div>
                </SuggestSubWrapper>
                <Line/>
                <SuggestSubWrapper>
                  <SuggestImg onClick={onBusinessLink2} src={suggestImg[resultData[result].suggest[1]]}/>
                  <div style={{fontSize:"22px", textAlign:"center"}} dangerouslySetInnerHTML={{__html: secondSuggest.subject}}></div>
                  <div style={{fontSize:"12px",  marginTop:"10px"}}>{resultData[resultData[result].suggest[1]].hashtag}</div>
                </SuggestSubWrapper>
              </SuggestBox>

            <div style={{marginTop:"60px"}}>
              <img src={StarIcon}/> <br/>
              <SubjectTxt>결과 공유하기</SubjectTxt>
            </div>

            <CaptureShareDiv>
              <br/><br/>
              <a onClick={shareToKakao} style={{marginRight:"10px"}}><CaptureShareImg src={KakaoShareIcon}/></a>
              <br/><br/>
              <a onClick={copyUrl}><CaptureShareImg src={ShareIcon}/></a>
              <br/><br/>
            </CaptureShareDiv>
              <br/>
              <br/>
          <Button style={{backgroundColor:"#B180E0"}} onClick={toAllBusinessPage}>모든 사업 유형 보기</Button>
          <Button style={{backgroundColor:"#B180E0", marginTop:'15px'}} onClick={toHome}>테스트하러 가기</Button>
              <br/>
              <br/>
          <Button style={{backgroundColor:"#FF88B6", paddingBottom:'12px', display:'flex', justifyContent:'center', alignItems:'center'}} onClick={toInstagramPage}>
            <img src={insta} alt='인스타그램' style={{width:'24px', marginRight:'8px', paddingTop:'5px'}}/>
            <div style={{paddingTop:'10px'}}>문화도시 의정부 인스타그램 둘러보기</div>
          </Button>
          <Button style={{backgroundColor:"#56B381", paddingBottom:'12px', display:'flex', justifyContent:'center', alignItems:'center'}} onClick={toNaverBlogPage}>
            <img src={blog} alt='블로그' style={{width:'30px', marginRight:'8px', paddingTop:'15px'}}/>
            <div style={{paddingTop:'10px'}}>문화도시 의정부 네이버 블로그 둘러보기</div>
          </Button>
          <Button style={{backgroundColor:"#5A66FF", paddingBottom:'12px', display:'flex', justifyContent:'center', alignItems:'center'}} onClick={toNaverCafeaPage}>
            <img src={cafe} alt='카페' style={{width:'24px', marginRight:'8px', paddingTop:'5px'}}/>
            <div style={{paddingTop:'10px'}}>문화도시 의정부 네이버 카페 둘러보기</div>
          </Button>
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
  font-size: 32px;
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
  box-shadow: 0 0 0 3px #000000 inset; 
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
  width: 54px;
  height: 54px;
`

const Schedule = styled.div`
  margin-top: 10px;
`