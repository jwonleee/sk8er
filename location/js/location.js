

/* 메인 이미지 슬라이딩 */
var arr = document.querySelectorAll(".sliding .sliding-img");
// console.log(arr);
var i = 0;
setInterval(function() {

    arr[i].classList.remove("active"); //기존의 active 지우기
    i++; //다음인데그

    if(i == arr.length) {
        i = 0; //인덱스 0으로 초기화
    }

    arr[i].classList.add("active");

}, 3000);


/* 지역 검색 */
var areaWrap = document.querySelector(".areaWrap");
// console.log(areaWrap); //배열

var areaImg = document.querySelectorAll("#areaImg .areaImg-wrap");

// var loActive = areaImg.querySelector(".img-wrap");
// console.log(areaImg);

areaWrap.onclick = function() {

    if(event.target.tagName != "INPUT") return; //인풋만 나옴
    console.log(event.target); //누른 인풋

    var click = document.querySelector(event.target.dataset.id);
    console.log(click); //누른 img location

    console.log(areaImg);
    for(var i = 0; i < areaImg.length; i++) {
        if(areaImg[i].classList.contains("loActive")) {
            areaImg[i].classList.remove("loActive");
        }
        if(areaImg.length > 7) i = 0;
    }
    
    click.classList.add("loActive");
}

/* 게시판 목록 */
function listCreate () {
    var boardList = opener.document.querySelector(".board-container");//부모 리스트
    var title = document.querySelector(".left-inner .title"); //자식
    var writer = document.querySelector(".left-inner .writer"); //자식
    
    console.log(title);
    console.log(writer);

    var a = document.createElement("a"); //a태그 생성
    a.href = "#"; //연결.. 아직 못 함
    a.classList.add("board-item");
    var titleH4 = document.createElement("h4");
    titleH4.classList.add("board-title");
    var writerH4 = document.createElement("h4");
    writerH4.classList.add("board-writer");

    titleH4.innerHTML = title.value;
    writerH4.innerHTML = writer.value;

    a.appendChild(titleH4);
    a.appendChild(writerH4);
    console.log(a); //a태그 잘 들어감
    console.log(boardList);

    boardList.appendChild(a);

    title.value = "";
    writer.value = "";

    window.close();
}


/* 사진파일 넣기 */
$(document).ready(function(){
    var fileTarget = $('.filebox .upload-hidden');
 
     fileTarget.on('change', function(){
         if(window.FileReader){
             // 파일명 추출
             var filename = $(this)[0].files[0].name;
         } 
 
         else {
             // Old IE 파일명 추출
             var filename = $(this).val().split('/').pop().split('\\').pop();
         };
 
         $(this).siblings('.upload-name').val(filename);
     });
 
     //preview image 
     var imgTarget = $('.preview-image .upload-hidden');
 
     imgTarget.on('change', function(){
         var parent = $(this).parent();
         parent.children('.upload-display').remove();
 
         if(window.FileReader){
             //image 파일만
             if (!$(this)[0].files[0].type.match(/image\//)) return;
             
             var reader = new FileReader();
             reader.onload = function(e){
                 var src = e.target.result;
                 parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
             }
             reader.readAsDataURL($(this)[0].files[0]);
         }
 
         else {
             $(this)[0].select();
             $(this)[0].blur();
             var imgSrc = document.selection.createRange().text;
             parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');
 
             var img = $(this).siblings('.upload-display').find('img');
             img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
         }
     });
 });


 /* 게시물 오픈 */
//  function boardOpen(tag) {
     
//      console.log(tag); //자기 자신 태그
//     //  var boardClick = document.querySelectorAll(".board-container .board-item"); //노드리스트
//      var boardClick = document.getElementsByClassName("board-item"); //html컬렉션

//     console.log(boardClick);

//     for(i = 0; i < boardClick.length; i++) {
//         if(tag == boardClick[i]) {
//             // console.log("이거 클릭함");
//             boardClick[i].classList.add("bactive");
//         }
//     }
//  }