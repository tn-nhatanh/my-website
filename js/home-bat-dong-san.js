const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/batdongsan1.webp",
    title: "Tin vui cho người mua nhà, đất bằng giấy tay ở TPHCM",
    text: "TPHCM đang đề xuất người mua nhà, đất bằng giấy tay từ sau 1/7/2014 đến trước 1/8/2024 có thể được hỗ trợ tương đương mức bồi thường về đất khi thu hồi.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/batdongsan2.webp",
    title: "Làn sóng trung tâm dữ liệu: Động lực mới cho bất động sản Việt Nam",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/batdongsan3.webp",
    title:
      'Chính phủ yêu cầu báo cáo "sức khỏe" thị trường bất động sản trong tháng 11',
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
    title: "Giá nhà tại Australia đối mặt đợt suy giảm mạnh nhất 40 năm",
    link: "",
    img: "../image-3/batdongsan4.webp",
  },
  {
    title: "Gợi ý loại cây giúp biến phòng tắm thành không gian xanh rực rỡ",
    link: "",
    img: "../image-3/batdongsan5.webp",
  },
  {
    title:
      "TPHCM tính ưu đãi thuế, tiền thuê đất trung tâm mua sắm hàng hiệu giảm giá",
    link: "",
    img: "../image-3/batdongsan6.webp",
  },
  {
    title:
      "VN-Index phát tín hiệu tạo đáy, cổ phiếu bất động sản đảo chiều tăng",
    link: "",
    img: "../image-3/batdongsan7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/batdongsan8.webp",
    link: "",
    title:
      "Lộ thu nhập sếp doanh nghiệp địa ốc, cao nhất 800 triệu đồng mỗi tháng",
    text: "Lãnh đạo nhiều doanh nghiệp địa ốc nhận thu nhập hàng trăm triệu đồng mỗi tháng trong 9 tháng đầu năm, trong đó mức cao nhất 800 triệu đồng.",
  },
  {
    img: "../image-3/batdongsan9.webp",
    link: "",
    title: "Ông lớn nội thất IKEA lao đao vì khách Âu - Mỹ thắt chặt chi tiêu",
    text: "Dù chi đậm để hạ giá sản phẩm, IKEA vẫn ghi nhận doanh số sụt giảm năm thứ 3 liên tiếp khi người tiêu dùng thắt chặt hầu bao trước áp lực chi phí sinh hoạt.",
  },
  {
    img: "../image-3/batdongsan10.webp",
    link: "",
    title:
      "Trái phiếu bất động sản trả lãi 12,5%/năm, gần 47.000 tỷ đến hạn trong quý IV",
    text: "Lãi suất trái phiếu bất động sản lên 12,5%/năm, cao hơn ngân hàng, cùng 235.000 tỷ đồng trái phiếu đáo hạn trong 12 tháng tới, gây thêm sức ép tài chính lên doanh nghiệp.",
  },
  {
    img: "../image-3/batdongsan11.webp",
    link: "",
    title: "Nên mở hay đóng cửa phòng tắm sau khi tắm để tránh ẩm mốc?",
    text: "Nhiều người băn khoăn việc mở hay khép cửa phòng tắm sau khi dùng. Chuyên gia nội thất tiết lộ thói quen nhỏ này quyết định độ bền nội thất và chất lượng không khí trong nhà.",
  },
  {
    img: "../image-3/batdongsan12.webp",
    link: "",
    title: "Hà Nội sẽ phá dỡ 10 tòa nhà tập thể cũ ở Trương Định",
    text: "Khu tập thể Trương Định gồm 10 tòa nhà cao 2 tầng, khoảng 257 căn hộ, thuộc danh mục phải phá dỡ. Khu vực này dự kiến được xây dựng lại với công trình 30 tầng nổi và 3 tầng hầm.",
  },
  {
    img: "../image-3/batdongsan13.webp",
    link: "",
    title:
      "Loạt đất vàng của bà Trương Mỹ Lan ở trung tâm TPHCM được đưa ra đấu giá",
    text: "Hàng loạt bất động sản tại các tuyến đường đắc địa ở trung tâm TPHCM liên quan đến bà Trương Mỹ Lan được đưa ra đấu giá, với tổng giá khởi điểm lên đến hàng nghìn tỷ đồng.",
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
    category: "Nhịp sống đô thị",
    catLink: "",
    title: 'Đất vàng sân vận động Chi Lăng tiếp tục giảm giá sau 2 lần "bán ế"',
    link: "",
    img: "../image-3/batdongsan14.webp",
  },
  {
    category: "Sống xanh",
    catLink: "",
    title:
      "Căn nhà phố hóa vườn treo Babylon xanh mướt ngay ngã tư TP Quy Nhơn",
    link: "",
    img: "../image-3/batdongsan15.webp",
  },
  {
    category: "Nội thất",
    catLink: "",
    title: "Gợi ý loại cây giúp biến phòng tắm thành không gian xanh rực rỡ",
    link: "",
    img: "../image-3/batdongsan16.webp",
  },
  {
    category: "Thị trường",
    catLink: "",
    title:
      "Nhà giàu 121 nước rót gần 1,2 triệu tỷ đồng vào bất động sản Abu Dhabi",
    link: "",
    img: "../image-3/batdongsan17.webp",
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
