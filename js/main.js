$(document).ready(function(){
  //페이지 최상단 이동
  $(".btn_top").on("click",function(){
    $('html, body').scrollTop(0);
  });

  //반응형 슬라이더
  var mySwiper = new Swiper('.swiper-container', {
  // 슬라이드를 버튼으로 움직일 수 있습니다.
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

  // 현재 페이지를 나타내는 스크롤이 생깁니다. 클릭하면 이동합니다.
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

  //드레그 기능 true 사용가능 false 사용불가
    debugger: true,


      
  // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
    // autoplay: {
    //   delay: 3000,
    // },

  });

  //모달창
  const modal = document.querySelector(".modal");
  const img = document.querySelector(".img");
  const modal_img = document.querySelector(".modal_content");
  const span = document.querySelector(".close");

  // img.addEventListener('click', ()=>{
  //   modalDisplay("block");
  // });
  span.addEventListener('click', ()=>{
    modalDisplay("none");
  });
  modal.addEventListener('click', ()=>{
    modalDisplay("none");
  });
  function modalDisplay(text){
    modal.style.display = text;
  }
  //

  function scrollOn(){
    $("body").css("overflow","auto");
  }

  $(".img").on("click",function(){
    $("body").css("overflow","hidden");
    var c_img_url = $(this).attr('src')
    var arr_img_url = c_img_url.split(".");

    $(".modal").css("display","block");
    $(".modal_content").attr("src",arr_img_url[0]+"_all."+arr_img_url[1]);
  });

  //모달창 닫기
  $(".close").on("click",function(){
    $(".modal2").css("display","none");
    scrollOn();
  })

  $(".modal").on("click",function(){
    scrollOn();
  })


  //220903 배경식자 모달창
  $(".img2").on("click",function(){
    var c_img_url = $(this).attr('src')
    var arr_img_url = c_img_url.split(".");

    $("body").css("overflow","hidden");
    $(".modal2").fadeIn();
    $(".modal_content2").attr("src",arr_img_url[0]+"_all."+arr_img_url[1]);
  })

  $(".modal2").on("click",function(){
    $(this).css("display","none");
    console.log($(this));
    scrollOn();
  })


})

$(window).scroll(function () { 
  var offset_sec2 = $(".sec2").offset().top;
  var scrollValue = $(document).scrollTop(); 
  //console.log(scrollValue);

  if(scrollValue <= offset_sec2 ){
    $(".btn_top_area").fadeOut();
  }else{
    $(".btn_top_area").fadeIn();
  }
});