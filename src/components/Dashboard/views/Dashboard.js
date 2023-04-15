import React from "react";
import axios from "axios";
import ChartistGraph from "react-chartist";
import { dbService } from "fbase";
import styled from "styled-components";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const [data, setData] = React.useState([]);
  const [totalUser, setTotalUser] = React.useState(0);
  const [pageViews, setPageViews] = React.useState(0);
  const [shareClick, setShareClick] = React.useState(0);
  const [banelClick, setBanelClick] = React.useState(0);
  const [INTJ, setINTJ] = React.useState(0);
  const [ESTJ, setESTJ] = React.useState(0);
  const [ESFP, setESFP] = React.useState(0);
  const [ENTJ, setENTJ] = React.useState(0);
  const [ESTP, setESTP] = React.useState(0);
  const [INFP, setINFP] = React.useState(0);
  const [INTP, setINTP] = React.useState(0);
  const [ISTJ, setISTJ] = React.useState(0);
  const [ISTP, setISTP] = React.useState(0);
  const [ENFJ, setENFJ] = React.useState(0);
  const [ENFP, setENFP] = React.useState(0);
  const [ENTP, setENTP] = React.useState(0);
  const [ISFP, setISFP] = React.useState(0);
  const [ISFJ, setISFJ] = React.useState(0);
  const [ESFJ, setESFJ] = React.useState(0);
  const [INFJ, setINFJ] = React.useState(0);
  
  const RecommendData = {
    "INTJ" : 0,
  };

  React.useEffect(() => {
    dbService.collection("admin-dashboard").doc("data").get().then((doc) => {
      const docObject = doc.data();
      setShareClick(docObject["share-count"]);
      setBanelClick(docObject["event-banel-count"]);
      setINTJ(docObject["INTJ"]);
      setESTJ(docObject["ESTJ"]);
      setESFP(docObject["ESFP"]);
      setENTJ(docObject["ENTJ"]);
      setESTP(docObject["ESTP"]);
      setINFP(docObject["INFP"]);
      setINTP(docObject["INTP"]);
      setISTJ(docObject["ISTJ"]);
      setISTP(docObject["ISTP"]);
      setENFJ(docObject["ENFJ"]);
      setENFP(docObject["ENFP"]);
      setENTP(docObject["ENTP"]);
      setISFP(docObject["ISFP"]);
      setISFJ(docObject["ISFJ"]);
      setESFJ(docObject["ESFJ"]);
      setINFJ(docObject["INFJ"]);
      setTotalUser(docObject["totalUser"]);
      setPageViews(docObject["pageViews"]);
    });
  }, []);


  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <p className="card-category">누적 방문자수</p>
                <Row>
                  <div className="numbers" style={{height: '50px', marginTop: '20px'}}>
                    <Card.Title as="h4">{totalUser}</Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <p className="card-category">총 페이지 전환수</p>
                <Row>
                  <div className="numbers" style={{height: '50px', marginTop: '20px'}}>
                    <Card.Title as="h4">{pageViews}</Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <p className="card-category">공유버튼 클릭수</p>
                <Row>
                  <div className="numbers" style={{height: '50px', marginTop: '20px'}}>
                    <Card.Title as="h4">{shareClick}</Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <p className="card-category">이벤트배너 클릭수</p>
                <Row>
                  <div className="numbers" style={{height: '50px', marginTop: '20px'}}>
                    <Card.Title as="h4">{banelClick}</Card.Title>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card>
              <Card.Header>
                <Card.Title as="h4">사업 추천 결과 통계</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",""],
                      series: [
                        [INTJ, ESTJ, ESFP, ENTJ, ESTP, INFP, INTP, ISTJ, ISTP, ENFJ, ENFP, ENTP, ISFP, ISFJ, ESFJ, INFJ, 0],
                      ],
                    }}
                    type="Bar"
                    options={{
                      low: 0,
                      high: 300,
                      showArea: false,
                      height: "300px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 30,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer style={{marginTop: "20px"}}>
                <p><BlodText>A: 문화도시 콜로키움</BlodText> ({INTJ}명)</p>
                <p><BlodText>B: 333 문화살롱</BlodText> ({ESTJ}명)</p>
                <p><BlodText>C: 횡단자 캠프</BlodText> ({ESFP}명)</p>
                <p><BlodText>D: 협력활동가 네트워크</BlodText> ({ENTJ}명)</p>
                <p><BlodText>E: 시민문화활동가 지원</BlodText> ({ESTP}명)</p>
                <p><BlodText>F: 문화도시 에디터</BlodText> ({INFP}명)</p>
                <p><BlodText>G: 문화자치학교</BlodText> ({INTP}명)</p>
                <p><BlodText>H: 문화시민 동네연구</BlodText> ({ISTJ}명)</p>
                <p><BlodText>I: 경기북부 작은연구</BlodText> ({ISTP}명)</p>
                <p><BlodText>J: 백만원실험실</BlodText> ({ENFJ}명)</p>
                <p><BlodText>K: 문화도시 실험실</BlodText> ({ENFP}명)</p>
                <p><BlodText>L: U+ 스팟 꼭! 꼭!</BlodText> ({ENTP}명)</p>
                <p><BlodText>M: 이달의 예술가</BlodText> ({ISFP}명)</p>
                <p><BlodText>N: 예술가의 예술</BlodText> ({ISFJ}명)</p>
                <p><BlodText>O: 영감모임</BlodText> ({ESFJ}명)</p>
                <p><BlodText>P: 의정부 특화콘텐츠 아이디어 공모</BlodText> ({INFJ}명)</p>
              </Card.Footer>
            </Card>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

const BlodText = styled.span`
  font-weight: bold;
`