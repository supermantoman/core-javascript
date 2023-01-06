/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// for문 while문 왔다갔다 작성해보기 연습!

// for(let i=0; i < 10; i++){
//   console.log(i);

// }

for(let i = 1 ; i <= 10; i++){
  if(i%2){
  continue;
  }
  console.log(i);
}


// let j = 0;
// for(; j < 10; j++){
//   // console.log(j);

// }

// console.log(j);


// let j = 0;
// for(; j < 10;){
//   // console.log(j);
//   j++
// }

// console.log(j);

// 위의 for문과 같은 switch문

// let i = 0
// while(i < 10) {
//   i++
// }


// 2 ~ 10까지의 짝수 출력하기



const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

// let i = 0;
// let l = frontEndDev.length;

// while(i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

for (let i = 0; i < frontEndDev.length; i++) {
  if (frontEndDev[i].includes("SVG") || frontEndDev[i].includes("jQuery")) continue;
  console.log(frontEndDev[i]);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)