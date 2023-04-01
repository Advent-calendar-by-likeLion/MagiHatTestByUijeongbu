import busImg1 from "../components/assets/svg/business/01.svg"
import { Header, Wrapper, Button } from "../components/layout/CommonLayout";
import HomeIcon from "../components/assets/svg/Home.svg";
import EyeIcon from "../components/assets/svg/Eye.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import sug1 from "../components/assets/svg/business/01.svg"
import resultData from '../components/assets/data/resultData';


const suggestImg = new Array(
    /*0 */   sug1, 
    /*1 */   sug1, 
    /*2 */   sug1,
    /*3 */   sug1,
  )

const AllBusiness = ({}) =>{
    const history = useHistory();
    const toHome = () => {
        history.push("/");
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
                                <SuggestImg src={suggestImg[resultData[0].suggest[0]]}/>
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