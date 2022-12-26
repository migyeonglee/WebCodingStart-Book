$(document).ready(function(){
    var loginSubmit = $('#loginSubmit');
    var loginEmail = $('#loginEmail');
    var loginPw = $('#loginPw');
    
    loginSubmit.click(function(){
    
    // 이메일 유효성 검사식
    var regEmailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!regEmailPattern.test(loginEmail.val())){
        Swal.fire({
            icon: 'error',
            title: 'Email이 아닙니다.',
            text: '입력한 Email의 주소가 올바르지 않습니다.'        
          });
          return false;
        }
        if(loginPw.val().length<8){
        Swal.fire({
            icon: 'error',
            title: '잘못 입력하셨습니다.',
            text: '비밀번호를 입력하지 않았거나 8글자 이하입니다.'        
          });
          return false;
    }
    });
    console.log("?")
    // 회원가입 입력 정보 필터링
    var signUpSubmit = $('#signUpSubmit');
    var userName = $('#userName');
    var userEmail = $('#userEmail');
    var userPw = $('#userPw');
    var birthYear = $('#birthYear');
    var birthMonth = $('#birthMonth');
    var birthDay = $('#birthDay');
    
    // 필터링 시 값 오류일 때 무엇이 오류인지 보여주는 BOX
    var valueError = $('#valueError');
       function timeOutCall(){
        // setTimeout : 어떤 기능의 시간을 지연시킬 때 사용하는 내장함수
        setTimeout(function(){
            $('#valueError').text('');
        },2000);
    }
    signUpSubmit.click(function(){
        // 이름 공백 확인
        if(userName.val()==''){
            //오류 메시지
            valueError.text('이름을 입력하세요.');
            userName.focus();
            // 오류메시지 2초후 사라짐
            timeOutCall();
            return false;
        }
        // 공백이 아닐 시 해당값이 유효한지 확인
        var regNamePattern = /^[가-힣a-zA-Z]+$/;
        if(regNamePattern.test(userName.val())){
            // console
            console.log('the value of userName is good');
        }else{
            valueError.text('정확한 이름을 입력하세요.');
            userName.focus();
            timeOutCall();
            return false;
        }
        // 이메일 유효성 확인
        var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;
        if(regEmailPattern.test(userEmail.val())){
            console.log('exp email good');
        }else{
            valueError.text("정확한 이메일 주소를 입력하세요.");
            userEmail.focus();
            timeOutCall();
            return false;
        }
        // 같은 이메일 주소를 사용하는 사용자가 DB에 있는지 확인

        // 비밀번호가 8자 이상인지 확인
        if(userPw.val().length >=8){
            console.log('the value of password is good');
        }else{
            valueError.text('비밀번호를 8자 이상 입력하세요.');
            userPw.focus();
            timeOutCall();
            return false;
        }

        // 생년 값 확인
        if(birthYear.val()==""){
            valueError.text('생년을 입력하세요.');
            birthYear.focus();
            timeOutCall();
            return false;
        }
        // 생월 값 확인
        if(birthMonth.val()==""){
            valueError.text('생월을 입력하세요.');
            birthMonth.focus();
            timeOutCall();
            return false;
        }
        // 생일 값 확인
        if(birthDay.val()==""){
            valueError.text('생일을 입력하세요.');
            birthDay.focus();
            timeOutCall();
            return false;
        }

        // 생별 체크 확인
        if($(":input:radio[name=gender]:checked").val()=='m'||$(":input:radio[name=gender]:checked").val()=='w'){
            console.log('gender val good');
        }else{
            valueError.text('성별을 선택해주세요.');
            timeOutCall();
            return false;
        }
        // true 제출
        return true;
    });

 
    });