# 커리큘럼
## 1 회차 - 개발환경 설정 및 html, css
- 수업개요, node.js개요, html, css, Bootstrap
## 2 회차 - Javascript 기초 및 jquery
- javascipt 기초, jQuery
## 3 회차 - Javascript 이해 및 MongoDB
- prototype, jquery, mong shell, roboMongo
---
## 4 회차 - nodejs 설치 및 제품 업로드 페이지 구현
- node.js설치, Express generator 설치, commonjs및 npm설명, express 설명, 제품 업로드 페이지 작성해보기(라우팅 CURD)
## 5 회차 - ODM 다뤄보기 및 Ajax 사용
- Mongoose, Mongoose validateor, ajax, 리뷰 구현
## 6 회차 - 파일 업로드 및 보안
- CSURF 로 xss공격막기, multer를 이용한 파일 업로드, 회원가입 페이지 작성, 단방향 해시를 이용한 암호화
---
## 7회차 - passport를 이용한 로그인 및 소셜 로그인 구현
- Passport 로그인페이지 구현, Flash 메시지 활용****, Facebook로그인 구현
## 8회차 - soket.io로 구현하는 패팅 및 Express 익숙해지기
- Socket.io이해, 회원간의 채팅 구현, Express미들웨어, session, local 변수 사용
---
## 9회차 - 비회원 장바구니 및 회원 장바구니 구현
- 장바구니 페이지 구현, 메인페이지구현
## 10회차 - 결제 프로세스의 이해 및 PG사 연동
- 결제 프로세스 CURL 설명, 결제 연동 페이지 구현, PG사 연동(iamport 활용), 결제완료 후 구매 상태 변경
## 11회차 - 관리자 페이지를 만들어 봅시다
- 결제상태-배송중으로 변경하기, 사용자 리스트 페이지 보기, 매달 통계그래프 보기 
## 12회차 - 크롤링으로 다른 웹사이트에서 데이터 가져오기
- 크롤링 개요, 크롤링 연습, 현재 배송위치 추적구현(request, cheerio)
---
## 13회차 - AWS배포 - 내가만든 소스 배포하기
- AWS 개요, Ubuntu에 Nodejs MongoDB설치, PM2설치 서비스배포, enginx
## 14회차 - Docker로 배포해보기 
- Docker 설치, 명령어 연습 , 용어(image, Container), 작성해보기, 컨테이너간의 통신, Docker Compose

# 최종 프로젝트 구성
- 서버: AWS
- 배포: 독커
- 웹서버:엔진엑스
- API: node.js

# 강의자료
[강의자료 링크](https://nodejs.junyoung.me/)  
아이디: yjpark@hellonature.net  
비번 : (yjpark@hellonature.net)

# 수업진행 방법
- git으로 각 챕터별로 구별*

# Node.js 란 무엇인가. 
- 웹브라우저에서 쓰이는 자바스크립트를 서버단에서 사용하게 하는거
- 싱글스레드
- 이벤트 io
- 비동기 방식(Non-Blocking IO)
- Node.js창시자는 새롭게 개발할 경우 백지에서 개발이 가능해서 개발 했다. 
- 클라이언트에서 쓸때 자바스크립트는 꼭 쓰니까, 백엔드에서도 쓰자. 

# vscode 확장 설치할거
- Auto close tag
- Auto rename tag
- intellisense for css class names
- jquery code snippets
- material icon theme
- npm intellisense (require 할때 모듈 쉽게 찾음)
- path intellisense (require 할때 경로 쉽게 찾음)

# HTML
- html은 트리 구조 이다. 
- 웹표준(모든 브라우저에서 잘 보이게)
- 웹접근성(모든 사람들이 같은 정보를 얻을 수 있게)

# CSS (Cascading Style Sheet)
- 박스모델
- MediaQuery
- <u>**부트스트랩**</u> 
- [부트스트랩 사이트 링크](http://bootstrapk.com/components/?#navbar)

# 부트 스트랩!
- 레이아웃, 버튼, 폼 양식등을 쉽게 가져오자 
- summernote (wysiwyg 에디터) 가 bootstrap으로 되어 있다. 
    - [summernote 링크](http://summernote.org)
