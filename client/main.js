

import { 
  diceAnimation, 
  disableElement, 
  enableElement, 
  getNode,
  getNodes 
} from "./lib/index.js";


// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기 
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기 

// diceAnimation()

// 배열의 구조분해할당 !!! 이것이 바로!!

// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('buttonGroup > button:nth-child(3)');

// IIFE

const handlerRollingDice = (() => {

  let stopAnimation;
  let isRolling = false;

  return () => {

    if(!isRolling){
    stopAnimation = setInterval(diceAnimation,100)
    
    disableElement(recordButton);
    disableElement(resetButton);
    } else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
 }
})()

// handlerRollingDice()() ?????? 안에 클로저 실행 시 괄호 두번 즉 클로저는 return 이하 함수

rollingDiceButton.addEventListener('click',handlerRollingDice)

// let eventOff = bindEvent(rollingDiceButton,'click',handlerRollingDice);

const [rollingDiceButton, recordButton, resetButton] = getNode('.buttonGroup > button');


const recordlistWrapper = getNode('.recordListWrapper')

let count = 0;

function renderRecordListItem() {

  let template = /* html */
  <tr>
    <td>${++count}</td>
    <td>5</td>
    <td>5</td>
  </tr>

  insertLast('.recodListWrapper tbody', template)
  
}