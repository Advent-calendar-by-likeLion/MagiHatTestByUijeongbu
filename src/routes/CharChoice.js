import React, { useState } from 'react'
import styled from 'styled-components';
import Respect from '../assets/uijeongbu/character/respect.svg'
import Dream from '../assets/uijeongbu/character/dream.svg'
import Happy from '../assets/uijeongbu/character/happy.svg'
import Expansion from '../assets/uijeongbu/character/expansion.svg'
import backIcon from '../components/assets/svg/Home.svg'
import { useHistory } from 'react-router-dom';
import { Header } from 'components/layout/CommonLayout';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/CharState';
import { charArray2, charArray4 } from 'recoil/charArray';
import { charArray3, charArray1 } from '../recoil/charArray';
import { useEffect } from 'react';
import Loading from 'components/Loading';

const CharChoice = () => {

    const [loading, setLoading] = useState(false);

    const history = useHistory();
    const [char, setChar] = useRecoilState(userState);

    useEffect(() => {
        window.localStorage.setItem('character', char[0])
    })

    const onChange = (e) => {
        setChar(e.target.value);
        console.log('test');
    }

    const onClick = () => {
        history.push('/story');
    }

    const onRespect = () => {
        setChar(charArray1)
        localStorage.setItem('character', char[0])
    }

    const onDream = () => {
        setChar(charArray2)
        localStorage.setItem('character', char[0])
    }

    const onExpansion = () => {
        setChar(charArray3)
        localStorage.setItem('character', char[0])
    }

    const onHappy = () => {
        setChar(charArray4)
        localStorage.setItem('character', char[0])
    }

    const charclick = () => {
        setLoading(true);
        

        setTimeout(() => {
            history.push('/question');
        }, 3000);

        
    }

    return (
    <>
    {!loading && (
      <>
        <Header>
            <img src={backIcon} onClick={onClick} />
        </Header>
        <div style={{alignItem: 'center'}}>
            <div style={{alignItem: 'center'}}>
                <div style={{display: 'flex', alignItem: 'center', justifyContent: 'center'}}>
                    <TextDiv>내</TextDiv>
                    <TextDivBold>캐릭터</TextDivBold>
                    <TextDiv>를</TextDiv>
                </div>
                <TextDiv>골라줘!</TextDiv>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap:'25px', alignItem: 'center', marginTop:'100px', justifyContent: 'center'}}>
                    {
                        char[0] == "존중이" ?
                        <>
                        <img src={Respect} alt='존중이' width='150.3px' style={{margin: '0 auto'}}></img>
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                            <img src={Dream} alt='상상이' onClick={onDream} style={{opacity: '80%'}}></img>
                            <img src={Expansion} alt='성장이' onClick={onExpansion} style={{opacity: '80%'}}></img>
                            <img src={Happy} alt='행복이' onClick={onHappy} style={{opacity: '80%'}}></img>
                        </div>
                        <ButtonWrapper style={{margin: '0 auto', marginTop: '48px'}} onClick={charclick}>선택하기</ButtonWrapper>
                        </>
                        : 
                        char[0] == "상상이" ?
                        <>
                        <img src={Dream} alt='상상이' width='150.3px' style={{margin: '0 auto'}}></img>
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                            <img src={Respect} alt='존중이' onClick={onRespect} style={{opacity: '80%'}}></img>
                            <img src={Expansion} alt='성장이' onClick={onExpansion} style={{opacity: '80%'}}></img>
                            <img src={Happy} alt='행복이' onClick={onHappy} style={{opacity: '80%'}}></img>
                        </div>
                        <ButtonWrapper style={{margin: '0 auto', marginTop: '48px'}} onClick={charclick}>선택하기</ButtonWrapper>
                        </>
                        :
                        char[0] == "성장이" ?
                        <>
                        <img src={Expansion} alt='성장이' width='150.3px' style={{margin: '0 auto'}}></img>
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                            <img src={Respect} alt='존중이' onClick={onRespect} style={{opacity: '80%'}}></img>
                            <img src={Dream} alt='상상이' onClick={onDream} style={{opacity: '80%'}}></img>
                            <img src={Happy} alt='행복이' onClick={onHappy} style={{opacity: '80%'}}></img>
                        </div>
                        <ButtonWrapper style={{margin: '0 auto', marginTop: '48px'}} onClick={charclick}>선택하기</ButtonWrapper>
                        </>
                        :
                        <>
                        <img src={Happy} alt='햄복이' width='150.3px' style={{margin: '0 auto'}}></img>
                        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                            <img src={Respect} alt='존중이' onClick={onRespect} style={{opacity: '80%'}}></img>
                            <img src={Dream} alt='상상이' onClick={onDream} style={{opacity: '80%'}}></img>
                            <img src={Expansion} alt='성장이' onClick={onExpansion} style={{opacity: '80%'}}></img>
                        </div>
                        <ButtonWrapper style={{margin: '0 auto', marginTop: '48px'}} onClick={charclick}>선택하기</ButtonWrapper>
                        </>
                    }
            </div>
        </div>
    </>
    )}

    {loading && (
    <>
        <Loading/>
    </>
    )}

    </>
    )
}

export default CharChoice

const ButtonWrapper = styled.div `
  border-radius: 6px;
  background-color: #5A66FF;
  padding: 18px;
  color: #fff;
  text-align: center;
  border: 2px solid black;
  height: 54px;
  width: 358px;
  font-size: 20px;
`;

const TextDiv = styled.div`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 33px;
    line-height: 129.9%;
    text-align: center;
    letter-spacing: -0.02em;
`

const TextDivBold = styled.div`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 129.9%;
    text-align: center;
    letter-spacing: -0.02em;
    padding-left: 9px;
`