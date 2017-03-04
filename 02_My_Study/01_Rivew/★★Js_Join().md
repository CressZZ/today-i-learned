# .join() method
- The join() method joins the elements of an array into a string, and returns the string. The elements will be separated by a specified separator. The default separator is comma (,).
- join()메서드는 배열 안에 있는 요소들을 합쳐준다. 그리고 합쳐진 문자열을 리턴한다. join할때 주어진 문자등으로 각 요소를 구별한다. (예를 들면 and 나 쉽표,같은거) 디폴트 값은 쉽표 `,`  이다.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(" and ");

```
`Banana and Orange and Apple and Mango`
