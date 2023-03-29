import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import HomeIcon from "./assets/svg/Home.svg";
import EyeIcon from "./assets/svg/Eye.svg";

import resultData from './assets/data/resultData';

import result2 from "./assets/svg/result/2.svg";


import sug1 from "./assets/svg/business/01.svg"


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
              <QuestionFont dangerouslySetInnerHTML={{__html: resultData[0].subject}}>
              </QuestionFont>
            </QTop>
          </Wrapper>

          <Wrapper>
            <BusinessIcon><img src={resultImg[match.params.id]}/></BusinessIcon>
            <ResultWrapper>
              <ResultContent dangerouslySetInnerHTML={{__html: resultData[0].content}}/>
            </ResultWrapper>

            <SuggestWrapper>
              <img src={EyeIcon}/>
              <SubjectTxt>함께 보면 좋은 사업</SubjectTxt>
            </SuggestWrapper>
              <SuggestBox>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[0].suggest[0]]}/>
                  <div style={{fontSize:"22px"}}>문화도시 콜로키움</div>
                  <div style={{fontSize:"12px"}}>#문화도시의정부 #입문 #강의형</div>
                </SuggestSubWrapper>
                <Line/>
                <SuggestSubWrapper>
                  <SuggestImg src={suggestImg[resultData[0].suggest[1]]}/>
                  <div style={{fontSize:"22px"}}>문화도시 콜로키움</div>
                  <div style={{fontSize:"12px"}}>#문화도시의정부 #입문 #강의형</div>
                </SuggestSubWrapper>
              </SuggestBox>
            
          </Wrapper>


      </>
        )
}

export default ResultCard;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px;
`;

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
// common data
const Wrapper = styled.div` 
  display: flex;
  width: 100%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
`;

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