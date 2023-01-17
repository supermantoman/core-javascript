import { typeError } from '../typeError.js';
import { isElement } from "../utils/typeOf.js";

export function disableElement(node) {
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('disableElement의 함수의 인자는 DOM 요소의 노드이어야 합니다.')
  }

  node.disabled = true;  
}

// ELEMENT_NODE === 1로도 바꿀 수 있다~
export function enableElement(node) {
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('disableElement의 함수의 인자는 DOM 요소의 노드이어야 합니다.')
  }

  node.disabled = false;  
}