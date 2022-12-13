const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const colorList = document.querySelector(".color-list");
const pageNumber = document.querySelectorAll(".pageNumber");
const active = document.querySelector(".active");
const list1 = document.querySelector(".list1");
const list6 = document.querySelector(".list6");
const card = document.querySelectorAll(".container");

let currAngle = 0;

function prev() {
  currAngle -= 60;
  colorList.style = `transform: rotateZ(${currAngle}deg);`;
  if (list1.classList.contains("active")) {
    list1.classList.remove("active");
    list6.classList.add("active");
    console.log(list6.classList);
  }
}

function next() {
  currAngle += 60;
  colorList.style = `transform: rotateZ(${currAngle}deg);`;
  if (list6.classList.contains("active")) {
    list6.classList.remove("active");
    list1.classList.add("active");
  }
}

pageNumber.forEach((el) => {
  el.onclick = (e) => {
    let pageNum = e.target.innerText;
    colorList.style = `transform: rotateZ(${(pageNum - 1) * 60}deg);`;
    for (let i = 0; i < 7; i++) {
      pageNumber[i].classList.remove("active");
    }
    pageNumber[pageNum].classList.add("active");
  };
});

card.forEach(el=>{
  el.onclick = (e)=>{
    var color = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    color = "힝! 속았지";
    textarea.value = color;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("컬러가 복사되었습니다 어딘가에 붙여보세요!!");
  }
})

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

///////// 페이지 넘버 넘기기
$(document).ready(function () {
  $(".next").click(function () {
    $(".pagination").find(".pageNumber.active").next().addClass("active");
    $(".pagination").find(".pageNumber.active").prev().removeClass("active");
  });

  $(".prev").click(function () {
    $(".pagination").find(".pageNumber.active").prev().addClass("active");
    $(".pagination").find(".pageNumber.active").next().removeClass("active");
  });
});
