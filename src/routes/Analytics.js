import axios from "axios";
import React from "react";


const Analytics = () => {
    const [data, setData] = React.useState();
    const [bool, setBool] = React.useState(false);

    async function Axios() {
        try {
          //응답 성공
          const response = await axios.post(
            "https://accounts.google.com/o/oauth2/token",
            {
              //보내고자 하는 데이터
              client_id: "343214386674-t80hrc5e84pe1h0d3ad3a7kstts5hd1h.apps.googleusercontent.com",
              client_secret: "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",
              refresh_token: "1//04aUHTKIkDEMfCgYIARAAGAQSNwF-L9IrTM89LkPaRMP0h685gxkjhgRKSovlvTBAWgEivz1Bb0zNkhaaYQZZH0y4b3MhSCRqloo",
              grant_type: "refresh_token",
            }
          );
          const Access_Token = response.data.access_token;
          const url =
            "https://www.googleapis.com/analytics/v3/data/ga?access_token=" +
            Access_Token +
            "&ids=ga%3A287549146&dimensions=ga%3Adate&metrics=ga%3Ausers%2Cga%3AnewUsers%2Cga%3Asessions%2Cga%3Apageviews&start-date=2023-03-29&end-date=today";
          const res = await fetch(url);
          const DATA = await res.json();
          
          return DATA;
        } catch (error) {
          //응답 실패
          console.error(error);
        }
    };

    function getData() {
        const response = Axios();
        
        response.then((result) => {
            setData(result.totalsForAllResults);
        });
    }

    React.useEffect(() => {
        getData();
    }, []);


    function getResult() {
        if (bool) {
            alert("데이터를 이미 가져왔습니다.");
            return;
        }
        if (data == null) {
            alert("데이터를 가져오는 중입니다.");
            return;
        }
        let resultDiv = document.getElementById("result");
        let users = document.createElement("p");
        users.innerHTML = `Users (총 사용자): ${data["ga:users"]}명`;

        let newUsers = document.createElement("p");
        newUsers.innerHTML = `New Users (새로운 사용자): ${data["ga:newUsers"]}명`;

        let sessions = document.createElement("p");
        sessions.innerHTML = `Sessions (총 세션수): ${data["ga:sessions"]}개`;

        let pageViews = document.createElement("p");
        pageViews.innerHTML = `Page Views (총 페이지 조화수): ${data["ga:pageviews"]}회`;

        resultDiv.appendChild(users);
        resultDiv.appendChild(newUsers);
        resultDiv.appendChild(sessions);
        resultDiv.appendChild(pageViews);
        resultDiv.append("결과 조회 끝!");

        setBool(true);
    }



    return (
       <>
       <div style={{margin:'auto', display:'block', justifyContent:'center'}}>
         <div><button onClick={getResult} style={{height:'30px'}}>데이터 가져오기 테스트</button></div>

         <div id="result" style={{marginTop:'20px'}}></div>
       </div>
       </> 
    );
};

export default Analytics;