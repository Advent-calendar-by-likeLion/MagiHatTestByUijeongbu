import styled from "styled-components";
import Dream from "./assets/svg/loadingChar/1-2.Dream.svg"; 
import Respect from "./assets/svg/loadingChar/2-2.Respect.svg";
import Expansion from "./assets/svg/loadingChar/3-2.Expansion.svg";
import Happy from "./assets/svg/loadingChar/4-2.Happy.svg";
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/CharState';


// 유동적으로 이미지 삽입 필요
const Loading2 = ({ }) =>{
  const [char, setChar] = useRecoilState(userState);

    return(
        <>
            <LoadingWrapper>
              {
                char[0] == "존중이" ?
                <LoadingImg src={Respect}/>
                :
                char[0] == "상상이" ?
                <LoadingImg src={Dream}/>
                :
                char[0] == "성장이" ?
                <LoadingImg src={Expansion}/>
                :
                <LoadingImg src={Happy}/>
              }
            </LoadingWrapper>
        </>
    );
};

export default Loading2;


const LoadingWrapper = styled.div ` 
    background-color: #B180E0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:100vh;
`;

const LoadingImg = styled.img`
  width: 211.22px;
  height: 228.87px;
  margin-top: 270px;

@media screen and (max-width: 768px) {
  margin-top:50%;
  width: 50%;
  height: 50%;
}

`;