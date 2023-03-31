import React, {useState, useEffect} from 'react';
// import Wrapper from '../common/Wrapper';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import quiz from './assets/data/questionData';
// import Button from '../common/Button';
import styled from 'styled-components';

import HomeIcon from "./assets/svg/Home.svg";
import qlogo1 from "./assets/svg/questionLogo/01.svg";
import ProgressBg from "./assets/svg/ProgressBg.svg";

import { Header, Wrapper, Button } from "./layout/CommonLayout";

const qLogo = new Array(
  /*0 */   qlogo1, 
  /*1 */   qlogo1, 
  /*2 */   qlogo1,
  /*3 */   qlogo1,
)


const QuestionCard = ({match}) => {
    const [curQuiz, setQuiz] = useState({});
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const toHome = () => {
        history.push("/");
    }
    const mbtiChecker = () => {
      setLoading(true);
      let map = {};
      let mbtiResult = [4];
      let flagNO11ESFP = false;
      let flagNO12ENTJ = false;
      for (let i = 0; i < mbti.length; i++) {
          if (mbti[i] in map) {
              map[mbti[i]] += 1;
          } else {
              map[mbti[i]] = 1;
          }
      }
      for (let count in map) {
          //console.log(map)
          
          if  (count === ("S") || count === ("N")) {
              mbtiResult[1] = count;
            } else if (map[count] >= 2) {
              if (count === ("E") || count === ("I")) {
                mbtiResult[0] = count;
              } else if (count === ("T") || count === ("F")) {
                mbtiResult[2] = count;
              } else if (count === ("J") || count === ("P")) {
                mbtiResult[3] = count;
            }
            console.log(mbtiResult);
          }

          if (count === ("NO11ESFP")) flagNO11ESFP = true;
          if (count === ("NO12ENTJ")) flagNO12ENTJ = true;
        }

        let finalMbti = mbtiResult.join('');
        if (flagNO11ESFP && finalMbti === "ESTP") {
          finalMbti = "ESFP";
        }
        
        if (flagNO12ENTJ && finalMbti === "ENTP") {
          finalMbti = "ENTJ";
        }
          
        setTimeout(() => {
        history.push(`/result/${finalMbti}`);
      }, 3000);
  };

  const [currentSlide, setCurrentSlide] = useState(1);
  const TOTAL_SLIDES = 12;
  
  useEffect(() => {
    setQuiz(quiz[num]);
  }, []);

  useEffect(() => {
      currentSlide > TOTAL_SLIDES && mbtiChecker();
  }, [currentSlide]);


    const [mbti, setMbti] = useState([]);
    const [num, setNum] = useState(0);

    const nextSlideFir = () => {
      setMbti(mbti + quiz[num].answer[0].name);
      setNum(num + 1);
      setQuiz(quiz[num + 1]);
      setCurrentSlide(currentSlide + 1);
      //slideRef.current.style.transform += 'translateX(-100vw)';
    };
    const nextSlideSec = () => {
      setMbti(mbti + quiz[num].answer[1].name);
      setNum(num + 1);
      setQuiz(quiz[num + 1]);
      setCurrentSlide(currentSlide + 1);
      //slideRef.current.style.transform += 'translateX(-100vw)';
  };

    return (
    <>
    {!loading && (
      <>
        <Header>
          <img src={HomeIcon} onClick={toHome} />
          {/* <img src={HomeIcon} onClick={onClick} /> */}
        </Header>
        <Wrapper>
              <QTop>
                <QuestionFont dangerouslySetInnerHTML={{__html: curQuiz.question}}/>
                <BusinessIcon><img src={qLogo[currentSlide]}/></BusinessIcon>
              </QTop>

          <AnswerWrapper>
            <AnswerProgress>
                  <ProgressImg src={ProgressBg}/>
                  <ProgressTextDiv>
                    <ProgressTxt> {num + 1}<PgSlash>ㅤ/ㅤ</PgSlash>{12} </ProgressTxt>
                  </ProgressTextDiv>
            </AnswerProgress>
          { // question page 1~10
              currentSlide < 13 && 
                  <>
                      <AnswerButtonLayout>
                        { curQuiz.answer && curQuiz.answer.map((item, index) => (
                            <> 
                                {
                                <StyledLink to={`/question`} key={index} >
                                    {index == 0 ? 
                                      <Button style={{backgroundColor:"#B180E0"}}
                                        onClick={nextSlideFir} className='mb-4'
                                      >{item.text}</Button>
                                      : 
                                      <Button style={{backgroundColor:"#5A66FF"}}
                                        onClick={nextSlideSec}
                                      >{item.text}</Button>
                                    } 
                                </StyledLink>
                                }
                            </>
                        ))}
                      </AnswerButtonLayout>
                </>
              }
          </AnswerWrapper>
        
        </Wrapper>
      </>
    )}
    {loading && (
        <div >
            <img
                src={ProgressBg}
                alt="e-ticket"
            />
            <div ></div>
        </div>
    )}

    </>
  );
};

export default withRouter(QuestionCard);

const QTop = styled.div `
width: 90%;
text-align: center;

display: flex;
flex-direction: column;
align-items: center;
`
const QuestionFont = styled.div `
  font-size: 28px;
  font-family: Gmarket Sans;
  line-height: 40.71px;
  text-align: center;
  font-weight: 300;
  color: #000000;
`
const BusinessIcon = styled.div `
  margin-top: 40px;  
  margin-bottom: 30px;
`

// content 
const AnswerWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 28px;

  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const AnswerProgress = styled.div`
  position: relative;
  bottom: 40px;
`;

const ProgressImg = styled.img`
  width: 184.23px;
  height: 54px;
`;

const ProgressTextDiv = styled.div`
  position: absolute;
  top: 12px;
  left: 63px;
`

const ProgressTxt = styled.span `
  font-size: 16px;
`
const PgSlash = styled.span `
  font-size: 12px;
`

// question

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;  
  justify-content: center;  
  text-decoration: none;
`;

const AnswerButtonLayout = styled.div `
  width:100%;
  height: 501px;
`;

const PurpleButton = styled.button `
  border-radius: 6px;
  background-color: #B180E0;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  font-size: 16px;
  width: 90%;
`;
const BlueButton = styled.button `
  border-radius: 6px;
  background-color: #5A66FF;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  font-size: 16px;
  width: 90%;
`;