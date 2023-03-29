import React, {useState, useEffect} from 'react';
// import Wrapper from '../common/Wrapper';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import quiz from './assets/data/question';
import score from './assets/data/score';
// import Button from '../common/Button';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

import HomeIcon from "./assets/svg/Home.svg";


// import '../common/Main.css';

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
            {/* <img src={Share2Icon} /> */}
          </Header>
          <Wrapper>
              <QTop>
                  <ProgressCnt>
                      <ProgressCur> {
                          match.params.id
                      } </ProgressCur>
                      <ProgressEnd>/{12} </ProgressEnd>
                  </ProgressCnt>
                  <br/>
                  <QuestionFont>
                    {curQuiz.question}
                  </QuestionFont>
              </QTop>
          

              { // question page 1~10
              match.params.id < 13 && 
                  <>
                      <br/>
                      { curQuiz.answer && curQuiz.answer.map((item, index) => (
                          <> 
                              {
                              <StyledLink to={`/question/${id}`} key={index} >
                                  {index == 0 ? 
                                  <GreenButton onClick={getScore(item.name)} className='mb-3'>{item.text}</GreenButton> : 
                                  <BlueButton>{item.text}</BlueButton>} 
                              </StyledLink>
                              }
                          </>
                      ))
                } </>
              }

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
const QuestionFont = styled.div `
  font-size: 28px;
`

const QTop = styled.div `
padding: 2rem;
`

const ProgressCnt = styled.div `
  text-align: left;

`
const ProgressCur = styled.span `
  color: #ed6174;
  font-size: 2.5em;
  `

const ProgressEnd = styled.span `
  color: #b4b4b4;
  font-size: 1.5em;
`

// content

const StyledLink = styled(Link)`
  width: 100%;
`;

const QeustionWrapper = styled.div `
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const GreenButton = styled.button `
  border-radius: 6px;
  background-color: #56B381;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  font-size: 14px;
  width: 90%;
`;
const BlueButton = styled.button `
  border-radius: 6px;
  background-color: #5A66FF;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  font-size: 14px;
  width: 90%;
`;