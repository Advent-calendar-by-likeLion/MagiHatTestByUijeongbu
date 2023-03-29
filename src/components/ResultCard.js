import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import HomeIcon from "./assets/svg/Home.svg";

import resultData from './assets/data/resultData';

import result2 from "./assets/svg/result/2.svg";


const resultImg = new Array(
  /*0 */   result2, 
  /*1 */   result2, 
  /*2 */   result2,
  /*3 */   result2,
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

            <ResultWrapper>
              <ResultContent dangerouslySetInnerHTML={{__html: resultData[0].content}}/>
              <BusinessIcon><img src={resultImg[match.params.id]}/></BusinessIcon>
            </ResultWrapper>
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
  top: -348px;  
`

// common data
const Wrapper = styled.div` 
  display: flex;
  width: 100%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
`;

// result content

const ResultWrapper = styled.div`
  margin-top: 200px;
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
  font-size: 16px;
  text-align: center;
`