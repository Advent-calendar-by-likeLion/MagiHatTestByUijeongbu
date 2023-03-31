function toBolder(text) {
    return "<span style='font-weight: 400'>" + text +"</span>";
}

const questionData = [
    {
        'question': `문화도시 의정부 사업에<br> ${toBolder("참여해 본 적")} 있어?`,
        'answer': [
            {
                text: '이번이 처음이야! 입문 단계라고 할 수 있지~',
                mbtiResult: 'J'
            },
            {
                text: '참여해 본 적 있고, 심화 과정에 관심이 있어!',
                mbtiResult: 'P'
            }
        ] 
    },
    {
        'question': `${toBolder("어떤 분야")}에<br> 관심이 있어?`,
        'answer': [
            {
                text: '예술, 문화기획에 관심이 있어',
                mbtiResult: 'F'
            },
            {
                text: '연구, 정책에 관심이 있어',
                mbtiResult: 'T'
            }
        ] 
    },
    {
        'question': `${toBolder("새로운 동료")}를<br> ${toBolder("만날 준비")}가 되어 있어?`,
        'answer': [
            {
                text: '응! 두근두근~ 설레!',
                mbtiResult: 'E'
            },
            {
                text: '흠.. 난 아직 마음의 준비가..',
                mbtiResult: 'I'
            }
        ] 
    },
    {
        'question': `문화도시 의정부에서<br> ${toBolder("어떤 사업")}에 참여하고 싶어?`,
        'answer': [
            {
                text: '다양한 체험과 경험을 할 수 있는 사업',
                mbtiResult: 'J'
            },
            {
                text: '기존에 하던 활동을 심화할 수 있는 사업',
                mbtiResult: 'P'
            }
        ] 
    },
    {
        'question': `의정부의 ${toBolder("다른 사람들과<br> 함께")} 일해보고 싶어?`,
        'answer': [
            {
                text: '응! 다양한 사람들과 만나서 네트워킹 하고 싶어',
                mbtiResult: 'E'
            },
            {
                text: '음.. 나는 내 역량 강화에 더 힘쓰고 싶어!',
                mbtiResult: 'I'
            }
        ] 
    },
    {
        'question': `${toBolder("모임의 규모")}는<br> 어땠으면 좋겠어?`,
        'answer': [
            {
                text: '3명 정도 도란도란 얘기 나눌 수 있을 정도!',
                mbtiResult: 'S'
            },
            {
                text: '무슨 소리! 왁자지껄 많으면 많을수록 좋아~',
                mbtiResult: 'N'
            }
        ] 
    },
    {
        'question': `${toBolder("어떤 일")}을 할 때<br> 더 즐거워?`,
        'answer': [
            {
                text: '상상력으로 새로운 창작물을 만드는 일',
                mbtiResult: 'F'
            },
            {
                text: '기존의 자료를 바탕으로 분석하는 일',
                mbtiResult: 'T'
            }
        ] 
    },
    {
        'question': `어떤 ${toBolder("업무 스타일")}을<br> 추구해?`,
        'answer': [
            {
                text: '사람들과 함께 하는 팀 프로젝트가 좋아!',
                mbtiResult: 'E'
            },
            {
                text: '혼자 하는 개인 프로젝트가 좋아~',
                mbtiResult: 'I'
            }
        ] 
    },
    {
        'question': `${toBolder("지역 이슈")}에<br> 관심이 있어?`,
        'answer': [
            {
                text: '응! 의정부 지역 이슈를 탐구하고 싶어',
                mbtiResult: 'T'
            },
            {
                text: '아직 의정부에 대해 잘 몰라',
                mbtiResult: 'F'
            }
        ] 
    },
    {
        'question': `${toBolder("깊고 전문적인 지식")}을 가진<br> 분야가 있어?`,
        'answer': [
            {
                text: '응, 나는 내 분야의 전문가야',
                mbtiResult: 'P'
            },
            {
                text: '아니, 나는 전문가는 아니야',
                mbtiResult: 'J'
            }
        ] 
    },
    {
        'question': `의정부에서 살거나<br> 활동하는 ${toBolder("청년")}이야?`,
        'answer': [
            {
                text: '응, 청년이야',
                mbtiResult: 'ESTP'
            },
            {
                text: '청년은 아니야',
                mbtiResult: 'ESFP'
            }
        ] 
    },
    {
        'question': `의정부에서<br> ${toBolder("공간을 운영")}하고 있어?`,
        'answer': [
            {
                text: '응, 내 공간을 운영하고 있고 활성화를 원해!',
                mbtiResult: 'ENTP'
            },
            {
                text: '아니, 공간에 제약 없는 자유로운 활동을 원해~',
                mbtiResult: 'ENTJ'
            }
        ] 
    },
    
]

export default questionData;