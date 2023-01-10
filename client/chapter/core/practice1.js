//for.. in

// const todo = ['우유 구매', '업무 메일 확인', '치킨사기']

// for (const i in todo) { //반복변수 in 배열 또는 객체
//   console.log(`${i}번째 할 일: ${todo[i]}`);
// }


// // for.. of
// const todo = ['우유 구매', '업무 메일 확인', '치킨사기']

// for (const todo of todo){
//   console.log(`오늘 할일: ${todo}`);
// }


// let todo = ['우유 구매', '업무 메일 확인', '치킨사기']

// // for(let i = 0; i < todo.length; i++){
// //   console.log(`${i}번째 할 일 : ${todo[i]}`);
// // }

// let index = todo.indexOf('업무 메일 확인');

// console.log(todo.splice(index, 1));

// console.log(todo);

// console.log(todo.indexOf('업무 메일 확인'));


// //무엇을 효과적으로 알려줄까?

let ask = prompt('윤년여부를 확인하고 싶은 년도를 기록해보세요.', '');

function isLeapYear(n) {
  if (n%4 === 0) {
    return true
  } else if (n%100 !== 0){
    return false
  } else if (n%400 === 0){
    return true
  } else if (n !== Number || n.length !== 4) {
    return console.log('정확한 값이 아닙니다.'); 
  }
}

console.log(isLeapYear(1909));