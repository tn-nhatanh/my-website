function newDate() {
  const d = new Date();
  const weekday = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const day = weekday[d.getDay()];
  document.getElementById("day-header").innerHTML =
    day + ", " + date + "/" + (month + 1) + "/" + year;
}

newDate();

function slider() {
  const slide = document.querySelector(".slide");

  document.getElementById("next").onclick = () => {
    slide.scrollLeft += 450;
  };

  document.getElementById("prev").onclick = () => {
    slide.scrollLeft -= 450;
  };
}

slider();

function ClickLogIn() {
  const link = document.getElementById("linkbuttonlogin");

  link.addEventListener("click", function (event) {
    const result = confirm("Bạn có muốn chuyển sang trang đăng nhập không?");

    if (!result) {
      event.preventDefault(); //hủy chuyển trang
    }
  });
}
ClickLogIn();

function languageText() {
  const btnEnglish = document.getElementById("tiengAnh");
  const btnVietNamese = document.getElementById("tiengViet");
  btnEnglish.addEventListener("click", function () {
    document.getElementById("btnTextLanguage").innerText = "Tiếng Anh";
  });
  btnVietNamese.addEventListener("click", function () {
    document.getElementById("btnTextLanguage").innerText = "Tiếng Việt";
  });
}
languageText();
