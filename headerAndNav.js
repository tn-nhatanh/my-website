function header() {
  const head = `<div class="header-top">
        <div class="items-center">
          <div class="logo">
            <img src="./image/logo-3png-1752569761698.webp" alt="" />
          </div>
          <div
            class="weather-placeholder"
            data-module="weather-header"
            data-date_time_today="Thứ 3, 06/10/2026"
          >
            <a href="" target="_blank"
              ><div class="day-Hanoi">
                <span class="Hanoi">Hà Nội</span>
                <span class="Day" id="day-header"></span>
              </div>
              <span>24 C</span>
            </a>
          </div>
        </div>
        <div class="dt-flex">
          <a href="">Fica</a>
          <a href="">DTiNews</a>
          <a href="">Nội vụ & Xã hội</a>
        </div>
        <div class="language">
          <span id="btnTextLanguage">Ngôn ngữ</span>
          <ul>
            <li class="language-list" id="tiengViet">Tiếng Việt</li>
            <li class="language-list" id="tiengAnh">Tiếng Anh</li>
          </ul>
        </div>
        <div class="login">
          <i class="fa-regular fa-user"></i>
          <div class="button-login">
            <a href="LogIn.html" id="linkbuttonlogin"
              ><button
                type="button"
              >
                Đăng nhập
              </button></a
            >
          </div>
        </div>
      </div>`;
  document.getElementById("headerID").innerHTML = head;
}
header();
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
