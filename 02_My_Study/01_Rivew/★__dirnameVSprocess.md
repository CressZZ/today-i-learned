- __dirname는 REPL(Read–eval–print loop)에서는 사용 불가하다. 그렇지만 .js파일 안에서는 가능하다. 그리고 실행 중인 혹은 참조된 파일의 절대 경로를 나타낸다.
process.cwd() 함수이며, REPL에서 해당 스크립트를 실행하는 프로세스의 절대 경로이다.

a.js의 위치가 nodejs 밑에 있고 전체 경로가 dev/test/nodejs일때, 내용이 아래와 같다면

```
path = require('path')
console.log(__dirname);
console.log(process.cwd())
```
dev/test/를 현재 위치로 하여 a.js를 실행한 결과는 아래와 같다.
```
/dev/test/nodejs
/dev/test/
```
