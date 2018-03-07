## 한마디로
- ES6 : import/exports
- CommonJS(서버쪽 node.js) :  module.exports / require

아직 ES6 모듈을 기본적으로 지원하는 자바 스크립트 엔진은 없다는 사실을 명심하십시오. 당신은 바벨을 사용하고 있다고 스스로 말했습니다. Babel은 기본적으로 가져 오기 및 내보내기 선언을 CommonJS (require / module.exports)로 변환합니다. 따라서 ES6 모듈 구문을 사용하더라도 Node에서 코드를 실행하면 CommonJS가 사용됩니다.

CommonJS와 ES6 모듈에는 기술적 인 차이가 있습니다. CommonJS를 사용하면 동적으로 모듈을로드 할 수 있습니다. ES6에서는이를 허용하지 않지만이를 개발하기위한 API가 있습니다.

ES6 모듈이 표준의 일부이기 때문에, 나는 그것을 사용할 것이다.

```
Keep in mind that there is no JavaScript engine yet that natively supports ES6 modules. You said yourself that you are using Babel. Babel converts import and export declaration to CommonJS (require/module.exports) by default anyway. So even if you use ES6 module syntax, you will be using CommonJS under the hood if you run the code in Node.

There are technical difference between CommonJS and ES6 modules, e.g. CommonJS allows you to load modules dynamically. ES6 doesn't allow this, but there is an API in development for that.

Since ES6 modules are part of the standard, I would use them.
```
