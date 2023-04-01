import busImg1 from "../components/assets/svg/business/01.svg"
import { Header, Wrapper, Button } from "../components/layout/CommonLayout";
import HomeIcon from "../components/assets/svg/Home.svg";
import EyeIcon from "../components/assets/svg/Eye.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import resultData from '../components/assets/data/resultData';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/CharState';

import business01 from "../components/assets/svg/business/01.svg"
import business02 from "../components/assets/svg/business/02.svg"
import business03 from "../components/assets/svg/business/03.svg"
import business04 from "../components/assets/svg/business/04.svg"
import business05 from "../components/assets/svg/business/05.svg"
import business06 from "../components/assets/svg/business/06.svg"
import business07 from "../components/assets/svg/business/07.svg"
import business08 from "../components/assets/svg/business/08.svg"
import business09 from "../components/assets/svg/business/09.svg"
import business10 from "../components/assets/svg/business/10.svg"
import business11 from "../components/assets/svg/business/11.svg"
import business12 from "../components/assets/svg/business/12.svg"
import business13 from "../components/assets/svg/business/13.svg"
import business14 from "../components/assets/svg/business/14.svg"
import business15 from "../components/assets/svg/business/15.svg"
import business16 from "../components/assets/svg/business/16.svg"

import Respect from '../assets/uijeongbu/character/respect.svg'
import Dream from '../assets/uijeongbu/character/dream.svg'
import Happy from '../assets/uijeongbu/character/happy.svg'
import Expansion from '../assets/uijeongbu/character/expansion.svg'

const suggestImg = new Array(
  business01, //index 0
  business01,
  business02,
  business03,
  business04,
  business05,
  business06,
  business07,
  business08,
  business09,
  business10,
  business11,
  business12,
  business13,
  business14,
  business15,
  business16,
)

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

const AllBusiness = ({match}) =>{
    const [char, setChar] = useRecoilState(userState);
    // const mbtiid = resultData[mbtiMatch]
    const history = useHistory();
    const toHome = () => {
        history.goBack();
    }

    const onBusinessLink = (data) => {
      history.push(`/result/${data.mbti}`)
      console.log(data)
    }

    return(
        <>
        <Header>
            <img src={HomeIcon} onClick={toHome} />
            {
            char[0] == "존중이" ?
            <TopChar src={Respect} alt='상단로고'/>
            :
            char[0] == "상상이" ?
            <TopChar src={Dream} alt='상단로고'/>
            :
            char[0] == "성장이" ?
            <TopChar src={Expansion} alt='상단로고'/>
            :
            <TopChar src={Happy} alt='상단로고'/>
          }
        </Header>
        <Wrapper>
            <div style={{fontSize:"32px"}}>의정부 사업 유형 목록</div>
            {
                resultData.map((data, idx) => (
                    idx != 0 ?
                        <SuggestBox>
                            <SuggestSubWrapper onClick={(e) => {onBusinessLink(data, e)}}>
                                <SuggestImg src={suggestImg[idx]}/>
                                <div style={{fontSize:"20px", textAlign:"center"}} dangerouslySetInnerHTML={{__html: data.subject}}></div>
                                <br/>
                                <div style={{fontSize:"12px", textAlign: "center"}}>{data.hashtag}</div>
                            </SuggestSubWrapper>
                        </SuggestBox>
                    :
                        <></>
                ))
            }
        </Wrapper>
        </>
    );
};

export default AllBusiness;


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
    margin-top: 25px;
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

const SubjectTxt = styled.span `
  margin-top: 10px;
  font-size: 20px;
`

const TopChar = styled.img`
width: 38px;
margin-right: 10px;
`