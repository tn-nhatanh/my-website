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

const navbar = [
  {
    classList: "nav-home",
    title: "",
    link: "index.html",
    classLink: "link-home",
    icon: '<i class="fa-solid fa-house"></i>',
  },
  {
    classList: "Video",
    img: "",
    link: "",
    classLink: "logo-video",
  },
  {
    classList: "News",
    title: "Mới nhất",
    link: "new.html",
    classSpan: "text-nav",
  },
  {
    classList: "World",
    title: "Thế giới",
    link: "",
    classLink: "world-news",
    classSpan: "text-nav",
    classChildren: "list-world",
    Children: [
      { link: "copy.html", title: "Quân sự", classLink: "list-nav" },
      { link: "", title: "Phân tích - bình luận", classLink: "list-nav" },
      { link: "", title: "Thế giới đó đây", classItem: "list-nav" },
      { link: "", title: "Kiều bào", classLink: "list-nav" },
    ],
  },
  {
    classList: "Current Affairs",
    title: "Thời sự",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Chính trị", classItem: "list-nav" },
      {
        link: "",
        title: "Đưa nghị quyết của đảng vào cuộc sống",
        classItem: "list-nav",
      },
      { link: "", title: "Bầu cử đại biểu quốc hội", classItem: "list-nav" },
      { link: "", title: "Học tập Bác", classItem: "list-nav" },
      { link: "", title: "Môi trường", classItem: "list-nav" },
      { link: "", title: "Giao thông", classItem: "list-nav" },
      { link: "", title: "Nóng trên mạng", classItem: "list-nav" },
    ],
  },
  {
    classList: "Law",
    title: "Pháp luật",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Hồ sơ vụ án", classItem: "list-nav" },
      { link: "", title: "Pháp đình", classItem: "list-nav" },
    ],
  },
  {
    classList: "Health",
    title: "Sức khỏe",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Ung Thư", classItem: "list-nav" },
      { link: "", title: "Sống Khỏe", classItem: "list-nav" },
      { link: "", title: "Thận", classItem: "list-nav" },
      { link: "", title: "Tầm soát - chẩn đoán", classItem: "list-nav" },
      { link: "", title: "Sinh Sản", classItem: "list-nav" },
      { link: "", title: "Ngoại thần kinh", classItem: "list-nav" },
      {
        link: "",
        title: "Thuốc và các giải pháp hỗ trợ",
        classItem: "list-nav",
      },
      { link: "", title: "Chấm dứt cơn đau", classItem: "list-nav" },
      { link: "", title: "Tư vấn y khoa", classItem: "list-nav" },
    ],
  },
  {
    classList: "Lifestyle",
    title: "Đời sống",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Cộng đồng", classItem: "list-nav" },
      { link: "", title: "Thượng Lưu", classItem: "list-nav" },
      { link: "", title: "Nhà Đẹp", classItem: "list-nav" },
      { link: "", title: "Giới Trẻ", classItem: "list-nav" },
      { link: "", title: "Chợ ONLINE", classItem: "list-nav" },
      { link: "", title: "Xổ Số", classItem: "list-nav" },
      {
        link: "",
        title: "Cuộc Thi ảnh Việt Nam Trong Tôi",
        classItem: "list-nav",
      },
    ],
  },
  {
    classList: "Travel",
    title: "Du Lịch",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Tin Tức", classItem: "list-nav" },
      { link: "", title: "Khám Phá", classItem: "list-nav" },
      { link: "", title: "Món Ngon", classItem: "list-nav" },
      { link: "", title: "Biển Đẹp", classItem: "list-nav" },
      { link: "", title: "Video", classItem: "list-nav" },
      { link: "", title: "Tour Hay", classItem: "list-nav" },
    ],
  },
  {
    classList: "Business",
    title: "Kinh Doanh",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Tài Chính", classItem: "list-nav" },
      { link: "", title: "Chứng Khoán", classItem: "list-nav" },
      { link: "", title: "Doanh Nghiệp", classItem: "list-nav" },
      { link: "", title: "Khởi Nghiệp", classItem: "list-nav" },
      { link: "", title: "Tiêu Dùng", classItem: "list-nav" },
      { link: "", title: "Tin Bước Cùng Việt Nam", classItem: "list-nav" },
      { link: "", title: "Toàn Cảnh Kinh Tế Tư Nhân", classItem: "list-nav" },
    ],
  },
  {
    classList: "Real Estate",
    title: "Bất Động Sản",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Dự Án", classItem: "list-nav" },
      { link: "", title: "Thị Trường", classItem: "list-nav" },
      { link: "", title: "Nhà Đất", classItem: "list-nav" },
      { link: "", title: "Nhịp Sống Đô Thị", classItem: "list-nav" },
      { link: "", title: "Sống Xanh", classItem: "list-nav" },
      { link: "", title: "Nội Thất", classItem: "list-nav" },
    ],
  },
  {
    classList: "Sports",
    title: "THỂ THAO",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "BÓNG ĐÁ", classItem: "list-nav" },
      { link: "", title: "PICKLEBALL", classItem: "list-nav" },
      { link: "", title: "TENNIS", classItem: "list-nav" },
      { link: "", title: "GOLF", classItem: "list-nav" },
      { link: "", title: "VÕ THUẬT - CÁC MÔN KHÁC", classItem: "list-nav" },
      { link: "", title: "HẬU TRƯỜNG", classItem: "list-nav" },
      { link: "", title: "THỂ THAO SỨC BỀN", classItem: "list-nav" },
    ],
  },
  {
    classList: "Entertainment",
    title: "GIẢI TRÍ",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "HẬU TRƯỜNG", classItem: "list-nav" },
      { link: "", title: "SÁCH HAY", classItem: "list-nav" },
      { link: "", title: "ĐIỆN ẢNH", classItem: "list-nav" },
      { link: "", title: "ÂM NHẠC", classItem: "list-nav" },
      { link: "", title: "THỜI TRANG", classItem: "list-nav" },
      { link: "", title: "MỸ THUẬT - SÂN KHẤU", classItem: "list-nav" },
      { link: "", title: "TẾT 2026", classItem: "list-nav" },
    ],
  },
  {
    classList: "Education",
    title: "GIÁO DỤC",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "GÓC PHỤ HUYNH", classItem: "list-nav" },
      { link: "", title: "KHUYẾN HỌC", classItem: "list-nav" },
      { link: "", title: "GƯƠNG SÁNG", classItem: "list-nav" },
      { link: "", title: "GIÁO DỤC - NGHỀ NGHIỆP", classItem: "list-nav" },
      { link: "", title: "DU HỌC", classItem: "list-nav" },
      { link: "", title: "TUYỂN SINH", classItem: "list-nav" },
      {
        link: "",
        title: "CUỘC THI 50 NĂM THÀNH PHỐ TRONG TÔI",
        classItem: "list-nav",
      },
    ],
  },
  {
    classList: "Cars / Vehicles",
    title: "XE ++",
    link: "",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "THỊ TRƯỜNG XE", classItem: "list-nav" },
      { link: "", title: "CHỌN XE", classItem: "list-nav" },
      { link: "", title: "XE ĐIỆN", classItem: "list-nav" },
      { link: "", title: "CHĂM XE", classItem: "list-nav" },
      { link: "", title: "DIỄN ĐÀN XE", classItem: "list-nav" },
      { link: "", title: "THI LÝ THUYẾT BẰNG LÁI XE", classItem: "list-nav" },
    ],
  },
];

function renderNavbar() {
  ListHTML = "";
  for (let i = 0; i < navbar.length; i++) {
    miniList = "";
    if (navbar[i].Children && navbar[i].Children.length > 0) {
      for (let j = 0; j < navbar[i].Children.length; j++) {
        miniList += `<li class="list-nav"><a href="">${navbar[i].Children[j].title}</a></li>`;
      }
    } else {
      miniList = "";
    }
    if (i === 0) {
      ListHTML += `
      <li class="${navbar[i].classList}">
          <a href="${navbar[i].link}" class="${navbar[i].classLink}"
            >${navbar[i].icon}
          </a>
      </li>`;
    } else if (i === 1) {
      ListHTML += ` 
       <li class="${navbar[i].classList}">
          <a href="${navbar[i].link}" class="${navbar[i].classLink}"><img src="${navbar[i].img}" alt="" /></a>
        </li>`;
    } else {
      ListHTML += `
      <li class="${navbar[i].classList}">
          <a href="${navbar[i].link}" class=""><span class="${navbar[i].classSpan}">${navbar[i].title}</span></a>
          <ol>
          ${miniList}
          </ol>
        </li>`;
    }
    document.getElementById("ListNavbarID").innerHTML = ListHTML;
  }
}
renderNavbar();
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
const footer = [
  { logo: "image/logo-3png-1752569761698.webp", class: "logo" },
  { line: 1, text: "Cơ quan của Bộ Nội vụ" },
  { line: 2, text: "Tổng biên tập: Phạm Tuấn Anh" },
  {
    line: 3,
    text: "Giấy phép hoạt động báo điện tử Dân trí số 15/GP-BVHTTDL Hà Nội, ngày 14-4-2025",
  },
  {
    line: 4,
    text: "Địa chỉ tòa soạn: Số 48 ngõ 2 phố Giảng Võ, phường Giảng Võ, thành phố Hà Nội",
  },
  { line: 5, text: "Điện thoại: 024-3736-6491. Hotline HN: 0973-567-567" },
  {
    line: 6,
    text: "Văn phòng đại diện miền Nam: Số 51-53 Võ Văn Tần, phường Xuân Hòa, thành phố Hồ Chí Minh",
  },
  { line: 7, text: "Hotline TPHCM: 0974-567-567" },
  { line: 8, text: "Email: info@dantri.com.vn" },
];
function renderFooter() {
  let logo = "";
  let textInLine = "";
  let text = "";

  for (let i = 0; i < footer.length; i++) {
    if (i === 0) {
      logo = `
  <div class="${footer[i].class}">
    <img src="${footer[i].logo}" alt="" />
  </div>
      `;
    } else {
      // Sửa từ </br> thành <br>
      textInLine += footer[i].text + `<br>`;
    }
  }

  text = `<p class="text-infor">${textInLine}</p>`;
  document.getElementById("footerID").innerHTML = logo + text;
}

renderFooter();
