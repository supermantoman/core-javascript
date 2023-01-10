//getAttr
function getAttr(node, prop){

  if(typeof node === 'string'){
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

getAttr('first','class') //first

//setAttr
const setAttr = function (node, prop, value) {
  //validation 유효성검사
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자의 타입은 string이어야 합니다.')

    
  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수 값입니다.')


  node.setAttribute(prop, value); //return은 필요없다. 함수를 통해 무언가 얻고자 하는 게 아니라 설정만.
}

//common

function attr(node,prop,value) {
  if(!value){
    return getAttribute(node,prop);
  } else{
    setAttribute(node, prop, value);
  }
}
