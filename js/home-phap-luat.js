const AffairsHeadCards = [
  {
    card: 1,
    img: "../image-3/sang-cropped-1793879395136.webp",
    title: "Khởi tố nữ tài xế ô tô chèn ép, tông ngã thai phụ ở Lào Cai",
    text: "Sau khi hai bên lời qua tiếng lại, Sang đã điều khiển ô tô áp sát, chèn ép, không cho chị T. di chuyển lên phía trước. Có thời điểm, chiếc ô tô đánh lái, quay ngang trên đường.",
    link: "",
  },
  {
    card: 2,
    img: "../image-3/lethanhthan-cropped-1793849897165.webp",
    title: '"Đại gia điếu cày" Lê Thanh Thản sắp hầu tòa',
    link: "",
  },
  {
    card: 3,
    img: "../image-3/danh-nhau-cropped-1793862484999.webp",
    title:
      'Người đàn ông bị đấm liên tiếp vào mặt sau câu nói "đánh đi, đánh đi"',
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
    title: "Một người chết, 2 nghi phạm bị bắt sau cuộc nhậu ở TPHCM",
    link: "../image-3/tu-trai-sang-danh-thoi-ly-cua-edited-1793876677575.webp",
    img: "../image-3/tu-trai-sang-danh-thoi-ly-cua-edited-1793876677575.webp",
  },
  {
    title:
      "Tài xế trèo tường bỏ chạy khi cảnh sát yêu cầu lấy nước tiểu kiểm tra",
    link: "",
    img: "../image-3/tai-xe-treo-tuong-bo-chayquang-ngaicong-an-cung-cap-1793881593009.webp",
  },
  {
    title: "Vì sao Mr Pips và Mr Hunter bị đề nghị án chung thân?",
    link: "",
    img: "../image-3/ngo-nam-1793847596970.webp",
  },
  {
    title: "Xác minh clip nam nhân viên nghi chém hiệu trưởng rồi ôm mặt khóc",
    link: "",
    img: "../image-3/angiang-nhanvienyte-cropped-1793878714070.webp",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "../image-3/12aac6ad-154f-42ff-b32c-e4ad7b7314c8-1793868974878.webp",
    link: "",
    title: "TPHCM thu giữ hơn 46.000 bao thuốc lá lậu trong tháng 10",
    text: "Trong tháng 10, Công an TPHCM phát hiện 29 vụ vi phạm liên quan thuốc lá điếu nhập lậu và thuốc lá điện tử, tạm giữ lượng hàng hóa trị giá khoảng 1,5 tỷ đồng.",
  },
  {
    img: "../image-3/truong-my-lan-tuyen-an-edited-1793855442665.webp",
    link: "",
    title:
      "Vai trò bà Trương Mỹ Lan trong khoản nợ phình 22.500 tỷ của BMC tại SCB",
    text: "Thông qua mối quan hệ với bà Trương Mỹ Lan, nhóm lãnh đạo BMC đã lập hồ sơ vay vốn khủng tại SCB, đẩy dư nợ từ 4.400 tỷ lên hơn 22.500 tỷ đồng.",
  },
  {
    img: "../image-3/khoi-to-edited-1793875198237.webp",
    link: "",
    text: "Như nảy sinh ý định khai thác đất, đá tại khu vực đồi phía sau nhà ở Tuyên Quang để nghiền, thu hồi vàng bán kiếm lời. Sau đó, Như rủ một số người cùng tham gia thực hiện hoạt động khai thác này.",
    title:
      "Người đàn ông bị khởi tố vì nghiền đất đá để khai thác vàng trái phép",
  },
  {
    img: "../image-3/20261102231900-1793636347204.webp",
    link: "",
    title:
      "Luật sư đề nghị cho Mr Pips giám định tâm thần, Shark Bình xin mức án nhẹ",
    text: "Trong phần tranh luận, luật sư của Mr Pips tiếp tục đề nghị HĐXX xem xét cho bị cáo được khám, giám định sức khỏe tâm thần. Còn luật sư của Shark Bình xin tòa tuyên mức án thấp hơn khung hình phạt.",
  },
  {
    img: "../image-3/chu-thi-thanh-16-1793596214506.webp",
    link: "",
    title: "Nữ đại gia xăng dầu Chu Thị Thành lĩnh 18 năm tù",
    text: "Bị cáo buộc chiếm đoạt gần 79 tỷ đồng từ Quỹ Bình ổn giá xăng dầu và hưởng lợi hơn 20 tỷ đồng từ việc mua bán trái phép hóa đơn, bà Chu Thị Thành bị tuyên án 18 năm tù.",
  },
  {
    img: "../image-3/8878448229495402780152536031309517743013455n-edited-1793867407556.webp",
    link: "",
    title:
      "Xử phạt người đàn ông ở TPHCM vì đăng tin sai về việc xin phép xây dựng nhà",
    text: "Công an xã Phước Hải (TPHCM) vừa xử phạt một người đàn ông vì đăng tải thông tin sai sự thật trên mạng xã hội Facebook liên quan đến việc xin phép xây dựng nhà ở.",
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
