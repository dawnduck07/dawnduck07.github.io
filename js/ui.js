// 메뉴에서 해당 요소만 활성화 시키기
$(document).ready(function(){
// 333333
  $("#container").addClass("start");
  // start 클래스 실행(홈 화면 컨텐츠 슬라이드 동작)

  $("nav li").click(function(){
    $("#container").css("max-width", "100%");
    // alert("click event"); // 메뉴 작동 확인
    var id = $(this).attr("data-rol"); // 해당 속성의 변수 지정
    $("nav li").removeClass("on");
    $(this).addClass("on");
    // alert($(this).attr("data-rol")); // 속성값 확인
    $(".content").removeClass("prev this next");
    // 클릭 시 가지고 있던 클래스를 모두 지운다.
    $("#" + id).addClass("this").prevAll().addClass("prev");
    // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev 클래스를 지정한다.
    $("#" + id).nextAll().addClass("next");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.
  });

  // 로고 클릭시 메인 페이지로 돌리기.
  $(".logo_box").click(function(){
    // 1.로고를 클릭한다.
    $("nav li").removeClass("on");
    // <li class = "on">의 클래스를 동적으로 지운다.
    $(".content").removeClass("prev this next");
    // 2. <section class="content">의 클래스를 모두 지운다.
    $("#container").css("max-width", "1200px");
    // 3. #container의 max-width를 1200px로 지정한다.
  });

  // 444444
  // 롤링 배너에 스크립트 적용하기
  $(".roll_left").click(function(){
    $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    // 첫 번째 <li> 태그 선택, 가상 클래스 선택자를 이용해 이동될 위치를 지정
  });
  $(".roll_right").click(function(){
    $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    // 마지막 태그가 이동되도록 eq 메서드의 값을 -1로 지정, 마지막 요소가 첫 번째 요소 앞에 삽입되도록 이동 위치 조정
  });

  // Ajax --> 도서상세목록 스크립트 작성
  $(".book_roll li").click(function(){
    var _this = $(this);
    // 선택된 태그($(this))를 변수로 만든다.
    var liurl = _this.data("url");
    // 클릭할 때마다 해당 rul을 가져와 변수에 담는다.
    $(".notebook").html();
    // 해당 영역(".notebook")의 html을 지워준다.
    $.ajax({
      type : 'post', // HTTP 요청 방식
      url : liurl, // 해당 url
      dataType : 'html', // data 타입
      success : function(data) { // HTTP 요청 성공 후 데이터 전송
        $(".notebook").html(data);
      }
    });
  });

  // 아코디언 기능 구현
  $(".accordio_box ol li").click(function(){
    $(".accordio_box ol li").removeClass("on");
    $(this).addClass("on");
  });

  $(".close").click(function(){
    $(".thankyou_message").css("display", "none");
  });

});

