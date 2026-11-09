const AffairsHeadCards = [
  {
    card: 1,
    img: "../ảnh/20261104165248412017937860261949069874860937922503g35871899764842900016523eba0d456ee602f3067e079b4affa-1793788340553.webp",
    title:
      "Bộ trưởng Công an nói về nâng mức phạt tiền tối đa trong xử phạt hành chính",
    text: "Theo Đại tướng Lương Tam Quang, chỉ quy định mức phạt tiền tối đa 1,5 tỷ đồng với cá nhân và 3 tỷ đồng với tổ chức áp dụng trong một số lĩnh vực, gồm bảo vệ môi trường và an toàn thực phẩm.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/csgt-1793786920651.webp",
    title:
      "Rào chắn thi công cầu Tứ Liên, CSGT Hà Nội khuyến cáo lộ trình di chuyển",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/179378933703975895178271924221647589517827192422164b51f18c9317356e1cd517aaf6ab60301-1793795009540.webp",
    title:
      "Tìm thấy 39 bộ hài cốt liệt sĩ trong một ngày ở Công viên Lê Thị Riêng",
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
    title: "Mưa lớn ở TPHCM khiến máy bay không thể đáp xuống Tân Sơn Nhất",
    link: "",
    img: "../image-3/screenshot-2026-11-04-195033-1793797513048.webp",
  },
  {
    title: "Đường ngập lênh láng, xe cộ ùn ứ trong đêm mưa lớn ở TPHCM",
    link: "",
    img: "../image-3/003-1793796890531.webp",
  },
  {
    title:
      "Cố tình vi phạm phải xử nghiêm, không để tiền phạt như “muỗi đốt voi”",
    link: "",
    img: "../image-3/vu-van-tien-edited-1793784817748.webp",
  },
  {
    title: "Cháy nhà trọ ở Hà Nội, 30 người thoát nạn an toàn",
    link: "",
    img: "../image-3/chay-2-cropped-1793795561219.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/khu-vuc-long-ho-dakdrinhquang-ngaiquoc-trieu-1793791518987.webp",
    link: "",
    title: "Thủy điện Đăkđrinh lần đầu tiên dừng phát điện vào mùa mưa",
    text: "Giữa mùa mưa nhưng mực nước của hồ thủy điện Đăkđrinh (Quảng Ngãi) xuống rất thấp, đơn vị chủ quản phải quyết định dừng phát điện để tích nước.",
  },
  {
    img: "../image-3/chu-tich-qh-lao-cropped-1793792176461.webp",
    link: "",
    title: "Tổng Bí thư, Chủ tịch nước Tô Lâm tiếp Chủ tịch Quốc hội Lào",
    text: "Tổng Bí thư, Chủ tịch nước đề nghị hai bên phát huy vai trò của cơ quan lập pháp trong việc lan tỏa thế mạnh hợp tác chính trị, quốc phòng, an ninh sang các lĩnh vực kinh tế, thương mại, đầu tư.",
  },
  {
    img: "../image-3/duong-duoc-dat-tenhoai-son2-1793788254785.webp",
    link: "",
    title:
      "Thống nhất phương án đặt tên đường cố Bí thư Đà Nẵng Nguyễn Bá Thanh",
    text: "Hội đồng tư vấn đã thống nhất chọn tuyến ĐT605 dài gần 12km, đi qua quê hương ông Nguyễn Bá Thanh, làm phương án đặt tên đường mang tên cố Bí thư Thành ủy Đà Nẵng.",
  },
  {
    img: "../image-3/pho-chu-tich-tinh-vinh-long-lam-bi-thu-dang-uy-phuong-phu-tan-edited-cropped-1793790320931.webp",
    link: "",
    title: "Phó Chủ tịch tỉnh Vĩnh Long làm Bí thư Đảng ủy phường Phú Tân",
    text: "Bà Nguyễn Thị Bé Mười, Phó Chủ tịch UBND tỉnh Vĩnh Long vừa được điều động, chỉ định tham gia Ban Chấp hành, Ban Thường vụ và giữ chức Bí thư Đảng ủy phường Phú Tân, nhiệm kỳ 2025-2030.",
  },
  {
    img: "../image-3/tong-bi-thu-chu-tich-nuoc-to-lam-du-le-trao-tang-huy-hieu-dang-tai-dang-bo-thanh-pho-ha-noi-cropped-1793789312904.webp",
    link: "",
    title:
      "Tổng Bí thư, Chủ tịch nước Tô Lâm dự Lễ trao tặng Huy hiệu Đảng tại Đảng bộ thành phố Hà Nội",
    text: "Tổng Bí thư, Chủ tịch nước tin tưởng các đồng chí đảng viên lão thành sẽ tiếp tục phát huy uy tín, kinh nghiệm, nhiệt huyết cách mạng, là chỗ dựa tinh thần tin cậy cho tổ chức đảng, chính quyền cơ sở.",
  },
  {
    img: "../image-3/duongrungcaosu-7-1793774653383.webp",
    link: "",
    title: "Đường xuyên rừng cao su ở Đồng Nai được thảm nhựa, dân phấn khởi",
    text: "Đoạn đường dài 4,2km xuyên rừng cao su vốn là đường đất đỏ vừa được UBND xã Bình An (TP Đồng Nai) thảm nhựa giúp người dân đi lại thuận tiện, an toàn.",
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
    category: "Kinh doanh",
    catLink: "",
    title: "Sau California Fitness, đến lượt Citigym đóng cửa thêm chi nhánh",
    link: "",
    img: "../image/ra-mat-4-clb-trong-nam-2019-citigym-co-toc-do-phat-trien-dan-dau-nganh-fitnessdocx-1576920476374.webp",
  },
  {
    category: "Thời sự",
    catLink: "",
    title:
      "“Không doanh nghiệp nào có thể tiếp cận để đưa nhóm lợi ích vào chính sách”",
    link: "",
    img: "../image-3/dao-hong-lan-edited-1794221311658.webp",
  },
  {
    category: "Sức khỏe",
    catLink: "",
    title:
      "Cô gái đột quỵ khi lái xe, cảnh báo nguy cơ từ thói quen không lành mạnh",
    link: "",
    img: "../image-3/screen-shot-2026-11-08-at-83755-am-1794102020996.webp",
  },
  {
    category: "Bất động sản",
    catLink: "",
    title:
      "Khu đô thị thể thao lớn nhất nước dự kiến tăng vốn trên 1,2 triệu tỷ đồng",
    link: "",
    img: "../image-3/sieu-du-an-olympic-cua-ty-phu-pham-nhat-vuong-co-gi-dac-biet-cropped-1765962897274.webp",
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
