const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/giaitri1.webp",
    title:
      "Chị chị em em 3 vượt 100 tỷ đồng giữa tranh luận, nhà sản xuất nói gì?",
    text: 'Dù vấp phải nhiều ý kiến về kịch bản và cách khai thác cảnh thân mật, "Chị chị em em 3" vẫn cán mốc doanh thu hơn 100 tỷ đồng sau 8 ngày ra rạp.',
    link: "",
  },
  {
    card: 2,
    img: "../image-3/giaitri2.webp",
    title:
      "Con gái Triệu Vy: 16 tuổi sở hữu bất động sản trăm tỷ đồng, sống kín tiếng",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/giaitri3.webp",
    title: "Phương Mỹ Chi hội ngộ RHYDER, đưa hát Xoan lên sân khấu Hà Nội",
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
      "Hoa hậu Việt Nam 2026 không buồn khi bị chê nhan sắc, so sánh với Á hậu",
    link: "",
    img: "../image-3/giaitri4.webp",
  },
  {
    title: "Cô gái Hà Nội 20 tuổi đăng quang Hoa hậu Việt Nam 2026",
    link: "",
    img: "../image-3/giaitri5.webp",
  },
  {
    title:
      "Tân Hoa hậu Việt Nam có mẹ là giáo viên thể dục, bố làm công việc tự do",
    link: "",
    img: "../image-3/giaitri6.webp",
  },
  {
    title: "Nhan sắc đời thường của tân Hoa hậu Việt Nam cao 1,71m quê Hà Nội",
    link: "",
    img: "../image-3/giaitri7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/giaitri8.webp",
    link: "",
    title:
      'Con gái Hà Kiều Anh được ví "hoa hậu nhí", 11 tuổi du lịch nhiều nước',
    text: "Ở tuổi 11, Huỳnh Viann - con gái út của Hoa hậu Kiều Anh - sở hữu nhan sắc trong trẻo, vóc dáng cao ráo, thường cùng mẹ khám phá nhiều điểm đến nổi tiếng thế giới.",
  },
  {
    img: "../image-3/giaitri9.webp",
    link: "",
    title: "Nhã Phương mặc gợi cảm, nổi bật giữa dàn mỹ nhân Việt",
    text: "Diễn viên Nhã Phương gây chú ý khi xuất hiện trên thảm đỏ show thời trang với chiếc đầm gợi cảm. Gần đây, bà xã của Trường Giang liên tục làm mới bản thân với những phong cách thời trang khác nhau.",
  },
  {
    img: "../image-3/giaitri10.webp",
    link: "",
    title: "Thí sinh Hoa hậu Việt Nam khoe vóc dáng trong phần thi áo tắm",
    text: "25 thí sinh lọt vào chung kết Hoa hậu Việt Nam 2026 khoe hình thể trong phần thi áo tắm tối 7/11 ở Hải Phòng.",
  },
  {
    img: "../image-3/giaitri11.webp",
    link: "",
    title:
      "Kỹ sư Việt rời nghề bảo dưỡng máy bay, bén duyên phim hoạt hình Hollywood",
    text: 'Từng làm kỹ sư bảo dưỡng máy bay, Nguyễn Hữu Nghĩa rẽ hướng sang làm kỹ xảo hoạt hình và đứng sau nhiều cảnh quay trong loạt phim "Moana 2", "Zootopia 2"...',
  },
  {
    img: "../image-3/giaitri12.webp",
    link: "",
    title: "Gia đình, người thân vỡ òa khi Nguyễn Yến Trang đăng quang Hoa hậu",
    text: "Gia đình, người thân Nguyễn Yến Trang vỡ òa trong niềm vui và xúc động khi cô được xướng tên ở ngôi vị cao nhất cuộc thi Hoa hậu Việt Nam 2026.",
  },
  {
    img: "../image-3/giaitri13.webp",
    link: "",
    title:
      "Dàn hoa hậu và á hậu đọ sắc trên thảm đỏ chung kết Hoa hậu Việt Nam 2026",
    text: "Tối 7/11, thảm đỏ chung kết Hoa hậu Việt Nam 2026 tại Hải Phòng quy tụ nhiều hoa hậu, á hậu nổi tiếng. Mai Phương, Huỳnh Thị Thanh Thủy và Hà Trúc Linh thu hút sự chú ý với những diện mạo nổi bật.",
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
    category: "Hậu trường",
    catLink: "",
    title: "Cô gái Hà Nội 20 tuổi đăng quang Hoa hậu Việt Nam 2026",
    link: "",
    img: "../image-3/giaitri14.webp",
  },
  {
    category: "Sách hay",
    catLink: "",
    title:
      'Con đường "không giống ai" của nhà thơ vừa giành giải Nobel Văn học',
    link: "",
    img: "../image-3/giaitri15.webp",
  },
  {
    category: "Điện ảnh",
    catLink: "",
    title: "Nhiều hoa hậu thử vai Nam Phương, vì sao chọn Tăng Thanh Hà?",
    link: "",
    img: "../image-3/giaitri16.webp",
  },
  {
    category: "Âm nhạc",
    catLink: "",
    title:
      "Nam ca sĩ sở hữu tour diễn đắt nhất lịch sử, lập doanh thu 1,3 tỷ USD",
    link: "",
    img: "../image-3/giaitri17.webp",
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
