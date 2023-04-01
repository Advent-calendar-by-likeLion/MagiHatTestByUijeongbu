import React, {useState, useEffect} from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom';
import quiz from './assets/data/questionData';
import styled from 'styled-components';

import HomeIcon from "./assets/svg/Home.svg";
import qlogo1 from "./assets/svg/questionLogo/01.svg";
import qlogo2 from "./assets/svg/questionLogo/02.svg";
import qlogo3 from "./assets/svg/questionLogo/03.svg";
import qlogo4 from "./assets/svg/questionLogo/04.svg";
import qlogo5 from "./assets/svg/questionLogo/05.svg";
import qlogo6 from "./assets/svg/questionLogo/06.svg";
import qlogo7 from "./assets/svg/questionLogo/07.svg";
import qlogo8 from "./assets/svg/questionLogo/08.svg";
import qlogo9 from "./assets/svg/questionLogo/09.svg";
import qlogo10 from "./assets/svg/questionLogo/10.svg";
import qlogo11 from "./assets/svg/questionLogo/11.svg";
import qlogo12 from "./assets/svg/questionLogo/12.svg";
import ProgressBg from "./assets/svg/ProgressBg.svg";

import { Header, Wrapper, Button } from "./layout/CommonLayout";
import Loading from './Loading';

const qLogo = new Array(
    qlogo1, // index 0
    qlogo1,
    qlogo2,
    qlogo3,
    qlogo4,
    qlogo5,
    qlogo6,
    qlogo7,
    qlogo8,
    qlogo9,
    qlogo10,
    qlogo11,
    qlogo12,
)


const QuestionCard = ({match}) => {
    const [curQuiz, setQuiz] = useState({});
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [flagNO11ESFP, setFlagNO11ESFP] = useState(false);
    const [flagNO12ENTJ, setFlagNO12ENTJ] = useState(false);

    const toHome = () => {
        history.push("/");
    }
    const mbtiChecker = () => {
      setLoading(true);
      let map = {};
      let mbtiResult = [4];
      for (let i = 0; i < mbti.length; i++) {
          if (mbti[i] in map) {
              map[mbti[i]] += 1;
          } else {
              map[mbti[i]] = 1;
          }
      }
      console.log(mbti);

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
          }

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
      if (quiz[num].answer[0].name[0] === "YES11ESTP" || quiz[num].answer[0].name[0] === "YES12ENTP") {
      } else {
        setMbti(mbti + quiz[num].answer[0].name);
      }
      setNum(num + 1);
      setQuiz(quiz[num + 1]);
      setCurrentSlide(currentSlide + 1);
    };
    const nextSlideSec = () => {
      if (quiz[num].answer[1].name[0] === "NO11ESFP" ) {
        setFlagNO11ESFP(true)
      } else if (quiz[num].answer[1].name[0] === "NO12ENTJ" ) {
        setFlagNO12ENTJ(true)
      } else {
        setMbti(mbti + quiz[num].answer[1].name);
      }
      setNum(num + 1);
      setQuiz(quiz[num + 1]);
      setCurrentSlide(currentSlide + 1);
  };

    return (
    <>
    {!loading && (
      <>
        <Header>
          <img src={HomeIcon} onClick={toHome} />
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
            <>
              <Loading/>
            </>
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
  line-height: 40.71px;
  text-align: center;
  font-weight: 300;
  color: #000000;
`
const BusinessIcon = styled.div `
  margin-top: 40px;  
  margin-bottom: 30px;
  width: 120px;
  height: 120px;
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
