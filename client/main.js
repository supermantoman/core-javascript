/* gsap global */

import { getInputValue, getNode } from './lib/dom/index.js';

import { jujeobData } from "./data/data.js";
import { getRandom } from './lib/math/getRandom.js';


const submit = getNode('#submit');

console.log(submit);

console.log(getRandom(5));


function clickSubmitHandler(e){
  
  e.preventDefault(); //기본값을 차단!

  let name = getInputValue('#nameFiled');

  let list = jujeobData()
  let pick = list[getRandom(list.length-1)];
  
  if(!name){
    console.log('이름을 입력해주세요');
    // 메서드.타겟.듀레이션,from값,to값까지,20번반복의 뜻
    gsap.fromTo(resultArea, 0.01 {x:-5}, {x:5, clearProps:"x", repeat:20})
    return;
  }

  clearContents(resultArea)
  insertLast(resultArea,pick)

}

function clickCopyHandler() {
  let text = resultArea.textContent;
  navigator.clipboard.writeText('text') //그대로받아서 복사해주는 메서드  
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사가 완료되었습니다.', 2000)
  })
}

submit.addEventListener('click', clickSubmitHandler)

resultArea.addEventListener('click', clickCopyHandler)