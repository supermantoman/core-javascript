/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement


/* 노드 정보 ------------------------------------------------------------- */

let first = getNode('.first');

// - nodeType
// - nodeName (vs. tagName)
console.log(first.nodeType ===  document.ELEMENT_NODE);
console.log(first.nodeTye === 1);

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */
console.log(first.nodeName === 'SPAN'); //SPAN 비교
console.log(first.tagName !== 'SPAN'); //SPAN 비교

// - innerHTML
// * 기존 내용 삭제
// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML = 'hi';
first.innerHTML += 'hi'; //기존값추가
first.innerHTML = '<strong>hhii</strong>'; //태그도 추가가능
first.innerHTML = ''; //비우기

// - textContent
// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출

console.log(first.textContent); //getter
first.textContent = '멋사' // setter

/* hidden -------------------------------------------------------------- */

first.hidden = true;

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일