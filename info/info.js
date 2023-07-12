
/* top 사진 인터벌 */
/* var arr = document.querySelectorAll(".slide_wrap > .slideImg");

var i = 0;
setInterval(function(){
    arr[i].classList.remove("active"); //active삭제
    i++;
    if(i == arr.length) i=0; 
    arr[i].classList.add("active"); //active추가

}, 5000); */

/* var arr = document.querySelectorAll(".slide_wrap > .slideImg"); //배열

var i = 0;
setInterval(function(){
    arr[i].classList.remove("active"); //기본active삭제
    i++;
    if(i == arr.length) i = 0;
    arr[i].classList.add("active"); //다음 active추가
}, 5000);
 */

/* 보드소개 사진 전환 */
var InfoArr = document.querySelectorAll(".info_overflow");
// console.log(InfoArr);

var btn = document.querySelector(".btn");
btn.onclick = function(){
    var num = 0;
    for(var i=0; i<InfoArr.length; i++){
        if(InfoArr[i].classList.contains("InfoActive")){
            InfoArr[i].classList.remove("InfoActive");
            num = i;
            num++;
            console.log();
        } 
    }
    
    if(num > 3){
        num = 0;
    }
    InfoArr[num].classList.add("InfoActive");    


}

    /* swiper */
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        observer: true,	// 추가
        observeParents: true,	// 추가
      });


