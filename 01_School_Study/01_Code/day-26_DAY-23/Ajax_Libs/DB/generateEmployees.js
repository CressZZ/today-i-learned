// function generateEmployees() {
//   console.log('try action');
// }
//
// module.exports = generateEmployees;


// 개발 의존 모듈 로드(개발에 필요한 부품을 가지고 온다.)
var faker = require('faker');

//faker API를 참고
// console.log(typeof faker);
// console.log(faker.internet.avatar());
// console.log(faker.internet.email());

console.log({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  company: faker.company.companyName()
});


// 랜덤 데이터를 통해 JSON 포멧을 만ㄷ르어
// JSON-Server에 제공한다
 var total = 20;
 var employees = [];

// 모듈정의
function generateEmployees(){
  for (var i = 1; i <= total; ++i){
    employees.push({
      id: i,
      name: faker.internet.userName(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    })
  }
  return {
    'info': {
      'version': '0.0.1',
      'author': 'cressZZ'
    },
    'employees': employees
  }
};

// console.log(generateEmployees());
// 모듈 출력
module.exports = generateEmployees;
