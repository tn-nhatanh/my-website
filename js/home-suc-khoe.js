const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/suckhoe1.webp",
    title: "Hơn 170.000 ca sốt xuất huyết, chuyên gia cảnh báo dịch khó lường",
    text: "Trong 10 tháng đầu năm, cả nước ghi nhận hơn 170.000 ca sốt xuất huyết, 21 người tử vong. Chuyên gia cảnh báo bệnh diễn biến khó lường, không còn theo mùa rõ rệt.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/suckhoe2.webp",
    title: "Thị lực giảm dần nhưng không đau mắt, có cần kiểm tra võng mạc?",
    link: "",
  },
  {
    card: 3,
    img: "../image-3/suckhoe3.webp",
    title: "Cơ sở y tế có 9 bác sĩ, chưa đáp ứng nhu cầu khám chữa bệnh",
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
    title: "Hai vợ chồng ngộ độc sau khi ăn củ ấu tàu, người vợ sốc tim",
    img: "../image-3/suckhoe4.webp",
    link: "",
  },
  {
    title:
      "Cảnh giác viêm đường hô hấp: 5 dấu hiệu thường gặp, 6 cách phòng ngừa",
    link: "",
    img: "../image-3/suckhoe5.webp",
  },
  {
    title:
      "Nhiều gia đình ở TPHCM đảo lộn cuộc sống vì sốt xuất huyết, tay chân miệng",
    link: "",
    img: "../image-3/suckhoe6.webp",
  },
  {
    title: "Những dấu hiệu cảnh báo ung thư nội mạc tử cung",
    link: "",
    img: "../image-3/suckhoe7.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/suckhoe8.webp",
    link: "",
    title:
      "Bộ Y tế yêu cầu điều tra nguồn gốc thực phẩm trong vụ nghi ngộ độc bánh mì",
    text: "Cục An toàn thực phẩm (Bộ Y tế) cho biết, trong vụ 17 người nhập viện nghi ngộ độc thực phẩm sau khi ăn bánh mì ở Quảng Ngãi, cần điều tra, truy xuất nguồn gốc thực phẩm.",
  },
  {
    img: "../image-3/suckhoe9.webp",
    link: "",
    title: "Nam sinh 18 tuổi phát hiện thiếu hụt hormone sinh dục nghiêm trọng",
    text: "18 tuổi nhưng chiều dài dương vật khi kéo căng chỉ khoảng 4cm, tinh hoàn nhỏ. Qua thăm khám, bác sĩ phát hiện nam sinh bị suy sinh dục thứ phát, nghi do hội chứng Kallmann.",
  },
  {
    img: "../image-3/suckhoe10.webp",
    link: "",
    title: "PGS.TS Vũ Văn Giáp phụ trách, điều hành Bệnh viện Bạch Mai",
    text: "Bộ trưởng Bộ Y tế Đào Hồng Lan vừa ký quyết định giao PGS.TS Vũ Văn Giáp, Phó Giám đốc phụ trách chuyên môn Bệnh viện Bạch Mai đảm nhiệm công việc phụ trách, điều hành Bệnh viện Bạch Mai từ ngày 6/11.",
  },
  {
    img: "../image-3/suckhoe11.webp",
    link: "",
    title: "Đề xuất cấm hoàn toàn trưng bày thuốc lá",
    text: "Dù đã có quy định giới hạn số lượng thuốc lá được trưng bày từ năm 2012, vi phạm vẫn diễn ra phổ biến. WHO và Bộ Y tế đề xuất cấm trưng bày để loại bỏ một kênh quảng cáo, tiếp thị sản phẩm này.",
  },
  {
    img: "../image-3/suckhoe12.webp",
    link: "",
    title: "Sửa Luật An toàn thực phẩm, chuyển mạnh từ tiền kiểm sang hậu kiểm",
    text: "Dự thảo Luật An toàn thực phẩm (sửa đổi) hướng tới thay đổi phương thức quản lý, tăng kiểm soát nguy cơ xuyên suốt chuỗi cung ứng, đồng thời đẩy mạnh hậu kiểm.",
  },
  {
    img: "../image-3/suckhoe13.webp",
    link: "",
    title:
      "Nhiều thuốc điều trị ung thư mới, người bệnh vẫn khó tiếp cận vì sao?",
    text: "Nhiều loại thuốc mới cập nhật trong phác đồ điều trị ung thư trên thế giới. Với ung thư tụy, trước đây người bệnh ở giai đoạn muộn thường chỉ sống thêm 2-3 tháng, nay có thể kéo dài gấp 2-3 lần.",
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
