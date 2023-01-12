// const first = getNode('.first');

function addClass (node, className){
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(typeof className !== 'string'){
    typeError('addClass 함수의 두번째 인자는 문자타입이어야 합니다.')
  }
  node.classList.add('className');
}

// removeClass
function removeClass (node, className){
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(!className){ //모든 클래스 날리고 싶을 때
    node.className = ''
    return; //함수 종료
  }

  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두번째 인자는 문자타입이어야 합니다.')
  }
  node.classList.remove('className');
}

// toggle
function toggleClass(node, className){
  if(typeof node === 'string') node= getNode(node);
  if(typeof className !== 'string'){
    typeError('toggleCalss 함수의 두번째 인자는 문자타입이어야 합니다.')
  }
  node.classList.toggle(className);
}


// toggleClass('.first','is-active')


// get
// [] 각괄호 표기법 = value 가져오기위해 필수
function getCss(node, prop){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  return getComputedStyle(node)[prop]
}

// set
function setCss(node, prop, value) {
  if(typeof node === 'string') node = getNode(node);

  if(!value){
    syntaxError('setCSS 함수의 세 번째 인자는 필수값입니다.')
  }

  node.style[prop] = value;
}

//get,set
const css = (node, prop, value) => !value ? getCss(node,prop) : setCss(node, prop, value);

// getCss('.first', 'font-size')
// getCss('.first', 'color', 'red')

