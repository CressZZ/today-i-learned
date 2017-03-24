# html form tag에 관하여
## 1. [w3schools.com](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit) 예시
```html
<!DOCTYPE html>
<html>
<body>

<form action="/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="button" value="Submit">
</form>

<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

</body>
</html>
```
## 2. 정의
- form 요소는 input 요소를 묶은 후 서버로 전송하는 역할을 한다.
- form 요소는 두개의 속성값을 가질 수 있는데 그중 하나는 `action`이고 다른 하나는 `method`이다.
### 2.1 action
- cf.`form action="/somewhere"` -> 데이터를 호스팅을 하는 같은 서버로 전송하지만, 서버의 다른 주소(url)로 전송됨
### 2.2 method
- get: HTTP 요청 바디가 비어 있음. 폼의 내용이 url 에 포함되어 있는 서버로 전송
- post: HTTP 요청 바디에 정보가 입력되어 서버에 전송되고, 서버는 그 정보를 받아 다시 다른 정보를 브라우저에 전송한다. 
