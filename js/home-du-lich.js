const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/dulich1.webp",
    title:
      "Sự thật thị trấn cấm qua đời: Thi thể kém phân hủy, không chôn cất quan tài",
    text: 'Thị trấn cực Bắc của Na Uy - Longyearbyen - được biết tới với câu chuyện kỳ lạ rằng người dân "không được phép qua đời". Thực tế nơi này chỉ hạn chế việc mai táng thi thể bằng quan tài.',
    link: "",
  },
  {
    card: 2,
    img: "../image-3/dulich2.webp",
    title: "Khám phá Tiên Sư Cốc Tự hơn 400 năm tuổi bên cửa động Phong Nha",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/dulich3.webp",
    title: "Hàng nghìn nghệ nhân đánh cồng chiêng, nhảy xoang dưới pháo hoa",
    link: "",
  },
];

const AffairsHeadHTML = `
  <div class="card-big">
    <img src="${AffairsHeadCards[0].img}" alt="" />
    <a href="${AffairsHeadCards[0].link}" class="title-card-big">${AffairsHeadCards[0].title}</a>
    <p class="text-card">${AffairsHeadCards[0].text}</p>
  </div>
  <div class="list-mini-card">
    <div class="mini-card card1">
      <img src="${AffairsHeadCards[1].img}" alt="" />
      <a href="${AffairsHeadCards[1].link}" class="text-mini-card">${AffairsHeadCards[1].title}</a>
    </div>
    <div class="mini-card card2">
      <img src="${AffairsHeadCards[2].img}" alt="" />
      <a href="${AffairsHeadCards[2].link}" class="text-mini-card">${AffairsHeadCards[2].title}</a>
    </div>
  </div>
`;

document.getElementById("affairs-spotlightID").innerHTML = AffairsHeadHTML;

const affairsNewsList = [
  {
    title: "Ẩn mình dưới tán rừng tràm U Minh Hạ là “kho báu” thiên nhiên",
    link: "",
    img: "../image-3/dulich4.webp",
  },
  {
    title:
      "Loài cá ở biển sâu với đôi mắt có thể xoay bên trong chiếc đầu trong suốt",
    link: "",
    img: "../image-3/dulich5.webp",
  },
  {
    title:
      "Cụ bà U90 ở Trung Quốc mở quán hoành thánh trong rừng, bán gần 800 tô/ngày",
    link: "",
    img: "../image-3/dulich6.webp",
  },
  {
    title:
      "Du thuyền hạng sang neo sát cảng cá ở Hưng Yên, khách xếp hàng chờ chụp ảnh",
    link: "",
    img: "../image-3/dulich7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/dulich8.webp",
    link: "",
    title:
      "Xây dựng đường trượt ngoài trời tại danh thắng Eo Gió gây tranh luận",
    text: "Công trình đường trượt Zipline với móng bê tông, khung thép tại danh thắng Eo Gió (Gia Lai) đang gây tranh luận về việc phát triển sản phẩm du lịch mới và bảo tồn cảnh quan tự nhiên.",
  },
  {
    img: "../image-3/dulich9.webp",
    link: "",
    title:
      "Du khách ẩu đả ở độ sâu 18m dưới đáy biến Maldives, suýt giật mặt nạ thở",
    text: "Một vụ xô xát giữa các thợ lặn đã xảy ra tại điểm lặn nổi tiếng ở Maldives. Hình ảnh ghi lại cảnh họ giằng co, xô đẩy nhau dưới nước khiến nhiều người bất ngờ.",
  },
  {
    img: "../image-3/dulich10.webp",
    link: "",
    title:
      "Hà Nội sắp có trải nghiệm ẩm thực trên khinh khí cầu, lượng khách giới hạn",
    text: "Lễ hội Văn hóa Ẩm thực Quốc tế Hà Nội 2026 sẽ có hoạt động trải nghiệm ẩm thực trên khinh khí cầu, với số lượng khách giới hạn. Sự kiện diễn ra ngày 27-29/11, tại Trung tâm Triển lãm Việt Nam.",
  },
  {
    img: "../image-3/dulich11.webp",
    link: "",
    title:
      "Xây dựng cụm công nghiệp văn hóa tại khu pháo đài quân sự triều Nguyễn",
    text: "Đồn Mang Cá, khu pháo đài quân sự quan trọng của Kinh thành Huế dưới triều Nguyễn, được định hướng hình thành cụm công nghiệp văn hóa trong thời gian tới.",
  },
  {
    img: "../image-3/dulich12.webp",
    link: "",
    title: "Sao Mỹ quen mặt với tuổi thơ nhiều người Việt ăn phở ở Hà Nội",
    text: 'Nam diễn viên từng quen thuộc với tuổi thơ của nhiều người Việt trong bộ phim "Cuộc sống thượng hạng của Zack và Cody" bất ngờ xuất hiện ở Hà Nội, thưởng thức phở và tới phố Tạ Hiện uống bia hơi.',
  },
  {
    img: "../image-3/dulich13.webp",
    link: "",
    title:
      "Khách xếp hàng chờ ăn cơm tấm ở Hà Nội, nghe violin như nhà hàng hạng sang",
    text: "Nhiều thực khách xếp hàng chờ đến lượt vào quán cơm tấm trong ngõ Chùa Láng (Hà Nội), để thưởng thức bữa ăn bình dân, trên nền giai điệu violin như tại nhà hàng sang trọng.",
  },
];

let affairsContainerHTML = "";

for (let i = 0; i < AffairsListContainerData.length; i++) {
  affairsContainerHTML += `
    <div class="card-Container">
        <img src="${AffairsListContainerData[i].img}" alt="" />
        <div class="info-box">
          <a href="${AffairsListContainerData[i].link}">${AffairsListContainerData[i].title}</a>
          <p>${AffairsListContainerData[i].text}</p>
        </div>
    </div>
  `;
}
document.getElementById("AffairsListContainerID").innerHTML =
  affairsContainerHTML;

const worldTopicsData = [
  {
    category: "Khám phá",
    catLink: "",
    title:
      "Sự thật thị trấn cấm qua đời: Thi thể kém phân hủy, không chôn cất quan tài",
    link: "",
    img: "../image-3/dulich14.webp",
  },
  {
    category: "Món ngon - Điểm đẹp",
    catLink: "",
    title:
      "Khách Việt du lịch ở Iceland, phải chi thêm 3 triệu đồng mới có chăn đắp",
    link: "",
    img: "../image-3/dulich15.webp",
  },
  {
    category: "Tour hay - Khuyến mại",
    catLink: "",
    title:
      "Đà Nẵng là cực tăng trưởng: Có gì để khách vui chơi, chi tiền không tiếc?",
    link: "",
    img: "../image-3/dulich16.webp",
  },
  {
    category: "Video - Ảnh",
    catLink: "",
    title: "Phòng tổng thống xa hoa 70 triệu đồng/đêm rộng 288m2 ở Hà Nội",
    link: "",
    img: "../image-3/dulich17.webp",
  },
];

let worldTopicsHTML = "";
for (let i = 0; i < worldTopicsData.length; i++) {
  worldTopicsHTML += `
    <div class="topic-card">
      <a href="${worldTopicsData[i].catLink}" class="topic-category">${worldTopicsData[i].category}</a>
      <img src="${worldTopicsData[i].img}" alt="${worldTopicsData[i].title}" />
      <a href="${worldTopicsData[i].link}" class="topic-title">${worldTopicsData[i].title}</a>
    </div>
  `;
}
document.getElementById("WorldTopicsID").innerHTML = worldTopicsHTML;
