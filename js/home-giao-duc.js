const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/giaoduc1.webp",
    title: "Vụ nam sinh lớp 8 đánh bạn nhập viện: Sở GD&ĐT ra văn bản khẩn",
    text: "Sau vụ nam sinh lớp 8 chặn đường đấm, đá bạn cùng lớp phải nhập viện, Sở GD&ĐT tỉnh Cà Mau đã có văn bản yêu cầu chấn chỉnh công tác phòng, chống bạo lực học đường.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/giaoduc2.webp",
    title: "Nhiều quy định mới trong đào tạo giáo viên trình độ đại học",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/giaoduc3.webp",
    title:
      "Đề xuất chỉnh sửa điều khoản liên quan đến ngoại ngữ khi bổ nhiệm GS, PGS",
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
      "Vận động phụ huynh đóng hàng chục triệu tổ chức 20/11, xã yêu cầu hoàn trả",
    link: "",
    img: "../image-3/giaoduc4.webp",
  },
  {
    title:
      "Vụ thịt bở, nhũn nghi do lợn bị stress: Khi nào có kết quả xét nghiệm?",
    link: "",
    img: "../image-3/giaoduc5.webp",
  },
  {
    title:
      "Vụ nam sinh lớp 8 chặn đường đánh bạn nhập viện: Nguyên nhân ban đầu",
    link: "",
    img: "../image-3/giaoduc6.webp",
  },
  {
    title:
      "Vừa bị mời phụ huynh, nam sinh lớp 8 liền chặn đường đánh bạn nhập viện",
    link: "",
    img: "../image-3/giaoduc7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/giaoduc8.webp",
    link: "",
    title: "Nhóm sinh viên nghiên cứu tái chế xỉ thải làm vật liệu chống cháy",
    text: "Từ nghiên cứu trí tuệ nhân tạo, robot đến tận dụng xỉ thải công nghiệp làm vật liệu chống cháy, sinh viên mang đến nhiều đề tài gắn với thực tiễn tại Giải thưởng Khoa học và Công nghệ năm 2026.",
  },
  {
    img: "../image-3/giaoduc9.webp",
    link: "",
    title: "Thầy hiệu trưởng đi bộ 5km xuyên rừng vào bản họp phụ huynh",
    text: "Giữa địa hình miền núi cách trở, thầy hiệu trưởng cùng giáo viên ở Thanh Hóa đi bộ 5-6km xuyên rừng vào bản họp phụ huynh, lắng nghe tâm tư, nguyện vọng của người dân.",
  },
  {
    img: "../image-3/giaoduc10.webp",
    link: "",
    title:
      "Vụ thịt bở, nhũn nghi do lợn bị stress: Đổi nhà cung cấp, gửi mẫu kiểm tra",
    text: "Liên quan đến vụ thịt lợn đưa vào bếp ăn Trường Mầm non Phương Liệt (Hà Nội) bị bở, nhũn bất thường, nghi do lợn bị stress, đoàn kiểm tra liên ngành đã niêm phong 150 gram mẫu thịt gửi đi kiểm nghiệm.",
  },
  {
    img: "../image-3/giaoduc11.webp",
    link: "",
    title:
      'Nghịch lý văn bằng 2 Ngôn ngữ Anh: Học viên TPHCM "cắp cặp" về miền Tây học',
    text: "Là trung tâm giáo dục đại học lớn của khu vực phía Nam, nhưng TPHCM lại có nghịch lý nhiều học viên “cắp cặp” xuống các tỉnh miền Tây học văn bằng 2 Ngôn ngữ Anh.",
  },
  {
    img: "../image-3/giaoduc12.webp",
    link: "",
    title:
      "Nam sinh lớp 11 nhận Huân chương lao động hạng Nhất nhờ say mê Aerobic",
    text: "Chưa đầy một năm, nam sinh Lê Nhật Minh Khôi (TPHCM) đã mang về 9 huy chương quốc tế và trong nước tại các giải thể dục Aerobic. Em vừa được Chủ tịch nước tặng Huân chương lao động hạng Nhất.",
  },
  {
    img: "../image-3/giaoduc13.webp",
    link: "",
    title:
      "Tiến sĩ Việt viết 2 từ đặc biệt trong luận án tại Nhật gây xúc động",
    text: "Trong luận án tiến sĩ tại Nhật, Lê Hoài Phong dành những dòng cuối cùng để cảm ơn bà ngoại quá cố, người đã chăm sóc, yêu thương và âm thầm nâng đỡ anh từ thuở nhỏ.",
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
    category: "Góc phụ huynh",
    catLink: "",
    title: "Môn liên kết: Có lấy lại ý kiến phụ huynh trước khi triển khai?",
    link: "",
    img: "../image-3/giaoduc14.webp",
  },
  {
    category: "Khuyến học",
    catLink: "",
    title: "Sinh viên xử lý tình huống khi bị ghép ảnh nhạy cảm bằng AI",
    link: "",
    img: "../image-3/giaoduc15.webp",
  },
  {
    category: "Gương sáng",
    catLink: "",
    title: "Nhóm sinh viên nghiên cứu tái chế xỉ thải làm vật liệu chống cháy",
    link: "",
    img: "../image-3/giaoduc16.webp",
  },
  {
    category: "Giáo dục - Nghề nghiệp",
    catLink: "",
    title:
      "Giáo viên nào được thay đổi chức danh nghề nghiệp, bậc lương từ 30/10?",
    link: "",
    img: "../image-3/giaoduc17.webp",
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
