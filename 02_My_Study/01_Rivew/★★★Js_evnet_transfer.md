# 이벤트 전파를 막는 방법
# 1. 참고 사이트
[http://programmingsummaries.tistory.com/313](http://programmingsummaries.tistory.com/313)
# 2.stopPropagation()
- 일반적으로 자식에서 실행된 이벤트는 부모에게 전달 된다.
- `event.stopPropagation()`를 통해 이벤트가 부모에게 전달되는 것을 막는다.
```javascript
//DIV 영역에 클릭 이벤트 설정
$("#div_").on("click",function(event){
    $("#console").append("<br>DIV 클릭");
});

//P 영역에 클릭 이벤트 설정
$("#p_").on("click",function(event){
    $("#console").append("<br>P 클릭");
});

//SPAN 영역에 클릭 이벤트 설정
$("#span_").on("click",function(event){
    $("#console").append("<br>SPAN 클릭");

    //상위로 이벤트가 전파되지 않도록 중단한다.
    event.stopPropagation();
});
```

# 3.stopImmediatePropagation()
- 부모뿐 아니라, 자신에게 두개의 이벤트가 걸려 있을때 하나만 실행되게 한다.
```javascript
//DIV 영역에 클릭 이벤트 설정
$("#div_").on("click",function(event){
    $("#console").append("<br>DIV 클릭");
});

//P 영역에 클릭 이벤트 설정
$("#p_").on("click",function(event){
    $("#console").append("<br>P 클릭");
});

//SPAN 영역에 첫번째 클릭 이벤트 설정
$("#span_").on("click",function(event){
    $("#console").append("<br>SPAN 클릭1");

    //상위 뿐 아니라 같은 레벨로도 이벤트가 전파되지 않도록 중단한다.
    event.stopImmediatePropagation();
});

//SPAN 영역에 두번째 클릭 이벤트 설정
$("#span_").on("click",function(event){
    $("#console").append("<br>SPAN 클릭2");

    //상위로 이벤트가 전파되지 않도록 중단한다.
    event.stopPropagation();
});
```
# 4.preventDefault()
- 기본적으로 원래 내장되어 있는 이벤트 실행을 막는다.
- 예) `<a>`태그에서 클릭이벤트는 링크로 이동을 수행하나 `preventDefault()`를 통해 링크로 이동을 막는다.
```javascript
//DIV 영역에 클릭 이벤트 설정
$("#div_").on("click",function(event){
    $("#console").append("<br>DIV 클릭");
});

//P 영역에 클릭 이벤트 설정
$("#p_").on("click",function(event){
    $("#console").append("<br>P 클릭");
});

//A 영역에 클릭 이벤트 설정
$("#a_").on("click",function(event){
    $("#console").append("<br>A 클릭");

    //이벤트의 기본 동작을 중단한다.
    event.preventDefault();
});
```
# 5.return false
- **jQuery를 사용해서 이벤트를 사용하는 경우** `return false`는 `stopPropagation`과 `preventDefault`를 모두 수행하는 것과 같은 효과를 얻는다.
```javascript
//DIV 영역에 클릭 이벤트 설정
$("#div_").on("click",function(event){
    $("#console").append("<br>DIV 클릭");
});

//P 영역에 클릭 이벤트 설정
$("#p_").on("click",function(event){
    $("#console").append("<br>P 클릭");
});

//A 영역에 클릭 이벤트 설정
$("#a_").on("click",function(event){
    $("#console").append("<br>A 클릭");

    //jQuery 이벤트의 경우,
    //return false는 event.stopPropagation()과 event.preventDefault() 를
    //모두 수행한 것과 같은 결과를 보인다.
    return false;
});
```
