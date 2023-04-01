import busImg1 from "../components/assets/svg/business/01.svg"
import { Header, Wrapper, Button } from "../components/layout/CommonLayout";
import HomeIcon from "../components/assets/svg/Home.svg";
import EyeIcon from "../components/assets/svg/Eye.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import resultData from '../components/assets/data/resultData';

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
const AllBusiness = ({}) =>{
    const history = useHistory();
    const toHome = () => {
        history.goBack();
    }

    return(
        <>
        <Header>
            <img src={HomeIcon} onClick={toHome} />
            <img src={HomeIcon} onClick={toHome} />
        </Header>
        <Wrapper>
            <div style={{fontSize:"40px"}}>의정부 사업 유형 목록</div>
            {
                resultData.map((data, idx) => (
                    idx != 0 ?
                        <SuggestBox>
                            <SuggestSubWrapper>
                                <SuggestImg src={suggestImg[idx]}/>
                                <div style={{fontSize:"22px"}}>{data.subject.replace('<br>', ' ')}</div>
                                <br/>
                                <div style={{fontSize:"22px", textAlign: "center"}}>{data.hashtag}</div>
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