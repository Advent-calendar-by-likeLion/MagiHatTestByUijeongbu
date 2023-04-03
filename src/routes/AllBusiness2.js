import styled from 'styled-components';
import HomeIcon from "../components/assets/svg/Home.svg";

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header, Wrapper, Button } from "../components/layout/CommonLayout";

import ProgressBg from "../components/assets/svg/ProgressBg.svg";


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

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
import resultData from 'components/assets/data/resultData';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



const suggestImg = new Array(
    // business01, //index 0
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

const AllBusiness2 = () => {


  const history = useHistory();
  const toHome = () => {
    history.goBack();
}
const [businessIndex, setBusinessIndex] = useState(0);

return (
<>
  <Header>
    <img src={HomeIcon} onClick={toHome} />
  </Header>

  {/* text over image */}
  <TextDivBold style={{fontSize:"30px", fontWeight:'400', fontFamily:'Gmarket Sans', fontStyle:'normal'}}>모두 살펴보기</TextDivBold>
  <TextDiv style={{fontSize:"30px", fontWeight:'300'}}>문화도시 의정부 사업</TextDiv>
  <AnswerProgress>
    <ProgressImg src={ProgressBg}/>
    <ProgressTextDiv>
      <ProgressTxt> {businessIndex + 1}<PgSlash>ㅤ/ㅤ</PgSlash>{16} </ProgressTxt>
    </ProgressTextDiv>
  </AnswerProgress>

  {/* swiper */}
  <div>
    <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={2}
      centeredSlides={true}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {resultData.map((data, idx) => (
          <>
            <SwiperSlide>
                <SuggestImg src={suggestImg[idx]}/>
                <div style={{fontSize:"26px", textAlign:"center", fontStyle:'normal', fontWeight:500,}} dangerouslySetInnerHTML={{__html: data.subject}}></div>
            </SwiperSlide>
          </>        
          ))} 
    </Swiper>
  </div>
  </>
);
};
export default AllBusiness2;

const SuggestImg = styled.img`
  width: 100%;
`;

const TextDiv = styled.div`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 135.9%;
    text-align: center;
    letter-spacing: -0.04em;
`

const TextDivBold = styled.div`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 135.9%;
    text-align: center;
    letter-spacing: -0.04em;
    padding-left: 9px;
`
const AnswerProgress = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
`;

const PgSlash = styled.span `
  font-size: 12px;
`

const ProgressTextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -120% );
`

const ProgressTxt = styled.span `
  font-size: 16px;
`

const ProgressImg = styled.img`
  width: 184.23px;
  height: 54px;
`;