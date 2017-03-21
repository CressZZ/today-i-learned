var faker = require('faker');

// 랜덤 데이터를 통해 JSON 포멧을 만들어, json-server에 전달한다.

var total = 10;
var employees = []; //배열 형식

// 모듈 정의
function generateEmployees(){
  for (var i=1 ; i<=total; i++){
    employees.push({
      id: i,
      name: faker.internet.userName(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    });
  }
  return {
    'employees': employees
  };
}

module.exports = generateEmployees;
