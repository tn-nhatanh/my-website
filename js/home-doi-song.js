const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/doisong1.webp",
    title:
      "Hé lộ 20 phút nghẹt thở cứu cơ trưởng Anh bị hút khỏi buồng lái năm 1990",
    text: "Chỉ 13 phút sau khi cất cánh, kính chắn gió buồng lái bất ngờ vỡ tung, khiến cơ trưởng một chuyến bay của British Airways bị hút nửa người ra ngoài trời lạnh giá.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/doisong2.webp",
    title:
      "Cậu bé Hà Nội lên hồ Gươm luyện nói tiếng Anh với khách Tây, gây sốt báo Mỹ",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/doisong3.webp",
    title: "Căn nhà 68m2 có giá 42.000 đồng, 1.677 người đấu giá ở Trung Quốc",
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
    title: "Kiếm tiền triệu từ nghề cắt cành tràm ven hồ Trị An",
    link: "",
    img: "../image-3/doisong4.webp",
  },
  {
    title: "Quần thể chùa Khmer cổ khiến du khách mê mẩn ở miền Tây",
    link: "",
    img: "../image-3/doisong5.webp",
  },
  {
    title: "Bố mẹ nuôi người Pháp bật khóc khi con gái tìm được gia đình Việt",
    link: "",
    img: "../image-3/doisong6.webp",
  },
  {
    title:
      'Đắk Lắk hỗ trợ hơn 15 tỷ đồng cho khu dân cư tổ chức "Bữa cơm đại đoàn kết"',
    link: "",
    img: "../image-3/doisong7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/doisong8.webp",
    link: "",
    title:
      "Phát hiện vật thể nghi cổ vật bằng gỗ dài gần 9m dưới lòng sông Kỳ Lộ",
    text: "Một vật thể cổ bằng gỗ dài gần 9m, có hình dáng giống chiếc thuyền độc mộc, mới được phát hiện ở độ sâu 10m dưới lòng sông Kỳ Lộ (Đắk Lắk) trong quá trình khai thác cát.",
  },
  {
    img: "../image-3/doisong9.webp",
    link: "",
    title:
      "Cuộc gọi từ báo Dân trí và phút đoàn tụ như mơ của gia đình 28 năm chia ly",
    text: "Sau quá trình tìm kiếm và kết nối, báo Dân trí đã tìm được người thân cho Cù Thị Hiền - cô gái được cho đi làm con nuôi ở Pháp - cách đây 28 năm. Cuộc trở về khiến cả nhà ngỡ như một giấc mơ.",
  },
  {
    img: "../image-3/doisong10.webp",
    link: "",
    title:
      "Cô gái Nepal tỏ tình chàng trai Việt sau 1 tháng quen, làm đám cưới gây sốt",
    text: "Đặt chân đến Nepal trong chuyến hành hương đầu năm, Hà Văn Vàng không thể ngờ có thể tìm thấy một nửa định mệnh của đời mình, một cô gái Nepal xinh đẹp.",
  },
  {
    img: "../image-3/doisong11.webp",
    link: "",
    title:
      "Không dám mở điều hòa 10 năm vì trả nhầm tiền điện cho hàng xóm ở Mỹ",
    text: "Suốt 10 năm qua, người phụ nữ ở New York (Mỹ) luôn tìm cách tiết kiệm điện vì hóa đơn hàng tháng quá cao. Tới khi kiểm tra, cô tá hỏa khi phải trả nhầm tiền điện cho căn hộ phía trên.",
  },
  {
    img: "../image-3/doisong12.webp",
    link: "",
    title: "Chàng DJ người M'Nông cưới được vợ Tây nhờ... Google dịch",
    text: "Ấn tượng với một cô gái Tây trong buổi biểu diễn âm nhạc, dù không biết tiếng Anh, chàng DJ người M'Nông vẫn mạnh dạn tới chào hỏi. Buổi gặp gỡ ấy đã giúp cặp đôi nên duyên vợ chồng.",
  },
  {
    img: "../image-3/doisong13.webp",
    link: "",
    title:
      'Gia đình ở "đất vàng" phố cổ Hà Nội: 3m mặt tiền cho thuê 40 triệu đồng',
    text: 'Khu vực cho thuê có mặt tiền chỉ hơn 3m, nhưng gia đình bà Minh có nguồn thu nhập ổn định gần 40 triệu đồng mỗi tháng. Nhiều hộ dân khác cũng thừa nhận: "phố cổ ở khổ nhưng dễ kiếm tiền".',
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
    category: "Cộng đồng",
    catLink: "",
    title:
      "Trung Quốc: Tìm được bố mẹ ruột sau 34 năm, chàng trai từ mặt cha mẹ nuôi",
    link: "",
    img: "../image-3/doisong14.webp",
  },
  {
    category: "Thượng lưu",
    catLink: "",
    title:
      "Bí mật về gia tộc tỷ phú đầu tiên nước Mỹ giàu 7 đời, hơn 200 người thừa kế",
    link: "",
    img: "../image-3/doisong15.webp",
  },
  {
    category: "Nhà đẹp",
    catLink: "",
    title:
      "Chi 380 triệu đồng, cô gái Quảng Ninh biến dãy trọ hoang thành nơi ở đẹp",
    link: "",
    img: "../image-3/doisong16.webp",
  },
  {
    category: "Thượng lưu",
    catLink: "",
    title:
      "Chuyện đời nữ tỷ phú Trung Quốc là hiện tượng mạng, lấy chồng hơn 19 tuổi",
    link: "",
    img: "../image-3/doisong17.webp",
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
