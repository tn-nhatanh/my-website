const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/otoxemay1.webp",
    title: "VinFast đang kinh doanh thế nào tại các thị trường nước ngoài?",
    text: "Chiếm 15,9% tổng lượng ô tô điện được bàn giao từ đầu năm đến hết tháng 9, mảng kinh doanh quốc tế của VinFast ghi nhận kết quả tích cực tại Ấn Độ, Philippines và được kỳ vọng bứt phá ở Indonesia.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/otoxemay2.webp",
    title: "Honda chốt ra mắt SUV 7 chỗ mới tại Đông Nam Á vào tháng sau",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/otoxemay3.webp",
    title: 'Tesla khai tử mẫu bán tải "lập dị" Cybertruck',
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
    title: "Thêm một chiếc xe bị rơi bánh sau khi va chạm tại Indonesia",
    link: "",
    img: "../image-3/otoxemay4.webp",
  },
  {
    title: "Ô tô điện mới của Volvo có giá cao nhất 3,5 tỷ đồng",
    link: "",
    img: "../image-3/otoxemay5.webp",
  },
  {
    title: "Mitsubishi Xpander thêm trang bị tại Việt Nam, giá tăng nhẹ",
    link: "",
    img: "../image-3/otoxemay6.webp",
  },
  {
    title: "Jaecoo J5 EV gãy rời bánh sau va chạm ở Indonesia",
    link: "",
    img: "../image-3/otoxemay7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/otoxemay8.webp",
    link: "",
    title:
      "Nissan Patrol: Hãng chưa xác nhận, đại lý vẫn rao, tư nhân báo chênh",
    text: "Nissan Patrol được định vị cạnh tranh trực tiếp với Toyota Land Cruiser, từng được các đại lý nhận đặt hàng vào cuối năm 2024 nhưng sau đó phải hoàn cọc cho khách Việt vào giữa năm 2025.",
  },
  {
    img: "../image-3/otoxemay9.webp",
    link: "",
    title:
      "Innova Cross Hybrid mới ra mắt tại Thái Lan, Innova thêm bản LIMO tại Ấn Độ",
    text: "Nâng cấp đáng chú ý trên Innova Cross Hybrid vừa ra mắt tại Thái Lan nằm ở pin và tính năng điều khiển từ xa, trong khi bản Innova LIMO mới tại Ấn Độ hướng tới nhóm khách hàng kinh doanh vận tải.",
  },
  {
    img: "../image-3/otoxemay10.webp",
    link: "",
    title: "Cận cảnh Honda SH đời 2027 màu đen mới tại đại lý",
    text: "Dòng xe tay ga Honda SH125i/160i đời 2027 được bổ sung tùy chọn màu đen “Aura Black Edition” cho phiên bản Thể thao. Xe có giá từ 87,29 triệu đồng.",
  },
  {
    img: "../image-3/otoxemay11.webp",
    link: "",
    title: "Santa Fe giúp Hyundai ghi nhận doanh số kỷ lục tại Mỹ",
    text: "Với 17.959 xe bán ra trong tháng 10, mẫu Santa Fe đã giúp Hyundai ghi nhận doanh số theo tháng kỷ lục tại thị trường Mỹ.",
  },
  {
    img: "../image-3/otoxemay12.webp",
    link: "",
    title:
      "Harley-Davidson ra mắt Sprint 440 cho người mới chơi, liệu có về Việt Nam?",
    text: "Harley-Davidson Sprint 440 sở hữu thiết kế cruiser đặc trưng của hãng mô tô Hoa Kỳ, gợi nhớ nhiều đến mẫu Iron 883 từng được phân phối tại Việt Nam.",
  },
  {
    img: "../image-3/otoxemay13.webp",
    link: "",
    title: "Loạt xe tay ga mới đáng chú ý vừa ra mắt tại triển lãm EICMA 2026",
    text: "Triển lãm mô tô quốc tế EICMA 2026 tại Milan (Italy) chứng kiến màn đổ bộ của hàng loạt mẫu xe tay ga mới, từ Honda, Yamaha, Piaggio đến Aprilia, trải dài từ xe điện đô thị đến tay ga địa hình.",
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
    category: "Thị trường xe",
    catLink: "",
    title: "VinFast đang kinh doanh thế nào tại các thị trường nước ngoài?",
    link: "",
    img: "../image-3/otoxemay14.webp",
  },
  {
    category: "Chọn xe",
    catLink: "",
    title: "Triumph Bonneville 2008: “Lãng tử” 18 tuổi, hoài cổ và phong trần",
    link: "",
    img: "../image-3/otoxemay15.webp",
  },
  {
    category: "Xe điện",
    catLink: "",
    title: "Ô tô điện mới của Volvo có giá cao nhất 3,5 tỷ đồng",
    link: "",
    img: "../image-3/otoxemay16.webp",
  },
  {
    category: "Chăm xe",
    catLink: "",
    title: "Nên về số N, số P hay giữ số D khi dừng ô tô chờ đèn đỏ?",
    link: "",
    img: "../image-3/otoxemay17.webp",
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
