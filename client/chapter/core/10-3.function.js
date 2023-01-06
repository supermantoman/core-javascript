/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


let arr = [1,2,3,4];

const calculateTotal = (...args) => {

  console.log(args);

  return;
}


// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const calculateTotal = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;

// let calculateTotal 

// const calcuateTotal = (... args) => {

//   return;
// }

// 화살표함수는 Arguments가 없다.

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// // 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = (a,b,c,d) => {
//   return a+b+c+d
// }; // ==
// let calcAllMoney = (a,b,c,d) => a+b+c+d;

// 화살표 함수와 this
// 일반함수는 나를 호출한 자를 함수로 받고
// 화살표함수는 내위에 부모를 걍 찾음. 그래서 전역 window를 찾음. 의도와 다르게.
// 객체 안에서 메소드를 쓸 때는 화살표함수는 고로 안좋다. 일반함수가 좋다. 
// this는 객체를 찾는 것 what is 'this'? 디스를 찾는게 중요.

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아

function normalFunction(){
  console.log('일반함수 : ' ,this);

  const arrowFunction = () => {
    console.log('화살표함수 : ' ,this);
  }
}

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 