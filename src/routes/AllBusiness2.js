import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
import styled from 'styled-components';
import resultData from 'components/assets/data/resultData';


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
return (
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
        <SwiperSlide>
          <SwiperSlide2>
            <SuggestImg src={suggestImg[idx]}/>
          </SwiperSlide2>
        </SwiperSlide>        
        ))} 
  </Swiper>
  </div>
);
};
export default AllBusiness2;

const SwiperSlide2 = styled.div`
`
const SuggestImg = styled.img`
  width: 100%;
`;