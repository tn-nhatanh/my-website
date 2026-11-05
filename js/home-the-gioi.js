const WorldHeadCards = [
  {
    card: 1,
    img: "./ảnh/elon-musk-reuters1-cropped-1793783589320.webp",
    title: "Tỷ phú Elon Musk lên tiếng sau chiến thắng của đảng Dân chủ",
    text: "Tỷ phú công nghệ Elon Musk nói đùa rằng những nỗ lực của ông đã không giúp đảng Cộng hòa Mỹ giành chiến thắng trước đảng Dân chủ trong cuộc bầu cử quốc hội vừa diễn ra.",
    link: "",
  },
  {
    card: 2,
    img: "./ảnh/my-tinh-nem-bom-tro-lai-lanh-tu-toi-cao-iran-gui-thong-diep-danh-thep-cropped-1790596531459.webp",
    title: "Lãnh tụ Tối cao Iran gửi thông điệp cảnh báo Mỹ sau bầu cử giữa kỳ",
    link: "",
  },
  {
    card: 3,
    img: "./ảnh/peskovafp-cropped-1773839337265.webp",
    title: "Phản ứng của Nga, Trung Quốc về kết quả bầu cử giữa kỳ Mỹ",
    link: "",
  },
];

const WorldHeadHTML = `
  <div class="card-big">
    <img src="${WorldHeadCards[0].img}" alt="" />
    <a href="${WorldHeadCards[0].link}" class="title-card-big">${WorldHeadCards[0].title}</a>
    <p class="text-card">${WorldHeadCards[0].text}</p>
  </div>
  <div class="list-mini-card">
    <div class="mini-card card1">
      <img src="${WorldHeadCards[1].img}" alt="" />
      <a href="${WorldHeadCards[1].link}" class="text-mini-card">${WorldHeadCards[1].title}</a>
    </div>
    <div class="mini-card card2">
      <img src="${WorldHeadCards[2].img}" alt="" />
      <a href="${WorldHeadCards[2].link}" class="text-mini-card">${WorldHeadCards[2].title}</a>
    </div>
  </div>
`;

document.getElementById("world-spotlightID").innerHTML = WorldHeadHTML;

const globalNewsList = [
  {
    title:
      "Tổng thống Donald Trump đối mặt thử thách lớn: Cục diện quyền lực mới",
    link: "",
    img: "./ảnh/biz-trump-1014100170-16030708763902005822642-1793788048211.webp",
  },
  {
    title:
      "Kinh tế châu Á duy trì đà tăng trưởng vững chắc bất chấp biến động tỷ giá",
    link: "",
    img: "./ảnh/image-17-1793698193122.webp",
  },
  {
    title:
      '"Làn sóng xanh" tiến vào "thành trì đỏ": Lý do đảng Dân chủ Mỹ thắng đậm',
    link: "",
    img: "./ảnh/dang-dan-chu-cropped-1793781684963.webp",
  },
  {
    title: "“Làn sóng xanh” bao trùm đêm bầu cử giữa kỳ tại Mỹ",
    link: "",
    img: "./ảnh/bau-cu-reuters09-1793779495886.webp",
  },
];

let globalCardsHTML = "";
for (let i = 0; i < globalNewsList.length; i++) {
  globalCardsHTML += `<div class="card-list"><img src="${globalNewsList[i].img}" alt=""><a href="${globalNewsList[i].link}">${globalNewsList[i].title}</a></div>`;
}
document.getElementById("world-subID").innerHTML = globalCardsHTML;

const WorldNewsContainerData = [
  {
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    link: "",
    title:
      'Tổng thư ký LHQ: "Cần hành động tức thì trước nguy cơ khủng hoảng lương thực"',
    text: "Phát biểu tại phiên họp đặc biệt, người đứng đầu Liên Hợp Quốc kêu gọi các quốc gia dỡ bỏ rào cản xuất khẩu ngũ cốc và tăng cường đầu tư vào chuỗi cung ứng nông nghiệp bền vững.",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    link: "",
    title:
      "Thị trường tài chính châu Âu phản ứng tích cực sau quyết định hạ lãi suất",
    text: "Ngân hàng Trung ương châu Âu đưa ra động thái nới lỏng chính sách tiền tệ nhằm kích thích tăng trưởng kinh tế và giảm áp lực chi phí vay tiêu dùng cho các doanh nghiệp.",
  },
  {
    img: "./ảnh/korea_japan_1.jpg",
    link: "",
    title:
      "Nhật Bản và Hàn Quốc đẩy mạnh hợp tác công nghệ năng lượng hydrogen sạch",
    text: "Hai quốc gia đặt mục tiêu thương mại hóa chuỗi cung ứng hydro quy mô lớn vào cuối thập kỷ, hướng tới việc giảm thiểu triệt để sự phụ thuộc vào nhiên liệu hóa thạch nhập khẩu.",
  },
  {
    img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    link: "",
    title:
      "Các nhà khoa học phát hiện giải pháp đột phá trong việc thu hồi carbon trong khí quyển",
    text: "Nghiên cứu công bố trên tạp chí Nature chỉ ra vật liệu xốp sinh học mới có thể lọc và cô lập carbon với chi phí thấp hơn 40% so với các phương pháp công nghiệp hiện nay.",
  },
  {
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    link: "",
    title:
      "Diễn đàn Kinh tế Thế giới: Cơ hội và thách thức từ làn sóng AI toàn diện",
    text: "Các chuyên gia kinh tế thảo luận sâu về tác động của trí tuệ nhân tạo đối với thị trường lao động toàn cầu, nhấn mạnh nhu cầu tái đào tạo kỹ năng cho hàng triệu lao động.",
  },
  {
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    link: "",
    title:
      "Hiệp ước bảo vệ đại dương quốc tế chính thức có hiệu lực với hơn 60 quốc gia phê chuẩn",
    text: "Văn kiện lịch sử này thiết lập khuôn khổ pháp lý ràng buộc đầu tiên nhằm bảo tồn đa dạng sinh học tại các vùng biển quốc tế nằm ngoài quyền tài phán quốc gia.",
  },
];
let worldContainerHTML = "";

for (let i = 0; i < WorldNewsContainerData.length; i++) {
  worldContainerHTML += `
    <div class="card-Container">
        <img src="${WorldNewsContainerData[i].img}" alt="" />
        <div class="info-box">
          <a href="${WorldNewsContainerData[i].link}">${WorldNewsContainerData[i].title}</a>
          <p>${WorldNewsContainerData[i].text}</p>
        </div>
    </div>
  `;
}
document.getElementById("WorldListContainerID").innerHTML = worldContainerHTML;

const worldTopicsData = [
  {
    category: "QUÂN SỰ",
    catLink: "",
    title: "Trinh sát Ukraine kể về nhiệm vụ tử thần",
    link: "",
    img: "./ảnh/linh-trinh-sat-ukraineki-cropped-1793766092737.webp",
  },
  {
    category: "PHÂN TÍCH - BÌNH LUẬN",
    catLink: "",
    title:
      "Tổng thống Donald Trump đối mặt thử thách lớn: Cục diện quyền lực mới",
    link: "",
    img: "./ảnh/biz-trump-1014100170-16030708763902005822642-1793788048211 (1).webp",
  },
  {
    category: "THẾ GIỚI ĐÓ ĐÂY",
    catLink: "",
    title:
      "Vụ rơi máy bay ở Mỹ: Phát hiện bất ngờ và tiếng hét của phi công phụ",
    link: "",
    img: "./ảnh/investigators-examine-site-learjet-crashed-112054387147949e-1793776648359.webp",
  },
  {
    category: "KIỀU BÀO",
    catLink: "",
    title:
      "Kiến tạo cơ chế xây dựng mạng lưới chuyên gia kiều bào về công nghệ",
    link: "",
    img: "./ảnh/thu-truong-ngoai-giaobng-cropped-cropped-1786416171552.webp",
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
