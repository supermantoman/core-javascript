/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// // number -> '2022'
// const bbb = 20212;

// let bzb = String(bbb);
// console.log(String(bzb));
// console.log(typeof(bbb));

// undefined, null -> 'undefined'
// console.log(String(undefined));

let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));


// /* 데이터 → 숫자 ----------------------------------------------------------- */

// // Number()

// // undefined -> NaN
// console.log(Number(undefined));

// // null -> 0
// let money = null;
// console.log(Number(money));

// // boolean -> true : 1 / false : 0
// //  * / + 는 모두 숫자로 바뀐다. 중요! 실무에서 코드보면 당황노노 이해하기
// let cutie = false;
// console.log(cutie * 1);
// console.log(cutie / 1);
// console.log(+cutie);

// // string 녹음 14분대 다시 듣기
// let num = '123'
// console.log(num * 1);

// // numeric string
// // parseInt 정수, parseFloat 부동소숫점
// // 프엔은 보통 10진수 많이 사용한다. 진수는 꼭 명시해주자.
// let width = '320px';
// console.log(parseFloat(width, 10));

// /* 데이터 → 불리언 ---------------------------------------------------------- */

// // null, undefined, 0, NaN, '' -> 모두 false
// // 위에 나열한 것 이외의 것들
// // ' ' 공백 있으면 true 나옴 !

console.log(Boolean(null));

console.log(!!null);
console.log(!null);


