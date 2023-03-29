import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import HomeIcon from "./assets/svg/Home.svg";

import resultData from './assets/data/resultData';



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
                <QuestionFont>
                  {resultData[0].subject}
                </QuestionFont>
                <BusinessIcon><img src={""}/></BusinessIcon>
              </QTop>
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
  font-size: 28px;
`
const BusinessIcon = styled.div `
  margin-top: 40px;  
`

// common data
const Wrapper = styled.div` 
  display: flex;
  width: 100%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
`;