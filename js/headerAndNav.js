const isInsidePages = window.location.pathname.includes("/pages/");

let prefix = "";
let loginPath = "pages/LogIn.html";
if (isInsidePages) {
  prefix = "../";
  loginPath = "LogIn.html";
} else {
  prefix = "";
  loginPath = "pages/LogIn.html";
}
const languageStorageKey = "site-language";
const translations = {
  "Ngôn ngữ": "Language",
  "Hà Nội": "Ha Noi",
  "Điều hòa, tivi cũ đâu, sao năm nào phụ huynh cũng phải góp tiền mua?": "The air conditioners and TVs are old, so why must parents contribute to replace them every year?",
  "Phụ huynh băn khoăn việc góp tiền mua điều hòa, tivi và các thiết bị khác cho lớp học có phải là trách nhiệm của họ, nhất là khi năm đầu cấp nào cũng đóng góp, dù thiết bị cũ vẫn còn.": "Parents question whether they should have to pay for air conditioners, TVs and other classroom equipment, especially when contributions are requested at the start of every school level even though the old equipment still works.",
  "Houthi tấn công sân bay Ả rập Xê út làm 12 người chết, 309 người bị thương": "Houthi attack on Saudi airport kills 12 and injures 309",
  "Cuộc tấn công của lực lượng Houthi vào sân bay ở thủ đô Riyadh, Ả rập Xê út, khiến hàng trăm người thương vong, trong đó có cả công dân nước ngoài.": "A Houthi attack on an airport in Saudi Arabia's capital, Riyadh, left hundreds of people dead or injured, including foreign nationals.",
  "Người đàn ông ở TPHCM nghi nhiễm độc tố thần kinh cực mạnh sau ăn \"con sam\"": "Ho Chi Minh City man suspected of severe neurotoxin poisoning after eating horseshoe crab",
  "Sau khi ăn hải sản, trong đó có “con sam”, một người đàn ông 34 tuổi ở TPHCM xuất hiện tê môi, tê lưỡi, tê đầu chi và nôn ói, nghi ngờ ngộ độc tetrodotoxin.": "A 34-year-old man in Ho Chi Minh City developed numbness in his lips, tongue and extremities, as well as vomiting, after eating seafood including a horseshoe crab. He is suspected of tetrodotoxin poisoning.",
  "Vinicius bị đuổi vì giật tóc đối thủ, HLV Mourinho bỏ họp báo": "Vinicius sent off for pulling opponent's hair; Mourinho skips press conference",
  "Tiền đạo Vinicius bị hủy bàn thắng và nhận thẻ đỏ vì giật tóc đối thủ trong trận đấu với Villarreal. Sau trận đấu, HLV Mourinho đã bỏ họp báo.": "Forward Vinicius had a goal disallowed and was sent off for pulling an opponent's hair against Villarreal. After the match, coach Mourinho skipped the press conference.",
  "Ngân hàng đấu giá xe Rolls-Royce gần 11 tỷ đồng của đại gia xăng dầu": "Bank auctions oil tycoon's Rolls-Royce for nearly VND 11 billion",
  "Chiếc Rolls-Royce thuộc sở hữu của Xuyên Việt Oil được ngân hàng VietinBank đưa ra tìm đơn vị đấu giá với giá khởi điểm gần 11 tỷ đồng.": "VietinBank is seeking an auction firm for a Rolls-Royce owned by Xuyen Viet Oil, with a starting price of nearly VND 11 billion.",
  "Cuộc điện đàm \"không ai muốn cúp máy trước\" giữa 2 Tổng thống Trump - Putin": "Trump and Putin hold a call where “neither wanted to hang up first”",
  "Điện Kremlin tiết lộ về cuộc điện đàm giữa Tổng thống Nga Vladimir Putin và người đồng cấp Mỹ Donald Trump.": "The Kremlin has revealed details of a phone call between Russian President Vladimir Putin and his US counterpart Donald Trump.",
  "10 phút trước": "10 minutes ago",
  "Chiến sự Ukraine 11/10: Ukraine khó đảo chiều Kharkov, Nga bí thế tại Liman": "Ukraine war, October 11: Ukraine struggles to turn the tide in Kharkiv as Russia faces pressure in Lyman",
  "Lực lượng Ukraine đang thất bại trong nỗ lực mở một \"hành lang\" an toàn để rút lui khỏi vòng vây khổng lồ ở Kharkov. Ngược lại, Nga cũng bị dồn dép nghẹt thở tại mặt trận Liman.": "Ukrainian forces are failing to open a safe corridor to retreat from a massive encirclement in Kharkiv. Meanwhile, Russian forces are under intense pressure on the Lyman front.",
  "Người đàn ông thiệt mạng khi trèo vào chuồng hổ trong sở thú ở Anh": "Man dies after climbing into tiger enclosure at UK zoo",
  "CEO Microsoft kêu gọi thiết kế “phanh khẩn cấp” cho AI": "Microsoft CEO calls for an AI “emergency brake”",
  "NATO tuyên bố \"Lý thuyết chiến thắng\" mới không nhằm chống lại Nga": "NATO says its new “theory of victory” is not aimed at Russia",
  "Hồ canxi xanh ngọc như ruộng bậc thang trong hang động dài hơn 3km": "Turquoise calcium pools resemble terraced fields in a cave over 3km long",
  "Người mua ô tô vội tất toán khoản vay khi phát hiện lãi suất tăng lên 19,4%": "Car buyers rush to repay loans after discovering interest rates have risen to 19.4%",
  "Thị trường Việt Nam tiêu thụ gần 700.000 xe máy trong quý III": "Vietnam market sees nearly 700,000 motorbikes sold in Q3",
  "Cụ ông 80 tuổi vẫn tặng hoa người vợ đã khuất mỗi dịp 20/10": "80-year-old man still gives flowers to his late wife every October 20",
  "Siêu bão Champi mạnh trở lại, có thể đạt cấp 17 vào tối 19/10": "Typhoon Champi strengthens again and could reach category 17 on the evening of October 19",
  "Đề xuất thưởng Tết vào tháng 11 để kích cầu, doanh nghiệp nói gì?": "Proposal to pay Lunar New Year bonuses in November to boost demand: What do businesses say?",
  "Tính giá điện theo giờ: \"Rất khó đợi hết giờ cao điểm mới học, mới tắm\"": "Time-of-use electricity pricing: “It's hard to wait until peak hours end to study or shower”",
  "Sự thấu hiểu giúp các \"bóng hồng\" ngành y thêm tận tâm cống hiến": "Understanding inspires women in healthcare to serve with even greater dedication",
  "Nội vụ & Xã hội": "Home Affairs & Society",
  "Đăng nhập": "Log in",
  "Mới nhất": "Latest",
  "Thế giới": "World",
  "Quân sự": "Military",
  "Phân tích - bình luận": "Analysis & Opinion",
  "Thế giới đó đây": "Around the World",
  "Kiều bào": "Overseas Vietnamese",
  "Thời sự": "Current Affairs",
  "Chính trị": "Politics",
  "Đưa nghị quyết của đảng vào cuộc sống": "Putting Party resolutions into practice",
  "Bầu cử đại biểu quốc hội": "National Assembly Elections",
  "Học tập Bác": "Following President Ho Chi Minh's Example",
  "Môi trường": "Environment",
  "Giao thông": "Transport",
  "Nóng trên mạng": "Trending Online",
  "Pháp luật": "Law",
  "Hồ sơ vụ án": "Case Files",
  "Pháp đình": "Courts",
  "Sức khỏe": "Health",
  "Ung Thư": "Cancer",
  "Sống Khỏe": "Healthy Living",
  "Thận": "Kidneys",
  "Tầm soát - chẩn đoán": "Screening & Diagnosis",
  "Sinh Sản": "Reproductive Health",
  "Ngoại thần kinh": "Neurosurgery",
  "Thuốc và các giải pháp hỗ trợ": "Medicine & Supportive Solutions",
  "Chấm dứt cơn đau": "Pain Relief",
  "Tư vấn y khoa": "Medical Advice",
  "Đời sống": "Lifestyle",
  "Cộng đồng": "Community",
  "Thượng Lưu": "High Society",
  "Nhà Đẹp": "Beautiful Homes",
  "Giới Trẻ": "Youth",
  "Chợ ONLINE": "Online Marketplace",
  "Xổ Số": "Lottery",
  "Cuộc Thi ảnh Việt Nam Trong Tôi": "Vietnam Through My Lens Photo Contest",
  "Du Lịch": "Travel",
  "Tin Tức": "News",
  "Khám Phá": "Discover",
  "Món Ngon": "Cuisine",
  "Biển Đẹp": "Beautiful Beaches",
  "Tour Hay": "Featured Tours",
  "Kinh Doanh": "Business",
  "Tài Chính": "Finance",
  "Chứng Khoán": "Stock Market",
  "Doanh Nghiệp": "Companies",
  "Khởi Nghiệp": "Startups",
  "Tiêu Dùng": "Consumer Affairs",
  "Tin Bước Cùng Việt Nam": "Growing with Vietnam",
  "Toàn Cảnh Kinh Tế Tư Nhân": "Vietnam's Private Economy",
  "Bất Động Sản": "Real Estate",
  "Dự Án": "Projects",
  "Thị Trường": "Market",
  "Nhà Đất": "Property",
  "Nhịp Sống Đô Thị": "Urban Life",
  "Sống Xanh": "Green Living",
  "Nội Thất": "Interior Design",
  "THỂ THAO": "SPORTS",
  "BÓNG ĐÁ": "FOOTBALL",
  "PICKLEBALL": "PICKLEBALL",
  "TENNIS": "TENNIS",
  "GOLF": "GOLF",
  "VÕ THUẬT - CÁC MÔN KHÁC": "MARTIAL ARTS & OTHER SPORTS",
  "HẬU TRƯỜNG": "BEHIND THE SCENES",
  "THỂ THAO SỨC BỀN": "ENDURANCE SPORTS",
  "Xe Plus": "Cars Plus",
  "GIẢI TRÍ": "ENTERTAINMENT",
  "SÁCH HAY": "BOOKS",
  "ĐIỆN ẢNH": "CINEMA",
  "ÂM NHẠC": "MUSIC",
  "THỜI TRANG": "FASHION",
  "MỸ THUẬT - SÂN KHẤU": "ARTS & THEATER",
  "TẾT 2026": "LUNAR NEW YEAR 2026",
  "GIÁO DỤC": "EDUCATION",
  "GÓC PHỤ HUYNH": "PARENTS' CORNER",
  "KHUYẾN HỌC": "SCHOLARSHIPS",
  "GƯƠNG SÁNG": "Role Models",
  "GIÁO DỤC - NGHỀ NGHIỆP": "EDUCATION & CAREERS",
  "DU HỌC": "STUDY ABROAD",
  "TUYỂN SINH": "ADMISSIONS",
  "CUỘC THI 50 NĂM THÀNH PHỐ TRONG TÔI": "50 Years of Our City Photo Contest",
  "XE ++": "MOTORING",
  "THỊ TRƯỜNG XE": "VEHICLE MARKET",
  "CHỌN XE": "BUYING A CAR",
  "XE ĐIỆN": "ELECTRIC VEHICLES",
  "CHĂM XE": "CAR CARE",
  "DIỄN ĐÀN XE": "MOTORING FORUM",
  "THI LÝ THUYẾT BẰNG LÁI XE": "DRIVING THEORY TEST",
};

function getLanguage() {
  if (localStorage.getItem(languageStorageKey) === "en") {
    return "en";
  } else {
    return "vi";
  }
}

function translate(text) {
  if (getLanguage() === "en") {
    if (translations[text]) {
      return translations[text];
    } else {
      return text;
    }
  } else {
    return text;
  }
}

const originalPageText = new WeakMap();

function applyPageTranslations() {
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode = textWalker.nextNode();
  while (textNode) {
    const parent = textNode.parentElement;
    if (parent && !parent.closest("[data-i18n]")) {
      if (!originalPageText.has(textNode)) {
        originalPageText.set(textNode, textNode.nodeValue);
      }

      const originalText = originalPageText.get(textNode);
      const trimmedText = originalText.trim();
      if (trimmedText) {
        const leadingWhitespace = originalText.match(/^\s*/)[0];
        const trailingWhitespace = originalText.match(/\s*$/)[0];
        textNode.nodeValue =
          leadingWhitespace + translate(trimmedText) + trailingWhitespace;
      }
    }
    textNode = textWalker.nextNode();
  }

  const translatableElements = document.querySelectorAll("[data-i18n]");
  for (let i = 0; i < translatableElements.length; i++) {
    const element = translatableElements[i];
    element.textContent = translate(element.getAttribute("data-i18n"));
  }

  const titleElements = document.querySelectorAll("[data-i18n-title]");
  for (let i = 0; i < titleElements.length; i++) {
    const element = titleElements[i];
    element.title = translate(element.getAttribute("data-i18n-title"));
  }
}

function header() {
  let languageLabel = "Tiếng Việt";
  if (getLanguage() === "en") {
    languageLabel = "English";
  } else {
    languageLabel = "Tiếng Việt";
  }

  const head = `<div class="header-top">
        <div class="items-center">
          <div class="logo">
            <img src="${prefix}image/logo-3png-1752569761698.webp" alt="" />
          </div>
          <div
            class="weather-placeholder"
            data-module="weather-header"
            data-date_time_today="Thứ 3, 06/10/2026"
          >
            <a href="" target="_blank"
              ><div class="day-Hanoi">
                <span class="Hanoi">${translate("Hà Nội")}</span>
                <span class="Day" id="day-header"></span>
              </div>
              <span>24 C</span>
            </a>
          </div>
        </div>
        <div class="dt-flex">
          <a href="">Fica</a>
          <a href="">DTiNews</a>
          <a href="">${translate("Nội vụ & Xã hội")}</a>
        </div>
        <div class="language">
          <span id="btnTextLanguage">${languageLabel}</span>
          <ul>
            <li class="language-list" id="tiengViet" role="button" tabindex="0">Tiếng Việt</li>
            <li class="language-list" id="tiengAnh" role="button" tabindex="0">English</li>
          </ul>
        </div>
        <div class="login">
          <i class="fa-regular fa-user"></i>
          <div class="button-login">
            <a href="${loginPath}" id="linkbuttonlogin"
              ><button
                type="button"
              >
                ${translate("Đăng nhập")}
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
    link: prefix + "index.html",
    classLink: "link-home",
    icon: '<i class="fa-solid fa-house"></i>',
  },
  {
    classList: "Video",
    img: prefix + "image/videodt3601-1787928329058.webp",
    link: prefix + "pages/video.html",
    classLink: "logo-video",
  },
  {
    classList: "News",
    title: "Mới nhất",
    link: prefix + "pages/LatestNews.html",
    classSpan: "text-nav",
  },
  {
    classList: "World",
    title: "Thế giới",
    link: prefix + "pages/home-the-gioi.html",
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
    link: prefix + "pages/home-thoi-su.html",
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
    link: prefix + "pages/home-phap-luat.html",
    classSpan: "text-nav",
    Children: [
      { link: "", title: "Hồ sơ vụ án", classItem: "list-nav" },
      { link: "", title: "Pháp đình", classItem: "list-nav" },
    ],
  },
  {
    classList: "Health",
    title: "Sức khỏe",
    link: prefix + "pages/home-suc-khoe.html",
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
    link: prefix + "pages/home-doi-song.html",
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
    link: prefix + "pages/home-du-lich.html",
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
    link: prefix + "pages/home-kinh-doanh.html",
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
    link: prefix + "pages/home-bat-dong-san.html",
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
    link: prefix + "pages/home-the-thao.html",
    classSpan: "text-nav",
    Children: [
      { link: "Soccer.html", title: "BÓNG ĐÁ", classItem: "list-nav" },
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
    link: prefix + "pages/home-giai-tri.html",
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
    link: prefix + "pages/home-giao-duc.html",
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
    link: prefix + "pages/home-xe.html",
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
  {
    classList: "Love-people",
    title: "Xe Plus",
    link: prefix + "pages/Benevolence.html",
    classSpan: "text-nav",
  },
];

function renderNavbar() {
  let ListHTML = "";

  for (let i = 0; i < navbar.length; i++) {
    let miniList = "";
    let hasChildren = navbar[i].Children && navbar[i].Children.length > 0;

    if (hasChildren) {
      for (let j = 0; j < navbar[i].Children.length; j++) {
        miniList += `<li class="list-nav"><a href="${navbar[i].Children[j].link}">${translate(navbar[i].Children[j].title)}</a></li>`;
      }
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
    } else if (!hasChildren) {
      ListHTML += `
      <li class="${navbar[i].classList}">
          <a href="${navbar[i].link}" class=""><span class="${navbar[i].classSpan}">${translate(navbar[i].title)}</span></a>
        </li>`;
    } else {
      ListHTML += `
      <li class="${navbar[i].classList} has-child">
          <a href="${navbar[i].link}" class=""><span class="${navbar[i].classSpan}">${translate(navbar[i].title)}</span></a>
          <ol>
          ${miniList}
          </ol>
        </li>`;
    }
  }
  document.getElementById("ListNavbarID").innerHTML = ListHTML;
}

renderNavbar();

function newDate() {
  const d = new Date();
  let locale = "vi-VN";
  if (getLanguage() === "en") {
    locale = "en-US";
  } else {
    locale = "vi-VN";
  }
  document.getElementById("day-header").innerHTML =
    new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(d);
}
newDate();

function ClickLogIn() {
  const link = document.getElementById("linkbuttonlogin");
  if (link) {
    link.addEventListener("click", function (event) {
      let message = "Bạn có muốn chuyển sang trang đăng nhập không?";
      if (getLanguage() === "en") {
        message = "Would you like to go to the log-in page?";
      } else {
        message = "Bạn có muốn chuyển sang trang đăng nhập không?";
      }
      const result = confirm(message);
      if (!result) {
        event.preventDefault();
      }
    });
  }
}
ClickLogIn();

function languageText() {
  const btnEnglish = document.getElementById("tiengAnh");
  const btnVietNamese = document.getElementById("tiengViet");
  const languageButton = document.getElementById("btnTextLanguage");

  function setLanguage(language) {
    localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language;
    header();
    renderNavbar();
    newDate();
    renderFooter();
    applyPageTranslations();
    ClickLogIn();
    languageText();
  }

  function bindLanguageOption(element, language) {
    if (element) {
      element.addEventListener("click", () => setLanguage(language));
      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setLanguage(language);
        }
      });
    } else {
      return;
    }
  }

  bindLanguageOption(btnEnglish, "en");
  bindLanguageOption(btnVietNamese, "vi");
  document.documentElement.lang = getLanguage();
  if (languageButton) {
    if (getLanguage() === "en") {
      languageButton.innerText = "English";
    } else {
      languageButton.innerText = "Tiếng Việt";
    }
  } else {
    return;
  }
}
languageText();

const footer = [
  { logo: "image/logo-3png-1752569761698.webp", class: "logo" },
  { line: 1, text: "Cơ quan của Bộ Nội vụ", en: "An agency of the Ministry of Home Affairs" },
  { line: 2, text: "Tổng biên tập: Phạm Tuấn Anh", en: "Editor-in-Chief: Pham Tuan Anh" },
  {
    line: 3,
    text: "Giấy phép hoạt động báo điện tử Dân trí số 15/GP-BVHTTDL Hà Nội, ngày 14-4-2025",
    en: "Dan Tri online newspaper operating license No. 15/GP-BVHTTDL, issued in Hanoi on April 14, 2025",
  },
  {
    line: 4,
    text: "Địa chỉ tòa soạn: Số 48 ngõ 2 phố Giảng Võ, phường Giảng Võ, thành phố Hà Nội",
    en: "Editorial office: 48, Lane 2, Giang Vo Street, Giang Vo Ward, Hanoi",
  },
  { line: 5, text: "Điện thoại: 024-3736-6491. Hotline HN: 0973-567-567", en: "Phone: 024-3736-6491. Hanoi hotline: 0973-567-567" },
  {
    line: 6,
    text: "Văn phòng đại diện miền Nam: Số 51-53 Võ Văn Tần, phường Xuân Hòa, thành phố Hồ Chí Minh",
    en: "Southern representative office: 51-53 Vo Van Tan Street, Xuan Hoa Ward, Ho Chi Minh City",
  },
  { line: 7, text: "Hotline TPHCM: 0974-567-567", en: "Ho Chi Minh City hotline: 0974-567-567" },
  { line: 8, text: "Email: info@dantri.com.vn" },
];

function renderFooter() {
  const footerElement = document.getElementById("footerID");
  if (!footerElement) return;

  let logo = "";
  let textInLine = "";
  let text = "";

  for (let i = 0; i < footer.length; i++) {
    if (i === 0) {
      logo = `
  <div class="${footer[i].class}">
    <img src="${prefix}${footer[i].logo}" alt="" />
  </div>
      `;
    } else {
      let footerText = footer[i].text;
      if (getLanguage() === "en") {
        if (footer[i].en) {
          footerText = footer[i].en;
        } else {
          footerText = footer[i].text;
        }
      } else {
        footerText = footer[i].text;
      }
      textInLine += footerText + `<br>`;
    }
  }

  text = `<p class="text-infor">${textInLine}</p>`;
  footerElement.innerHTML = logo + text;
}

renderFooter();
applyPageTranslations();
