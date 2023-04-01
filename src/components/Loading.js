import styled from "styled-components";
import Dream from "./assets/svg/loadingChar/1.Dream.svg"; 
import Respect from "./assets/svg/loadingChar/2.Respect.svg";
import Expansion from "./assets/svg/loadingChar/3.Expansion.svg";
import Happy from "./assets/svg/loadingChar/4.Happy.svg";


// 유동적으로 이미지 삽입 필요
const Loading = ({ }) =>{
    return(
        <>
            <LoadingWrapper>
              <LoadingImg src={Happy}/>
            </LoadingWrapper>
        </>
    );
};

export default Loading;


const LoadingWrapper = styled.div ` 
    background-color: #B180E0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:100vh;
`;

const LoadingImg = styled.img`
  margin-top:50%;
  width: 50%;
  height: 50%;
`;