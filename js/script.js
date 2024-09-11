// $(function () {
//   // modal
//   $("video-list").click(function (e) {
//     e.preventDefault();
//     $("#modal").addClass("active");
//   });
//   $(".modal-btn").click(function () {
//     $("#modal").removeClass("active");
//   });
// });

// 모달 열기
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// 모달 닫기
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
