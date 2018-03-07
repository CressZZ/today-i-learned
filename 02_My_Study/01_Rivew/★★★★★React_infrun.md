# React 인프런

## react-addons-update (immutability helper)
- 배열의 수정을 쉽게 도와주는 플러그인~?

```javascript
import update from react-addons-update

this.setState({
  // push 명령
  list: update( this.state.list, {$push:[newObj, newObj2]})

  // splice 배열을 정의 하는 배열.
  list: update( this.state.list, {$splice:[[index, 1], [index2, 3]]})

  // 원소수정
  list: update( this.state.list, {[index]: {field:{$set: "value"}, field2:{$set:"value2"}}})

});
```

## spread operator
- babel-preset-stage-0

## setState 할 때.....
### 1. 바꿀 데이터가 하나일때
```javascript
handleChange(e){
  this.setState({
    keyword: e.target.value
  });
}
```
### 2. 바꿀 데이터가 두개 이상일때
```javascript
handleChange(e){
    let nextState = {};

    // nextState.name = e.target.value
    // nextState.phone = e.target.value
    nextState[e.target.name] = e.target.value;
    this.setState(nextState)

    this.setState({
      e.target.name: e.target.value
    })
}


render(){
  return{
    <div>
      <input type="text" name="name" placeholder="name" value={this.state.name}
      />
      <input type="text" name="phone" placeholder="name" value={this.state.phone}
      />
    </div>
  }
}
```

## lifeCycleHook
1. componentWillMount
2. componentDidMount
2. componentWillReceiveProps
2. shouldComponentUpdate
2. componentWillUpdate
2. componentDidUpdate
2. componentWillUnmount
