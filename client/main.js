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
    return
  }

  clearContents(resultArea)
  insertLast(resultArea,pick)

}

submit.addEventListener('click', clickSubmitHandler)