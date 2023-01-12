/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('visual');
const news = getNode('.news');
const desc = getNode('.desc');

// news.addEventListener('click',function(){
//   console.log('%c news', 'background:orange');
// })

// desc.addEventListener('click',function(e){
//   e.stopPropagation() //전파 뭠춰~
//   console.log('%c desc', 'background:hotpink');
// })

visual.addEventListener("click", function (e) {
  let elem = e.currentTarget;
  // console.log("target : ", e.target);
  // console.log("currentTarget : ", e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this);
  console.log("%c visual", "background:dodgerblue");
  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", () => {
  css(".pop", "display", "none");
});
/* 캡처링 ----------------------------------------------------------------- */