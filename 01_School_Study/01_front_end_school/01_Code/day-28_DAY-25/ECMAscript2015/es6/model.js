// Model.js
// Model.es6

// Class Model
// Instance
// - CRUD
// - get()
// - post()
// - put()
// - delete()

// Private
// dataList 공개하지 않음
class Employee {
  construnctor(name){
    this._name = name;
  }
  get name(){
    if(this._name){
      return this._name.toUpperCase() + '양';
    } else {
      return undefined;
    };
  };
  set name(newName){
    if (newName == this.name){
      console.log("이미 같은 이름을 쓰고 있습니다.");
    }else if (newName){
      this._new = newName;
    } else {
      return false;
    }
  }
}

var emp = new Employee('솔지');

if (emp.name){
  console.log(emp.name); //솔지양
}
