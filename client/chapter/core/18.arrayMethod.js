/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// const { sort } = require('canvas-sketch-util/lib/optimize-penplot-paths');
const arr = [10, 100, 1000, 10000]

// Array.isArray


// function isArray(data){
//   return Object.prototype.toString.call([]).slice(8,-1).toLowerCase() === 'array'
// }

// function isNull(data){
//   return Object.prototype.toString.call([]).slice(8,-1).toLowerCase() === 'null'
// }

// console.log(Array.isArray([]));

// /* 요소 순환 -------------------------------------------------------------- */

// // forEach

// // $.each((index,item) => {

// // })
// const user = {}

// arr.forEach(function(item,index) {
//     this[index] = item
// },user)

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse : 뒤집기

// arr.reverse()
// console.log(arr);

// splice
//부터, 제거요소, 23,5 추가해죠~
// arr.splice(1,0,23,5)
// console.log(arr);


// // sort
// arr.sort(()=>{})
// console.log(arr);

// arr.sort((a,b)=>{
//   return a - b
// })

// 어색-1회담금-2회담금-3회담금-응용...

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map : 변형해서 아예 새배열까지 만들어줌

// let todo = ['밥', '미용실', '코딩공부'];

// arr.map((item) =>{console.log(item);
// })

/* 요소 포함 여부 확인 ------------------------------------------------------ */


// indexOf

console.log(arr.indexOf(10));

// lastIndexOf
// includes
console.log(arr.includes(99));
console.log(arr.includes(100));
console.log(arr.includes(1000));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

// find
// 대상하나만 찾음.

const find = users.find((item,index)=>{
        return item.id === 3
      })

console.log(find);

const find2 = users.find((item,index)=>{
  return item.id < 5
})

console.log(find);

// findIndex : 아이템 자릿수만 가져오고싶을때ㅎ 외우진마~
const findIndex = users.findIndex((item) => {
  return item.id === 3
})

console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number)=>{
  return number > 100
})

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];



// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join