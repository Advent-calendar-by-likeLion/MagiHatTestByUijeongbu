import React, {useState, useEffect} from 'react';
// import Wrapper from '../common/Wrapper';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import quiz from './assets/data/question';
import score from './assets/data/score';
// import Button from '../common/Button';
import styled from 'styled-components';

import HomeIcon from "./assets/svg/Home.svg";
import busIcon1 from "./assets/svg/business/01.svg";
import ProgressBg from "./assets/svg/ProgressBg.svg";


// import '../common/Main.css';

const busIcon = new Array(
  /*0 */   busIcon1, 
  /*1 */   busIcon1, 
  /*2 */   busIcon1,
  /*3 */   busIcon1,
)

const Question = styled.div `
  text-align : center;
  margin : 0;
  padding : 0;
`;

const Spacer = styled.div `
  height : 4rem;
`;


const QuestionCard = ({match}) => {
    const [curQuiz, setQuiz] = useState({});
    const [id, setId] = useState(0);
    const [member, setMember] = useState('');
    const history = useHistory();

    const toNextPage = (idx) => {
        history.push("/question/" + idx);
    }

    const onClick = () => {
      history("home");
    };
    useEffect(() => {
        const num = parseInt(match.params.id);
        if (quiz) {
            setQuiz(quiz[num - 1]); // 렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
            setId(num + 1);
        }
    }, [match]);

    

    const getScore = (arr) => {
        let scoreNum = 5;
        arr.map((name => {
            score[0][name] = + score[0][name] + scoreNum; // score value가 NaN이라 형변환 해줌
            scoreNum -= 1;
            if (score[0][name] > + score[1].maxScore) {
                score[1].maxScore = score[0][name];
                score[1].maxOmg = name;
            }
        }));

        if (score[1].maxOmg === '유아') {
            setMember('yooa');
        } else if (score[1].maxOmg === '효정') {
            setMember('hyojeong');
        } else if (score[1].maxOmg === '지호') {
            setMember('jiho');
        } else if (score[1].maxOmg === '미미') {
            setMember('mimi');
        } else if (score[1].maxOmg === '비니') {
            setMember('binie');
        } else if (score[1].maxOmg === '아린') {
            setMember('arin');
        } else if (score[1].maxOmg === '승희') {
            setMember('seunghee');
        } // 주소 지정에 필요
    };

    return (
        
        <>
          <Header>
            <img src={HomeIcon} onClick={onClick} />
            <img src={HomeIcon} onClick={onClick} />
          </Header>
          <Wrapper>
              <QTop>
                <QuestionFont>
                  {curQuiz.question}
                </QuestionFont>
                <BusinessIcon><img src={busIcon[match.params.id]}/></BusinessIcon>
              </QTop>

          <AnswerWrapper>
            <AnswerProgress>
                  <ProgressImg src={ProgressBg}/>
                  <ProgressTextDiv>
                    <ProgressTxt> {match.params.id}<PgSlash>ㅤ/ㅤ</PgSlash>{12} </ProgressTxt>
                  </ProgressTextDiv>
            </AnswerProgress>
          { // question page 1~10
              match.params.id < 13 && 
                  <>
                      <br/>
                      <br/>
                      { curQuiz.answer && curQuiz.answer.map((item, index) => (
                          <> 
                              {
                              <StyledLink to={`/question/${id}`} key={index} >
                                  {index == 0 ? 
                                    <PurpleButton onClick={getScore(item.name)} className='mb-4'>{item.text}</PurpleButton> : 
                                    <BlueButton>{item.text}</BlueButton>} 
                              </StyledLink>
                              }
                          </>
                      ))
                } </>
              }
          </AnswerWrapper>
          



              { // result page
              match.params.id == 13 && <Question>
                  <br/> {curQuiz.answer && curQuiz.answer.map((item, index) => (
                      <Link to={`/result/${member}`} key={index}>
                          {/* <Button className={classes.button} 
                      weight={"normal"} width={"85%"} fontSize={"1.1em"} color={"black"} 
                      onClick={() => getScore(item.name)}>{item.text}</Button>  */} </Link>
                      ))
              } </Question>
          } 
          </Wrapper>
          </>
    );
};

export default withRouter(QuestionCard);


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-cotents: center;
  align-items: center;
  flex-direction: column;
`;

// header
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
  color: #000;
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