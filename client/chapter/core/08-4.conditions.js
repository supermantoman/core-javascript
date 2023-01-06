// nullish 병합연산자 ??
// a가 null도 아니고 undefined도 아니면 a, 그 외 경우 b

/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

emailAddress ? receivedEmailAddress = 'user@company.io' : receivedEmailAddress = emailAddress;

receivedEmailAddress =
(emailAddress === undefined || emailAddress === null) ?
'user@company.io' : emailAddress

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io'
receivedEmailAddress = emailAddress || 'user@company.io'


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(true || WIDTH);
console.log(true ?? WIDTH);

console.log(false || WIDTH);
console.log(false ?? WIDTH); //false

console.log( '' || WIDTH);
console.log( '' ?? WIDTH);