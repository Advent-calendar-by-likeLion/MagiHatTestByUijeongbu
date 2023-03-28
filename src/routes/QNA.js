import { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";
import styled from "styled-components";
import { Container, WriteTitleDiv, ButtonLayout, LetterStyle } from "./styles/style";
import LoginBar from '../assets/LoginBar.svg';
import { RedButton } from "./styles/buttonstyle";
import Letter from '../assets/Letter.svg';
import { useHistory } from 'react-router-dom';

const QNA = () => {
    const history = useHistory();
    const toQNA = () => {
        history.push("/QNA");
    }

  return (
      <>
          <HomeMent1>질문지</HomeMent1>
          <MainCharacterImg className="col-lg-5 col-8 mx-auto " src={Letter} />
          <RedButton className="mt-5" onClick={toQNA}>찾으러 가기</RedButton>
      </>
  )
}

export default QNA;


const HomeMent1 = styled.div`
  font-size: 18px;
`
const MainCharacterImg = styled.img`
    margin-top: 36px;
`