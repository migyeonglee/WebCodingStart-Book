$(document).ready(function () {
  // 게시글 입력 폼
  var meContent = $("#meContent");

  // 게시 버튼
  var mePostBth = $("#mePostBtn");
  console.log(mePostBth);
  // 게시 버튼 클릭 이벤트
  mePostBth.click(function () {
    if (meContent.val() == "") {
      Swal.fire({
        icon: "error",
        title: "내용을 입력하세요.",
      });
      meContent.focus();
      return false;
    }
  });
});
