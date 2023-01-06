/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
// /* ---------------------------------------------------------------------- */


// /* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// // 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
// console.log(null);

// // 2. 값이 할당되지 않은 상태
// console.log(typeof undefined);

// // 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
// let message1 = "hello"
// let message2 = 'hello'
// let nickName = 'supermantoman';
// let message3 = `내 이름은 ${'사사사슈' / 3} 이야.`;

// console.log(message3);


// // 4. 정수, 부동 소수점 숫자(길이 제약)
// let number = 100.123

// console.log('number : ', typeof number)

// // 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// // console.log(12913n + 123n);
// // BigInt에는 숫자를 더할 수 없다.
// console.log(typeof 12313n);

// // 6. 참(true, yes) 또는 거짓(false, no)
// console.log(typeof true);

// // 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// console.log(typeof {});

// // 8. 고유한 식별자(unique identifier)
// console.log(typeof Symbol('uid'));

// console.log(typeof Math);

// const fuc = function () {

// }

// console.log(fuc);

// /* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// // 1) 연산자 typeof
// // 2) 함수 typeof()

// // 언어 상, 오류




// // Object
// // 오브젝트는 키와 밸류의 집합이다.
// // const user = new Object()

// // 객체 리터럴 방식
// // 리터럴은 모두 값이다!

// const user = {
//   // 프로퍼티
//   name: 'supermantoman', 
//   age: 32,
// }

// // Array
// // let list = new Array() 
// // collection
// // 키와 밸류가 없다.
// // 저절로 Indexing이 된다.
// let list = [10,100,1000,1,2,3] // 배열 리터럴 방식


// // function 
// 함수 : 상자 함, 셈 수
// 상자안에 여러개의 숫자를 집어넣을 수 있도록 하는 것.
// 들어오고 가공되고 나가는 게 있다. 입력해준다고 바로 실행하는 게 아니다. 실행버튼도 입력해줘야 한다.
// 직접 내보내고 싶다면 퉤! 해줘야 함 return. 내보낼지말지도 내가 선택해서 입력해줘야 한다.
// 함수는 재사용을 위해서 사용한다! 그렇다면 재료가 필요! 전달하는 값이 필요한데, 그게 바로 인자이다. sum안에 있는 값인 그 예, argument 라고 한다.
// parameter 매개변수는 a,b. 값 구멍으로 감.

// 함수는 객체안에도 설정이 가능하다. 객체 안에 있는 함수는 메소드라고 한다.

// 객체 안에 프로퍼티가 있고, 객체안에 있는 함수를 메서드라고 한다. 둘다 설정가능하다.

function sum(a,b) {
// let a = 44
// let b = 35
// 44 + 35 = 79
  return a + b

}

console.log( sum(44,35)); //밖에다 내보내고 싶으면 직접찍어줘야 함.
console.log( sum(33,22));

const user = {
  name: 'tiger', //프로퍼티
  age: 27, //프로퍼티
  fish: function (){
    return '뻐끔뻐끔'
  }, // 객체 안에 함수는 메소드라 부른다.
  alert: (aa)=>{
    return aa
  }

}

console.log(user.fish);


// this


// JSON = Javascript Object Notation의 준말. 데이터 구조를 나타낼때 필요하기 위해 만들어졌다.

