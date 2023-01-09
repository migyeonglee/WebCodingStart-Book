// signUpForm

$(document).ready(function () {
  // 페이지가 모두 로드되었을때 실행
  // 가입하기 버튼
  var signUpBth = $("#signUpBth");
  // 회원가입 from
  signUp = $("#signUp");
  // 로그인 from
  loginForm = $("#loginForm");
  // introSite
  introSite = $("#introSite");

  // 가입하기 버튼 클릭 이벤트
  signUpBth.click(function () {
    // 회원가입폼 보이기
    loginForm.slideUp();
    // 로그인폼 숨기기
    signUp.slideDown();
    // intro 문구 숨기기
    introSite.slideUp();
  });

  // 로그인하기 버튼
  var goToLoginBtn = $("#goToLoginBtn");

  // 로그인하기 버튼 클릭 이벤트
  goToLoginBtn.click(function () {
    // 로그인폼 보이기
    loginForm.slideDown();
    // 회원가입폼 숨기기
    signUp.slideUp();
    // intro 문구 보이기
    introSite.slideDown();
  });

  // 성별
  var gW = $("#gMW");
  var gM = $("#gMM");

  gW.click(function () {
    genderBgInit();
    $(this).css("background", "#64cbf9");
    $(this).css("color", "#fff");
  });

  gM.click(function () {
    genderBgInit();
    $(this).css("background", "#64cbf9");
    $(this).css("color", "#fff");
  });

  function genderBgInit() {
    gW.css("background", "#fff");
    gM.css("background", "#fff");
    gW.css("color", "#000");
    gM.css("color", "#000");
  }
  // 웹 브라우저 가로가 1200px 이상일 때 설정되어 있는것
  toGoToShort = false;
  $(window).resize(function () {
    if (window.innerWidth >= 1200) {
      loginForm.slideDown();
      signUp.slideDown();
      introSite.slideDown();
      toGoToShort = true;
    } else {
      if (toGoToShort == true) {
        signUp.slideUp();
      }
    }
  });
});
