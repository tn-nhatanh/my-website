const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/thethao1.webp",
    title: "Cristiano Ronaldo được tri ân đặc biệt theo cách chưa từng có",
    text: "Một hãng hàng không của Hà Lan vừa có hành động đặc biệt để tôn vinh Cristiano Ronaldo, sau khi tiền đạo người Bồ Đào Nha tuyên bố chia tay đội tuyển quốc gia.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/thethao2.webp",
    title: "Messi đi vào lịch sử bóng đá Mỹ, đoạt Vua phá lưới 2 lần liên tiếp",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/thethao3.webp",
    title:
      "Báo Indonesia nhận định Madam Pang khó tái đắc cử Chủ tịch LĐBĐ Thái Lan",
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
    title:
      "Man Utd trong nhóm xuống hạng, HLV Carrick đối diện nguy cơ bị sa thải",
    link: "",
    img: "../image-3/thethao4.webp",
  },
  {
    title:
      "FIFA đánh giá sao trẻ của U17 Việt Nam là cầu thủ đáng xem ở World Cup",
    link: "",
    img: "../image-3/thethao5.webp",
  },
  {
    title: "Tuyển Bồ Đào Nha chọn đội trưởng mới, khép lại kỷ nguyên Ronaldo",
    link: "",
    img: "../image-3/thethao6.webp",
  },
  {
    title:
      "Harry Kane giúp Bayern Munich lấy lại ngôi đầu, PSG nối dài mạch toàn thắng",
    link: "",
    img: "../image-3/thethao7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/thethao8.webp",
    link: "",
    title: "Các cầu thủ Việt kiều được kỳ vọng tỏa sáng ở U23 Việt Nam",
    text: "Các cầu thủ Việt kiều Williams Minh Hoàng, Ngô Đăng Khoa và Trần Thành Trung nhận được nhiều kỳ vọng trong màu áo U23 Việt Nam tại giải U23 quốc tế 2026 ở Gia Lai.",
  },
  {
    img: "../image-3/thethao9.webp",
    link: "",
    title:
      "Real Madrid thắng đậm, gây áp lực lên đại chiến Barcelona - Atletico",
    text: "Real Madrid dễ dàng đánh bại Valencia 3-0 trên sân Mestalla sáng 8/11, khiến màn so tài giữa Barcelona và Atletico đêm nay ở vòng 12 La Liga trở nên căng thẳng.",
  },
  {
    img: "../image-3/thethao10.webp",
    link: "",
    title: "CLB nữ TPHCM chính thức bị loại khỏi Cúp C1 châu Á",
    text: "Thất bại 1-3 trước CLB Hwacheon KSPO (Hàn Quốc) khiến CLB bóng đá nữ TPHCM bị loại khỏi Cúp C1 châu Á (AFC Women’s Champions League) 2026-2027.",
  },
  {
    img: "../image-3/thethao11.webp",
    link: "",
    title: "Man City thua sốc, Man Utd rơi xuống nhóm xuống hạng",
    text: "Man City bất ngờ gục ngã trước Nottingham Forest, qua đó khiến cuộc đua ở nhóm cuối bảng thêm căng thẳng và đẩy Man Utd xuống vị trí thuộc nhóm xuống hạng.",
  },
  {
    img: "../image-3/thethao12.webp",
    link: "",
    title: "Alcaraz vào chung kết Paris Masters, chờ đòi nợ Shelton",
    text: "Carlos Alcaraz lần đầu tiên vào chung kết Paris Masters sau chiến thắng thuyết phục trước Casper Ruud. Tay vợt người Tây Ban Nha sẽ đối đầu Ben Shelton để tranh chức vô địch và đòi món nợ tại US Open.",
  },
  {
    img: "../image-3/thethao13.webp",
    link: "",
    title: "Arsenal thắng nhọc Hull City, cân bằng kỷ lục Ngoại hạng Anh",
    text: "Bàn thắng của Martin Odegaard ở phút 72 giúp Arsenal đánh bại Hull City 1-0, qua đó nối dài mạch thắng tại Ngoại hạng Anh và cân bằng kỷ lục khởi đầu mùa giải tốt nhất lịch sử CLB.",
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
    category: "Bóng đá",
    catLink: "",
    title: "Đội tuyển Argentina lách luật để vinh danh Lionel Messi",
    link: "",
    img: "../image-3/thethao14.webp",
  },
  {
    category: "Pickleball",
    catLink: "",
    title: "Quang Dương tham dự giải picklebal châu Á tại TPHCM",
    link: "",
    img: "../image-3/thethao15.webp",
  },
  {
    category: "Tennis",
    catLink: "",
    title: "Alcaraz vào chung kết Paris Masters, chờ đòi nợ Shelton",
    link: "",
    img: "../image-3/thethao16.webp",
  },
  {
    category: "Golf",
    catLink: "",
    title: "Xác định nhà vô địch giải Golf Truyền thông số 2026",
    link: "",
    img: "../image-3/thethao17.webp",
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
