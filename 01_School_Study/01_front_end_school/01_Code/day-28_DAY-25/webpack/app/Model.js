// 외부에 공개되지 앟ㄴ는 비공개 데이터
// let db = new WeakMap();

// 모듈 정의


// 파일 자체가 독립된 공간을 형성ls
// class Model {
//   constructor(db=[]){
//     db.set(this, db);
//   }
//   static register(){
//     return new Model(db);
//   }
//   read(){return db.get(this);}
//   write(value){db.set(this, value);}
//   delete(){}
//   }
//
// export default Model;

export default function heysay(){
  return 'heysay:'
}
