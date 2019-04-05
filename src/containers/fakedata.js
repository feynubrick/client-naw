const mainData = {
  attendanceRateTop5: [
    {
      name: "우상호",
      party: "더불어민주당",
      partyColor: "#025AAA",
      attendanceRate: 0.99
    },
    {
      name: "나경원",
      party: "자유한국당",
      partyColor: "#C9151E",
      attendanceRate: 0.99
    },
    {
      name: "김관영",
      party: "바른미래당",
      partyColor: "#00B7B5",
      attendanceRate: 0.99
    },
    {
      name: "박지원",
      party: "민주평화당",
      partyColor: "#78b600",
      attendanceRate: 0.99
    },
    {
      name: "심상정",
      party: "정의당",
      partyColor: "#FFCB08",
      attendanceRate: 0.99
    }
  ],
  attendanceRateBot5: [
    {
      name: "우상호",
      party: "더불어민주당",
      partyColor: "#025AAA",
      attendanceRate: 0.99
    },
    {
      name: "나경원",
      party: "자유한국당",
      partyColor: "#C9151E",
      attendanceRate: 0.99
    },
    {
      name: "김관영",
      party: "바른미래당",
      partyColor: "#00B7B5",
      attendanceRate: 0.99
    },
    {
      name: "박지원",
      party: "민주평화당",
      partyColor: "#78b600",
      attendanceRate: 0.99
    },
    {
      name: "심상정",
      party: "정의당",
      partyColor: "#FFCB08",
      attendanceRate: 0.99
    }
  ],
  numOfMembersPerParty: [
    {
      id: 1,
      name: "더불어민주당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_of_the_Minjoo_Party_of_Korea.svg/1920px-Logo_of_the_Minjoo_Party_of_Korea.svg.png",
      color: "#025AAA",
      homepage: "http://theminjoo.kr",
      numOfMembers: 128
    },
    {
      id: 2,
      name: "자유한국당",
      logo:
        "http://www.libertykoreaparty.kr/images/introduce/logo/colorset.gif",
      color: "#C9151E",
      homepage: "http://www.libertykoreaparty.kr",
      numOfMembers: 113
    },
    {
      id: 3,
      name: "바른미래당",
      logo: "http://bareunmirae.kr/images/content/logo_img1_1.jpg",
      color: "#00B7B5",
      homepage: "http://bareunmirae.kr",
      numOfMembers: 29
    },
    {
      id: 4,
      name: "민주평화당",
      logo: "http://peaceparty.or.kr/theme/peace_party/img/logo_fix2.png",
      color: "#78b600",
      homepage: "http://peaceparty.or.kr",
      numOfMembers: 14
    },
    {
      id: 5,
      name: "정의당",
      logo:
        "https://www.justice21.org/newhome/asset/images/about/logo_sign2_01.gif",
      color: "#FFCB08",
      homepage: "https://www.justice21.org",
      numOfMembers: 5
    },
    {
      id: 6,
      name: "무소속",
      logo: null,
      color: "#808080",
      homepage: "",
      numOfMembers: 7
    },
    {
      id: 7,
      name: "민중당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_of_the_Minjung_Party.svg/330px-Logo_of_the_Minjung_Party.svg.png",
      color: "#EB5B04",
      homepage: "http://minjungparty.com",
      numOfMembers: 1
    },
    {
      id: 8,
      name: "대한애국당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_of_the_Korean_Patriots_Party.svg/1920px-Logo_of_the_Korean_Patriots_Party.svg.png",
      color: "#092C66",
      homepage: "http://gkpp.or.kr",
      numOfMembers: 1
    }
  ]
};

const mnaData = [
  {
    mnaName: "나경원",
    party: "자유한국당",
    attendanceRate: 0.5,
    billCount: 21
  },
  {
    mnaName: "a",
    party: "자유한국당",
    attendanceRate: 0.14,
    billCount: 15
  },
  {
    mnaName: "n",
    party: "자유한국당",
    attendanceRate: 0.3,
    billCount: 17
  },
  {
    mnaName: "c",
    party: "자유한국당",
    attendanceRate: 0.2,
    billCount: 10
  },
  {
    mnaName: "d",
    party: "자유한국당",
    attendanceRate: 0.1,
    billCount: 1
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.1,
    billCount: 19
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.2,
    billCount: 29
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.3,
    billCount: 16
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.4,
    billCount: 9
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.5,
    billCount: 4
  },
  {
    mnaName: "d",
    party: "더불어민주당",
    attendanceRate: 0.1,
    billCount: 1
  }
];

const mnaDetailData = {
  id: 2,
  name: "나경원",
  chinesename: "羅卿瑗",
  photo: "http://www.assembly.go.kr/photo/9770903.jpg",
  party: {
    id: 2,
    name: "자유한국당",
    logo: "http://www.libertykoreaparty.kr/images/introduce/logo/colorset.gif",
    color: "#C9151E"
  },
  local: "서울 동작구을",
  stdcomt: "국회운영위원회, 기획재정위원회, 정보위원회",
  phone: "02-784-3103",
  address: "의원회관 450호",
  email: "nakw@na.go.kr",
  mnaUrl: "https://twitter.com/nakw",
  history: `	서울대학교 법과대학 졸업
  서울대학교대학원 법학 박사 수료
  주요경력	한나라당 최고위원
  부산·인천지방법원, 서울행정법원 판사`,
  stdcomtAttendanceRate: 0.88,
  stdcomtAttendanceRatePosition: 20,
  totalNumOfMNA: 299,
  stdcomtBillSubmitCount: 20,
  stdcomtBillSubmitCountPosition: 20,
  sessions: [
    {
      date: "2019-01-02",
      name: "법제사법위원회",
      status: "출석"
    },
    {
      date: "2019-01-02",
      name: "교육위원회",
      status: "결석"
    },
    {
      date: "2019-01-02",
      name: "환경노동위원회",
      status: "청가"
    }
  ],
  billsPerCommittee: [
    { name: "법제사법위원회", value: 8 },
    { name: "교육위원회", value: 5 },
    { name: "환경노동위원회", value: 5 },
    { name: "보건복지위원회", value: 4 },
    { name: "행정안전위원회", value: 8 }
  ],
  billsPerStatus: [
    { name: "계류", value: 34 },
    { name: "대안반영폐기", value: 3 },
    { name: "원안가결", value: 3 }
  ]
};

const partyData = {
  parties: [
    {
      id: 1,
      name: "더불어민주당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_of_the_Minjoo_Party_of_Korea.svg/1920px-Logo_of_the_Minjoo_Party_of_Korea.svg.png",
      color: "#025AAA",
      homepage: "http://theminjoo.kr",
      numOfMembers: 128,
      attendanceRate: 0.99,
      billSubmitCount: 22
    },
    {
      id: 2,
      name: "자유한국당",
      logo:
        "http://www.libertykoreaparty.kr/images/introduce/logo/colorset.gif",
      color: "#C9151E",
      homepage: "http://www.libertykoreaparty.kr",
      numOfMembers: 113,
      attendanceRate: 0.98,
      billSubmitCount: 21
    },
    {
      id: 3,
      name: "바른미래당",
      logo: "http://bareunmirae.kr/images/content/logo_img1_1.jpg",
      color: "#00B7B5",
      homepage: "http://bareunmirae.kr",
      numOfMembers: 29,
      attendanceRate: 0.97,
      billSubmitCount: 20
    },
    {
      id: 4,
      name: "민주평화당",
      logo: "http://peaceparty.or.kr/theme/peace_party/img/logo_fix2.png",
      color: "#78b600",
      homepage: "http://peaceparty.or.kr",
      numOfMembers: 14,
      attendanceRate: 0.96,
      billSubmitCount: 19
    },
    {
      id: 5,
      name: "정의당",
      logo:
        "https://www.justice21.org/newhome/asset/images/about/logo_sign2_01.gif",
      color: "#FFCB08",
      homepage: "https://www.justice21.org",
      numOfMembers: 5,
      attendanceRate: 0.95,
      billSubmitCount: 18
    },
    {
      id: 6,
      name: "무소속",
      logo: null,
      color: "#808080",
      homepage: "",
      numOfMembers: 7,
      attendanceRate: 0.94,
      billSubmitCount: 17
    },
    {
      id: 7,
      name: "민중당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Logo_of_the_Minjung_Party.svg/330px-Logo_of_the_Minjung_Party.svg.png",
      color: "#EB5B04",
      homepage: "http://minjungparty.com",
      numOfMembers: 1,
      attendanceRate: 0.93,
      billSubmitCount: 16
    },
    {
      id: 8,
      name: "대한애국당",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_of_the_Korean_Patriots_Party.svg/1920px-Logo_of_the_Korean_Patriots_Party.svg.png",
      color: "#092C66",
      homepage: "http://gkpp.or.kr",
      numOfMembers: 1,
      attendanceRate: 0.92,
      billSubmitCount: 15
    }
  ],
  mnaList: [
    {
      name: "우상호",
      party: "더불어민주당",
      partyColor: "#025AAA",
      attendanceRate: 0.99,
      billCount: 20
    },
    {
      name: "나경원",
      party: "자유한국당",
      partyColor: "#C9151E",
      attendanceRate: 0.98,
      billCount: 19
    },
    {
      name: "김관영",
      party: "바른미래당",
      partyColor: "#00B7B5",
      attendanceRate: 0.97,
      billCount: 18
    },
    {
      name: "박지원",
      party: "민주평화당",
      partyColor: "#78b600",
      attendanceRate: 0.96,
      billCount: 17
    },
    {
      name: "심상정",
      party: "정의당",
      partyColor: "#FFCB08",
      attendanceRate: 0.95,
      billCount: 16
    }
  ]
};

const billData = {
  bills: [
    {
      id: 19234,
      date: "2019-03-29",
      name:
        "수목원·정원의 조성 및 진흥에 관한 법률 일부개정법률안(박완주의원 등 10인)",
      primaryLawMaker: {
        mnaId: 123,
        name: "박완주",
        chinesename: "朴完柱",
        party: {
          id: 1,
          name: "더불어민주당",
          color: "#FFCB08"
        }
      },
      committee: "농림축산식품해양수산위원회",
      status: "위원회 심사"
    },
    {
      id: 19234,
      date: "2019-03-29",
      name:
        "신용정보의 이용 및 보호에 관한 법률 일부개정법률안(제윤경의원 등 10인)",
      primaryLawMaker: {
        mnaId: 123,
        name: "제윤경",
        chinesename: "諸閏景",
        party: {
          id: 1,
          name: "더불어민주당",
          color: "#FFCB08"
        }
      },
      committee: "정무위원회",
      status: "위원회 심사"
    },
    {
      id: 2019488,
      date: "2019-03-29",
      name:
        "수목원·정원의 조성 및 진흥에 관한 법률 일부개정법률안(박완주의원 등 10인)",
      primaryLawMaker: {
        mnaId: 123,
        name: "박완주",
        chinesename: "朴完柱",
        party: {
          id: 1,
          name: "더불어민주당",
          color: "#FFCB08"
        }
      },
      committee: "농림축산식품해양수산위원회",
      status: "위원회 심사"
    },
    {
      id: 2019487,
      date: "2019-04-04",
      name: "건설기계관리법 일부개정법률안(이헌승의원 등 14인) ",
      primaryLawMaker: {
        mnaId: 123,
        name: "이헌승",
        chinesename: "李憲昇",
        party: {
          id: 2,
          name: "자유한국당",
          color: "#C9151E"
        }
      },
      committee: "국토교통위원회",
      status: "위원회 심사"
    },
    {
      id: 2019479,
      date: "2019-03-29",
      name: "헌법재판소법 일부개정법률안(정인화의원 등 12인)",
      primaryLawMaker: {
        mnaId: 123,
        name: "정인화",
        chinesename: "鄭仁和",
        party: {
          id: 4,
          name: "민주평화당",
          color: "#78b600"
        }
      },
      committee: "법제사법위원회",
      status: "위원회 심사"
    }
  ],
  updateDate: "2019-04-01",
  totalNumOfBills: 19653,
  billsPerCommittee: [
    {
      committee: "국토교통위원회",
      number: 1500
    },
    {
      committee: "보건복지위원회",
      number: 1100
    },
    {
      committee: "농림축산식품해양수산위원회",
      number: 700
    }
  ],
  updateDate: "2019-04-01",
  totalNumOfBills: 19653,
  billsPerCommittee: [
    {
      committee: "국토교통위원회",
      number: 1500
    },
    {
      committee: "보건복지위원회",
      number: 1100
    },
    {
      committee: "농림축산식품해양수산위원회",
      number: 700
    }
  ]
};

const BillDetailData = {
  billId: 2019488,
  date: "2019-03-29",
  name: "주차장법 일부개정법률안(전재수의원 등 10인)",
  primaryLawMaker: {
    mnaId: 123,
    name: "전재수",
    chinesename: "田載秀",
    party: {
      id: 1,
      name: "더불어민주당",
      color: "#FFCB08"
    }
  },
  committee: "국토교통위원회",
  status: "본회의 심의",
  lawMakers: [
    {
      mnaId: 123,
      name: "김병기",
      chinesename: "金炳基",
      party: {
        id: 1,
        name: "더불어민주당",
        color: "#FFCB08"
      }
    },
    {
      mnaId: 123,
      name: "김해영",
      chinesename: "金海永",
      party: {
        id: 1,
        name: "더불어민주당",
        color: "#FFCB08"
      }
    },
    {
      mnaId: 123,
      name: "박재호",
      chinesename: "朴在昊",
      party: {
        id: 1,
        name: "더불어민주당",
        color: "#FFCB08"
      }
    },
    {
      mnaId: 123,
      name: "설훈",
      chinesename: "薛勳",
      party: {
        id: 1,
        name: "더불어민주당",
        color: "#FFCB08"
      }
    },
    {
      mnaId: 123,
      name: "신창현",
      chinesename: "申昌賢",
      party: {
        id: 1,
        name: "더불어민주당",
        color: "#FFCB08"
      }
    }
  ],
  summary: `제안이유 및 주요내용
  
  관공서나 공공기관에 설치된 주차장은 평일 야간 및 주말에 비어 있는 반면에 인근 주택밀집지역은 주차공간이 부족하고, 주요행사 등이 열리는 경우 해당 지역의 주차난이 심각한 실정임. 그럼에도, 수도권을 비롯한 여러 도시지역에 공영주차장 부지를 확보하기 곤란하고 부지를 확보하더라도 설치 비용이 과다하게 소요되는 문제가 있음.
  이에 국가·지방자치단체 및 공공기관의 주차장을 평일 야간, 토요일·공휴일은 물론 주요행사 등이 열리는 경우 일반의 이용에 제공할 수 있는 근거를 마련함으로써 주차난을 완화하여 공중의 편의를 도모하는 데 이바지하려는 것임(안 제6조의4 신설).`,
  linkToNA:
    "http://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_H1O9O0T3L2A9Q2N1L0M6F4E5K9C9P9"
};

export {
  mainData,
  mnaData,
  mnaDetailData,
  partyData,
  billData,
  BillDetailData
};
