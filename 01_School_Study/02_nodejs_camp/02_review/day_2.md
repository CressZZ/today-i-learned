# 자바스크립트
## 자바스크립트란?
- 브라우저 제어하려고 넷스케이프에서 개발한 언어
## 자바스크립트의 확대
- ajax활용(구글뱁) -> Debug툴의 발전(firebug) -> V8엔진의 개발 -> Node.js등장 -> Desktop, IOT, 사용범위 확대 -> 여러 플랫폼 제작사에서 자바스크립트 개발자를 끌어안기 위한 환경 조성
# 변수
- 기본자료형과 객체(Object)두가지로 나뉜다. 
# MongoDB
- key, value 저장소
## NoSQL
- 대용량 웹 서비스를 위하여 만들어짐
- 관계형 데터 모델을 지양하며 대량의 분산된 데이터를 저장하고, 조호하는데 특화
- 스키마 없이 사용가능하거나 느슨한 스키마를 제공
## 동적 스키마
- RDBMS(mysql, oracle)의 경우 uid, content_uid 처럼 스키마를 고정하고, 데이터 insert시 uid,....,filname의 필드와 매칭
- MongoDB의 경우 필드에 맞추지 않고, create_date등 입력시마다 필드를 추가 후 넣기 가능
## Mongodb 설치
### Mongodb
```sh
$ brew install mongodb
```
### Romongo 설치(MogoDB모니터링 툴)
- [https://robomongo.org] 사이트 방문 후 Robo 3T다운로드 후 설치
### mongodb data폴더 생성 및 권한 추가
```sh
$ sudo mkdir -p /data/db
# 권한추가
$ sudo chown $USER /data/db
```
### mongodb 실행
```sh
$ mongod 
```
### romongo 실행