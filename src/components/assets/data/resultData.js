var underline = "style='background: linear-gradient(to top, #FFF58C 50%, transparent 50%)'";

const resultData = [
    // [1] 문화도시 콜로키움
    {
        'mbti': "INTJ",
        'subject': "문화도시 콜로키움",
        'hashtag' : "#문화도시의정부 #입문 #강의형",
        'suggest': [7, 4],
        'content': `문화도시 콜로키움은<br> 의정부 시민이라면 <span ${underline}>누구나 참여</span>할 수 있어!<br><br> 문화도시 사업에 대한<br> <span ${underline}>전반적인 이야기를 알 수 있는 오픈형 강의</span>야.<br><br> 문화도시, 시민 기획, 문화자치, 문화재생 등<br>  다양한 내용에 대한 강의를 들을 수 있지.`,
        'schedule':`4월~5월 중 : 5회차 내외`
    },
    // [2] 333문화살롱
    {
        'mbti': "ESTJ",
        'subject': "333 문화살롱",
        'hashtag' : "#누구나 #3명 #소규모모임지원",
        'suggest': [4, 7],  
        'content': `333문화살롱은 의정부 시민 누구나<br> 참여할 수 있는 <span ${underline}>소규모 모임 지원 사업이야.</span><br><br> <span ${underline}>3명 이상 3번 이상 모여</span> 다양한 주제로<br> 대화 모임을 만들고, <span ${underline}>30만원</span>도 지원받을 수 있어!<br><br> 새로운 사람들과 네트워킹도 가능하고,<br> 기존에 참여하던 모임이 있다면<br> 333문화살롱에 지원해 보는 것도 좋을 것 같아~!`,
        'schedule':`4월 ~ 12월`
    },
    // [3] 횡단자캠프
    {
        'mbti': "ESFP",
        'subject': "횡단자 캠프",
        'hashtag' : "#지역문화활동가 #역량강화 #생각확장",
        'suggest': [11, 4],
        'content': `횡단자캠프는<br> <span ${underline}>지역 문화활동가들</span>을 위한 역량 강화 프로그램이야.<br><br> 기획 경험이 있는<br> <span ${underline}>다년 차 활동 경험 보유자</span>를 대상으로 하고 있지.<br><br> 지역 문화 활동가들의 <span ${underline}>생각 확장 도구</span>로서<br> 성장과 역량 강화에 도움을 줄 거야!`,
        'schedule':`5월 ~ 12월`
    },
    // [4] 협력활동가 네트워크
    {
        'mbti': "ENTJ",
        'subject': "협력활동가 네트워크",
        'hashtag' : "#나만의그룹을 #만들어봐 #네트워킹",
        'suggest': [10, 2],
        'content': `원하는 활동이 있는데 존재하지 않는다고?<br> <span ${underline}>그럼 직접 만들면 되지!</span><br><br> 협력활동가 네트워크는<br> <span ${underline}>나만의 네트워크를 만들고 싶은 사람들</span>을 위한 사업이야.<br><br> 의정부에서 내가 원하는 그룹을 직접 만들고,<br> 협업활동이나 역량강화 등 필요한 활동을 제안하고<br> <span ${underline}>직접 운영까지 할 수 있어!</span>`,
        'schedule':`5월 ~ 12월`
    },
    // [5] 시민문화활동가 지원
    {
        'mbti': "ESTP",
        'subject': "시민문화활동가 지원",
        'hashtag' : "#청년 #인턴십 #코디네이터",
        'suggest': [7, 8],
        'content': `시민문화활동가는<br> 의정부 <span ${underline}>청년</span>을 대상으로 하는<br> 청년 인턴십 형태의 <span ${underline}>사업별 코디네이터 양성</span> 프로그램이야.<br><br> 문화도시 의정부 사업에 참여해 봤거나 경험해 본 적 있는 청년들이<br> 직접 사업별 코디네이터가 될 수 있는 기회지!<br><br> <span ${underline}>문화도시 의정부의 사업을 함께 운영해 보고 싶다면,</span><br> 시민문화활동가는 절호의 찬스!`,
        'schedule':`5월 ~ 12월`
    },
    // [6] 문화도시 에디터
    {
        'mbti': "ENFP",
        'subject': "문화도시 에디터",
        'hashtag' : "#취재 #아카이빙 #전담에디터",
        'suggest': [11, 3],        
        'content': `문화도시 에디터는<br> 문화도시 의정부에서 하는 사업을 취재해<br> <span ${underline}>아카이빙</span> 하는 역할을 해.<br><br> <span ${underline}>심화과정 에디터 스쿨</span>을 통해 교육을 받을 수 있고,<br> 문화도시 의정부 공식 블로그에 직접 작성한 글을 남길 수 있어.<br><br> 전담 에디터가 되어 사업의 모든 순간을 글과 사진으로 기록하는,<br> <span ${underline}>문화도시 의정부의 눈과 귀야!</span>`,
        'schedule':`5월 ~ 12월`
    },
    // [7] 문화자치학교-문화자치 정책마켓-협치워크샵 꿍짝꿍짝
    {
        'mbti': "INTP",
        'subject': "문화자치학교<br>-문화자치 정책 마켓<br>-협치워크샵 꿍짝꿍짝",
        'hashtag' : "#시민이 #만드는 #정책제안서",
        'suggest': [6, 8],
        'content': `<span ${underline}>내 아이디어가 정책이 되었으면 좋겠다고?</span><br> 그럼 문화자치학교에 지원해 봐!<br><br> 문화자치학교, 문화자치 정책마켓, 협치워크샵 꿍짝꿍짝은<br> 하나의 흐름으로 이어져 있어.<br><br> 이 프로세스를 따라가면 역량 강화 교육과 워크숍을 통해<br> <span ${underline}>직접 정책을 제안</span>할 수 있지!`,
        'schedule':`<div><div>• 문화자치학교: 5월 ~ 8월 중</div><div style='margin-left: 18px; margin-top:2px'>토요일 14:00~17:00 / 6회차</div></div><div style='margin-top:8px;'>• 문화자치 정책마켓: 8월 26일</div><div style='margin-top:8px;'>• 협치워크샵 꿍짝꿍짝: 8월 ~ 11월</div>`
    },
    // [8] 문화시민 동네연구
    {
        'mbti': "ISTJ",
        'subject': "문화시민 동네연구",
        'hashtag' : "#시민대상 #연구지원 #지역이슈발굴",
        'suggest': [1, 16],
        'content': `문화시민 동네연구는<br> 의정부 시민이라면 <span ${underline}>누구나 참여</span> 가능해!<br><br> 시민이 직접 <span ${underline}>지역 이슈를 발굴하고 탐구</span>할 수 있도록<br> 교육과 모임을 지원하고 있어.<br><br> 연구 주제를 탐색하고 탐구하는 과정을 통해<br> 활동 분야의 전문성을 강화해 보는 거 어때?`,
        'schedule':`5월 ~ 12월`
    },
    // [9] 경기북부 작은연구
    {
        'mbti': "ISTP",
        'subject': "경기북부 작은연구",
        'hashtag' : "#연구자대상 #연구지원 #지역이슈발굴",
        'suggest': [5, 7],
        'content': `경기북부 작은연구는<br> <span ${underline}>연구자</span>를 대상으로 하는 연구 지원 프로그램이야.<br><br> 연구 팀별 멘토링을 받을 수 있고,<br> 경기 북부의 다양한 <span ${underline}>지역 이슈를 발굴</span>하고<br> <span ${underline}>정책 대안을 제시</span>하는 연구를 할 수 있어.<br><br> 지역을 기반으로 한 전문적인 연구를 하고 싶다면<br> 경기북부 작은연구를 강력 추천해!`,
        'schedule':`5월 ~ 12월`
    },
    // [10] 백만원실험실
    {
        'mbti': "ENFJ",
        'subject': "백만원 실험실",
        'hashtag' : "#동네에서 #재밌는시도를 #해보자",
        'suggest': [15, 4],
        'content': `백만원실험실은<br> 의정부 시민이라면 <span ${underline}>누구나 참여</span>할 수 있어.<br> 문화도시 의정부의 꽃이라고 할 수 있지!<br><br> 내가 주체가 되어 <span ${underline}>직접 프로젝트를 기획</span>하고 모집해 진행할 수 있어.<br> 활동을 위한 100만원도 지원받을 수 있고!<br><br> 다양한 주제가 가능해서 <span ${underline}>재밌는 시도</span>를 할 수 있는<br> 가능성이 활짝 열린 프로그램이야.`,
        'schedule':`4월 ~ 12월`
    },
    // [11] 문화도시 실험실
    {
        'mbti': "INFP",
        'subject': "문화도시 실험실",
        'hashtag' : "#지역문화실험 #확장 #심화",
        'suggest': [3, 4], 
        'content': `문화도시 실험실은<br> <span ${underline}>누구나 참여</span>할 수 있어!<br><br> <span ${underline}>지역에서 자리를 잡고</span><br> <span ${underline}>지속적으로 활동</span>하고 싶은 사람이라면 더 좋아.<br><br> 다양한 주제의 <span ${underline}>문화실험 프로젝트</span>를 큰 규모로 할 수 있어서<br> 백만원실험실의 확장판이라고 볼 수 있지.<br><br> 문화실험을 지역의 <span ${underline}>지속 가능한 사업</span>으로<br> 확장시킬 수 있는 기회가 될 거야!`,
        'schedule':`4월 ~ 12월`
    },
    // [12] U+ 스팟 꼭! 꼭!
    {
        'mbti': "ENTP",
        'subject': "U+ 스팟 꼭! 꼭!",
        'hashtag' : "#공간운영자 #문화공유공간 #네트워킹",
        'suggest': [4, 11],
        'content': `U+ 스팟 꼭! 꼭!은 <span ${underline}>공간 운영자</span>를 대상으로 한<br> <span ${underline}>문화공유공간 활성화</span> 지원 사업이야.<br><br> 다른 공간 운영자를 만나서 <span ${underline}>교류</span>하고 싶거나,<br> 공간에서 프로그램을 <span ${underline}>기획</span>하고 싶은 사람에게 맞춤 지원을 해주지!<br><br> 내 공간을 문화공유공간으로<br> <span ${underline}>확장</span>시키고 사람들에게 큰 도움이 될 거야.`,
        'schedule':`5월 ~ 11월 중`
    },
    // [13] 이달의 예술가
    {
        'mbti': "ISFP",
        'subject': "이달의 예술가",
        'hashtag' : "#예술가 #홍보브랜딩 #통합지원",
        'suggest': [6, 3],
        'content': `이달의 예술가는<br> 8명의 예술가를 선발해 개인전/공연/판매/브랜딩 등<br> 통합 지원을 해주는 <span ${underline}>예술가 창작 지원</span> 사업이야.<br><br> <span ${underline}>홍보와 브랜딩</span>에 초점이 맞춰져 있어서<br> <span ${underline}>결과물</span>을 이미 가지고 있는 예술가를 대상으로 하고 있어.<br> <span ${underline}>예술인 등록도 필수</span>야!<br><br> 홍보가 필요해?<br> 그럼 이달의 예술가에 지원해 봐!`,
        'schedule':`7월 ~ 11월 중`
    },
    // [14] 예술가의 예술
    {
        'mbti': "ISFJ",
        'subject': "예술가의 예술",
        'hashtag' : "#예술가 #창작지원",
        'suggest': [13, 3],  
        'content': `예술가의 예술은<br> <span ${underline}>예술인 등록</span>이 되어 있는 예술가의<br> 순수 <span ${underline}>‘창작’</span> 활동을 지원해 주는 사업이야.<br><br> 예술가가 오로지 예술 활동을 위한<br> <span ${underline}>예술 작업에 집중</span>할 수 있도록 지원하고 있어!<br><br> 그래서 결과물이 없어도 참여할 수 있지만,<br> 사업에 참여한 후에는 창작일지와 창작 결과물을 꼭 제출해야 해.`,
        'schedule':`7월 ~ 11월 중`
    },
    // [15] 영감모임
    {
        'mbti': "ESFJ",
        'subject': "영감모임",
        'hashtag' : "#예술가 #네트워킹 #인사이트",
        'suggest': [4, 2],
        'content': `영감모임은<br> 예술가들이 모여 서로 <span ${underline}>영감을 주고받을 수 있는</span> 모임이야!<br><br> 서로의 <span ${underline}>인사이트</span>를 주고받으며<br> 기존의 자신의 예술 환경에서 벗어나 <span ${underline}>새로운 자극</span>을 받을 수 있지.<br><br> <span ${underline}>다른 예술가들과 네트워킹</span>을 하고 싶다면<br> 영감모임에 꼭 지원해 봐~!`,
        'schedule':`4월 ~ 11월 중`
    },
    // [16] 의정부 특화콘텐츠 아이디어 공모
    {
        'mbti': "INFJ",
        'subject': "지역특화콘텐츠<br>아이디어 공모전",
        'hashtag' : "#기발한 #아이디어를 #보여줘",
        'suggest': [10, 3],
        'content': `지역과 관련된 아이디어가 있어?<br> <span ${underline}>그럼 의정부 특화콘텐츠 아이디어 공모전</span>에 참가해 봐!<br><br> 결과물이나 활동 없이<br> 오직 계획만 가지고 있어도 참여 가능한,<br> 말 그대로 <span ${underline}>‘아이디어’를 위한</span> 공모전이야.<br><br> 작품, 창업 등 다양한 내용으로 참여할 수 있어.<br> 물론 <span ${underline}>상금</span>도 있다고~!`,
        'schedule':`4월 ~ 10월 중`
    },
]

export default resultData;