// signUpForm

$(document).ready(function(){
    // 페이지가 모두 로드되었을때 실행

    // 가입하기 버튼
    var signUpBth = $('#signUpBth');
    // 회원가입 from
    signUp = $('#signUp');
    // 로그인 from
    // loginForm = $('#loginForm');
    // introSite
    introSite = ('#loginForm');

    // 가입하기 버튼 클릭 이벤트
    signUpBth.click(function(){
        // 로그인폼 숨기기
        // loginForm.slideUp();
        // 회원가입폼 보이기
        signUp.slideDown();
        // intro 문구 숨기기
        // introSite.slideUp();
    });

});