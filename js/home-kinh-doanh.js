const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/kinhdoanh1.webp",
    title:
      "80 doanh nghiệp, tổ chức nông nghiệp Mỹ sắp đến TPHCM tìm cơ hội kinh doanh",
    text: "Mỹ sắp cử phái đoàn xúc tiến nông nghiệp lớn nhất từ trước đến nay sang Việt Nam để tìm kiếm cơ hội mở rộng thị trường tiêu thụ nông sản.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/kinhdoanh2.webp",
    title:
      'Nhật Bản sắp mở cửa cho loạt nông sản Việt, có tên "ngôi sao" trái cây mới',
    link: "",
  },
  {
    card: 3,
    img: "../image-3/kinhdoanh3.webp",
    title: "Dự báo giá vàng sau tuần tăng vọt rồi lao dốc",
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
    title: "Cước tàu xuất khẩu đi Tây Phi gánh thêm 800 USD/container",
    link: "",
    img: "../image-3/kinhdoanh4.webp",
  },
  {
    title: "Sắp diễn ra lễ hội đặc biệt ở thủ phủ cá tra Việt Nam",
    link: "",
    img: "../image-3/kinhdoanh5.webp",
  },
  {
    title:
      "Amazon: Bí mật cỗ máy kiếm tiền từ triết lý bán lẻ kỳ lạ của Jeff Bezos",
    link: "",
    img: "../image-3/kinhdoanh6.webp",
  },
  {
    title:
      "Miền Bắc cần giảm 3.000 MW công suất điện giờ cao điểm trong năm 2027",
    link: "",
    img: "../image-3/kinhdoanh7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/kinhdoanh8.webp",
    link: "",
    title: "Giá vàng biến động mạnh sau bầu cử Mỹ: Fed vẫn nắm quyền định đoạt",
    text: "Sau khi bứt phá mạnh mẽ hậu bầu cử giữa nhiệm kỳ tại Mỹ, giá vàng nhanh chóng quay đầu giảm khi thị trường tài chính đối mặt với sức ép mới từ dữ liệu kinh tế Mỹ.",
  },
  {
    img: "../image-3/kinhdoanh9.webp",
    link: "",
    title: "Bị tạm hoãn xuất cảnh vì nợ thuế, làm thế nào để được gỡ bỏ?",
    text: "Sau khi hoàn thành nghĩa vụ thuế, người nộp thuế đủ điều kiện sẽ được cơ quan thuế ban hành thông báo hủy bỏ tạm hoãn xuất cảnh ngay sau khi hệ thống xác định đáp ứng quy định.",
  },
  {
    img: "../image-3/kinhdoanh10.webp",
    link: "",
    title:
      "KOL, KOC kiếm tiền tỷ từ livestream, tiếp thị liên kết đóng thuế ra sao?",
    text: "Từ ngày 1/10, hoa hồng tiếp thị liên kết được tính thuế theo diện kinh doanh, khiến nhiều người kiếm hàng trăm triệu đến cả tỷ đồng lúng túng về nghĩa vụ thuế và hóa đơn điện tử.",
  },
  {
    img: "../image-3/kinhdoanh11.webp",
    link: "",
    title:
      "Chính phủ yêu cầu không tăng giá hàng hóa, dịch vụ do Nhà nước quản lý",
    text: "Chính phủ yêu cầu không tăng giá các mặt hàng, dịch vụ do Nhà nước quản lý, kiểm soát CPI bình quân năm khoảng 4,5%, đồng thời phấn đấu tăng trưởng GDP từ 10% trở lên.",
  },
  {
    img: "../image-3/kinhdoanh12.webp",
    link: "",
    title: "Giá xăng, điện giảm, doanh nghiệp vẫn chật vật vì chi phí đầu vào",
    text: "Giá xăng, điện giảm tạo dư địa tiết giảm chi phí cho doanh nghiệp. Dù vậy, áp lực từ nguyên vật liệu, chi phí vốn, nhân công khiến khoản tiết kiệm này chưa đủ tạo thay đổi ngay giá bán hàng hóa.",
  },
  {
    img: "../image-3/kinhdoanh13.webp",
    link: "",
    title:
      "Doanh nghiệp Thanh Hóa đến TPHCM chào bán sản phẩm OCOP, kết nối du lịch",
    text: "Không chỉ đưa các mặt hàng OCOP thế mạnh vào TPHCM tìm đầu ra, cộng đồng doanh nghiệp xứ Thanh còn hướng tới mục tiêu kết nối du lịch hai chiều và tối ưu hóa chi phí cho chuỗi logistics.",
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
    category: "Trí tuệ nhân tạo",
    catLink: "",
    title:
      "OpenAI công bố mô hình ngôn ngữ mới: Bước nhảy vọt về khả năng lập luận tự động",
    link: "",
    img: "../image-3/kinhdoanh14.webp",
  },
  {
    category: "Chứng khoán",
    catLink: "",
    title:
      "VN-Index phát tín hiệu tạo đáy, cổ phiếu bất động sản đảo chiều tăng",
    link: "",
    img: "../image-3/kinhdoanh15.webp",
  },
  {
    category: "Doanh nghiệp",
    catLink: "",
    title: "Cước tàu xuất khẩu đi Tây Phi gánh thêm 800 USD/container",
    link: "",
    img: "../image-3/kinhdoanh16.webp",
  },
  {
    category: "Khởi nghiệp",
    catLink: "",
    title: "Bị AI thế chỗ: Ngưỡng tuổi nào khó tìm lại việc làm?",
    link: "",
    img: "../image-3/kinhdoanh17.webp",
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
