const FakeDataBill = function(date, name, makerName, compt, status) {
  this.date = date;
  this.name = name;
  this.makerName = makerName;
  this.compt = compt;
  this.status = status;
};

const fakedataBills = [
  new FakeDataBill(
    "2019-03-29",
    "수목원·정원의 조성 및 진흥에 관한 법률 일부개정법률안(박완주의원 등 10인)",
    "박완주",
    "환경노동위원회",
    "계류"
  ),
  new FakeDataBill(
    "2019-03-29",
    "신용정보의 이용 및 보호에 관한 법률 일부개정법률안(제윤경의원 등 10인)",
    "제윤경",
    "법제사법위원회",
    "계류"
  ),
  new FakeDataBill(
    "2019-03-29",
    "주차장법 일부개정법률안(전재수의원 등 10인)",
    "전재수",
    "행정안전위원회",
    "계류"
  )
];

export default fakedataBills;
