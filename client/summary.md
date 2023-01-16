##핵심 키워드 정리

+ 파일 복제해오는 방법
> npx degit simseonbeom/core-javascript/client/lib#03.calculator client/lib

+ 이렇게만 쓰면 리액트
> import { } from "./getNode";

+ .js 같이 쓰면 모듈
> import { } from "./getNode.js";

+ 간단 단축키 이해
>  ./ 현재폴더
> ../ 뒤로나가기(상위폴더로)

> componets, page, utils 폴더가 
> 나중에는 따로 분리하고 나뉨

+ 랜덤수 뽑아주는 기능
> export function getRandom(n) {
  Math.round(Math.random() * n)  
}

+ throw new TypeError
> if(typeof n !== 'number') throw new TypeError('getRandom 함수의 매개변수는 숫자 타입만이 가능합니다.')

+ shake
+ promise.then()