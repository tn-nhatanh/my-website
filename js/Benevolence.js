const listHeader = [
  { text: "Câu chuyện", link: "" },
  { text: "Kỹ thuật", link: "" },
  { text: "Công nghệ ô tô", link: "" },
  { text: "Lái xe", link: "" },
];

listhead = "";
for (let i = 0; i < listHeader.length; i++) {
  listhead += `<div class="text"><a href="${listHeader[i].link}">${listHeader[i].text}</a></div>`;
}
const header = `
            <a href="../index.html"><img src="../image/logo-3png-1752569761698.webp" alt="" /></a>
        <div class="text-header">
          <img src="../image2/static-logo-nhan-ai.1-0-1.81cfead10dadfa8606b4.png" alt="" />
          <p>Xe Plus</p>
          ${listhead}
        </div>
        <div class="login"><a href="">Đăng nhập</a></div>
`;

document.getElementById("headerID").innerHTML = header;
const listcardright = [
  {
    title: "Loạt ô tô mới dự kiến ra mắt Việt Nam tháng 11: Hầu hết là SUV",
    img: "../ảnh/mazda-cx-5-2-1793588851935.webp",
    link: "#",
  },
  {
    title: "Ô tô điện lần đầu vượt tổng doanh số xe xăng và diesel tại EU",
    img: "../ảnh/evclms-cropped-1793589941954.webp",
    link: "#",
  },
  {
    title: "Bồ Đào Nha dự kiến hỗ trợ tới 80% chi phí mua xe điện",
    img: "../ảnh/dacia-spring-electric-facelift-2024-1793546399917.webp",
    link: "#",
  },
  {
    title: "Gen Z mua BMW 13 năm tuổi giá gần 300 triệu đồng",
    img: "../ảnh/gen-z-bo-xe-han-sang-bmw-200-trieu-dong-tu-sua-de-kiem-niem-vui-anh1-1793426099845.webp",
    link: "#",
  },
];

const listmini3 = [
  {
    title:
      "Top 10 xu hướng công nghệ hàng đầu của ô tô Trung Quốc trong năm 2027",
    img: "../ảnh/oto-tqscmp-1785991868096.webp",
    link: "#",
  },
  {
    title: "Toyota hybrid thế hệ mới sẽ tiết kiệm nhiên liệu hơn",
    img: "../ảnh/can-canh-suv-toyota-land-cruiser-ban-hybrid-tai-viet-nam-1-edited-1789832335836-1793333807954.webp",
    link: "#",
  },
  {
    title: "Lịch sử ra đời kỳ lạ của nhân vật Người lốp Michelin",
    img: "../ảnh/michelinafp-1792824742211.webp",
    link: "#",
  },
];

const card = [
  {
    title: "Ô tô bay Tesla Roadster định nghĩa lại khái niệm siêu xe",
    img: "../ảnh/tesla-roadster-1792137953813.webp",
    text: "Tesla ra mắt Roadster mới bằng màn trình diễn nhào lộn và bay lượn vô tiền khoáng hậu. Tuy nhiên, vẫn còn nhiều câu hỏi bỏ ngỏ, dù hãng khẳng định mẫu siêu xe này có thể bay.",
  },
  {
    title:
      'Cơ chế đằng sau màn "lộn ngược, xoay vòng" trên không của Tesla Roadster',
    img: "../ảnh/noname-ezgifcom-video-to-gif-converter-1-1792227205225.webp",
  },
  { title: "ff", img: "ffff" },
  { title: "ff", img: "" },
];

let listright = "";
for (let i = 0; i < listcardright.length; i++) {
  listright += `
    <div class="card-left">
        <img src="${listcardright[i].img}" alt="" />
        <a href="${listcardright[i].link}">${listcardright[i].title}</a>
    </div>
  `;
}

let listmini_3 = "";
for (let i = 0; i < listmini3.length; i++) {
  listmini_3 += `
    <div class="card-right-mini">
        <img src="${listmini3[i].img}" alt="" />
        <a href="${listmini3[i].link}">${listmini3[i].title}</a>
    </div>
  `;
}

const card_content = `
    <div class="card-big">
        <img src="${card[0].img}" alt="" />
        <a class="title-card-big">${card[0].title}</a>
        <p class="text-big">${card[0].text}</p>
    </div>
    <div class="group-mini-card">
        <div class="card-right">
            <div class="card-right-big">
                <img src="${card[1].img}" alt="" />
                <a>${card[1].title}</a>
            </div>
            <div class="list-card-right-mini" id="list-card-right-mini-id">
                ${listmini_3}
            </div>
        </div>
        <div class="card-right">
            ${listright}
        </div>
    </div>
`;

document.getElementById("card-1Id").innerHTML = card_content;

const carsData = [
  {
    name: "Porsche 911 Carrera",
    price: "8.500.000.000 đ",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400",
  },
  {
    name: "Mercedes-AMG G63",
    price: "11.750.000.000 đ",
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=400",
  },
  {
    name: "Tesla Model S Plaid",
    price: "4.250.000.000 đ",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400",
  },
];

const carListings = [
  {
    name: "Honda SUV 7 chỗ mới",
    price: "Giá bán: Sắp công bố",
    image: "../image-3/otoxemay2.webp",
  },
  {
    name: "Tesla Cybertruck",
    price: "Giá bán: Đang cập nhật",
    image: "../image-3/otoxemay3.webp",
  },
  {
    name: "Ô tô điện Volvo",
    price: "Giá bán cao nhất 3,5 tỷ đồng",
    image: "../image-3/otoxemay5.webp",
  },
];

const sliderItems = document.getElementById("sliderRightID");
const carSliders = [
  {
    title: "Danh Sách Xe Nổi Bật",
    cars: carsData,
    pricePrefix: "Thanh toán: ",
    buttonText: "Thanh Toán Cọc",
    messagePrefix: "Đã chọn thanh toán cho: ",
  },
  {
    title: "Xe Đáng Quan Tâm",
    cars: carListings,
    buttonText: "Tìm hiểu thêm",
    messagePrefix: "Thông tin xe: ",
  },
];

sliderItems.innerHTML = carSliders
  .map((slider, sliderIndex) => {
    const sliderId = `carSlider${sliderIndex}`;
    const slidesId = `${sliderId}Slides`;
    const dotsId = `${sliderId}Dots`;
    const slides = slider.cars
      .map(
        (car, index) => `
          <div class="card">
            <img src="${car.image}" alt="${car.name}" />
            <div class="card-body">
              <h3 class="card-title">${car.name}</h3>
              <div class="card-price">${slider.pricePrefix || ""}${car.price}</div>
              <button class="btn-pay" type="button" data-car-index="${index}">
                ${slider.buttonText}
              </button>
            </div>
          </div>
        `,
      )
      .join("");
    const dots = slider.cars
      .map(
        (_, index) =>
          `<span class="dot${index === 0 ? " active" : ""}" data-slide-index="${index}"></span>`,
      )
      .join("");

    return `
      <div class="slider-container" id="${sliderId}">
        <div class="slider-header">
          <h2 class="slider-title">${slider.title}</h2>
          <div class="nav-buttons">
            <button class="nav-btn" type="button" data-direction="-1">&#8592;</button>
            <button class="nav-btn" type="button" data-direction="1">&#8594;</button>
          </div>
        </div>
        <div class="header-line"></div>
        <div class="slider-wrapper">
          <div class="slides" id="${slidesId}">${slides}</div>
        </div>
        <div class="dots-container" id="${dotsId}">${dots}</div>
      </div>
    `;
  })
  .join("");

carSliders.forEach((slider, sliderIndex) => {
  const sliderId = `carSlider${sliderIndex}`;
  const slidesId = `${sliderId}Slides`;
  const dotsId = `${sliderId}Dots`;
  const sliderElement = document.getElementById(sliderId);
  const slidesElement = document.getElementById(slidesId);
  const dotsElement = document.getElementById(dotsId);
  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = (index + slider.cars.length) % slider.cars.length;
    slidesElement.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsElement.querySelectorAll(".dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === currentIndex);
    });
  }

  sliderElement.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () =>
      goToSlide(currentIndex + Number(button.dataset.direction)),
    );
  });
  dotsElement.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });
  sliderElement.querySelectorAll(".btn-pay").forEach((button) => {
    button.addEventListener("click", () => {
      const car = slider.cars[Number(button.dataset.carIndex)];
      alert(`${slider.messagePrefix}${car.name}`);
    });
  });

  setInterval(() => goToSlide(currentIndex + 1), 3000);
});

const benevolenceArticles = [
  {
    img: "../image-3/otoxemay8.webp",
    title:
      "Nissan Patrol: Hãng chưa xác nhận, đại lý vẫn rao, tư nhân báo chênh",
    text: "Nissan Patrol được định vị cạnh tranh trực tiếp với Toyota Land Cruiser, từng được các đại lý nhận đặt hàng vào cuối năm 2024 nhưng sau đó phải hoàn cọc cho khách Việt vào giữa năm 2025.",
  },
  {
    img: "../image-3/otoxemay9.webp",
    title:
      "Innova Cross Hybrid mới ra mắt tại Thái Lan, Innova thêm bản LIMO tại Ấn Độ",
    text: "Nâng cấp đáng chú ý trên Innova Cross Hybrid vừa ra mắt tại Thái Lan nằm ở pin và tính năng điều khiển từ xa, trong khi bản Innova LIMO mới tại Ấn Độ hướng tới nhóm khách hàng kinh doanh vận tải.",
  },
  {
    img: "../image-3/otoxemay10.webp",
    title: "Cận cảnh Honda SH đời 2027 màu đen mới tại đại lý",
    text: "Dòng xe tay ga Honda SH125i/160i đời 2027 được bổ sung tùy chọn màu đen “Aura Black Edition” cho phiên bản Thể thao. Xe có giá từ 87,29 triệu đồng.",
  },
  {
    img: "../image-3/otoxemay11.webp",
    title: "Santa Fe giúp Hyundai ghi nhận doanh số kỷ lục tại Mỹ",
    text: "Với 17.959 xe bán ra trong tháng 10, mẫu Santa Fe đã giúp Hyundai ghi nhận doanh số theo tháng kỷ lục tại thị trường Mỹ.",
  },
  {
    img: "../image-3/otoxemay12.webp",
    title:
      "Harley-Davidson ra mắt Sprint 440 cho người mới chơi, liệu có về Việt Nam?",
    text: "Harley-Davidson Sprint 440 sở hữu thiết kế cruiser đặc trưng của hãng mô tô Hoa Kỳ, gợi nhớ nhiều đến mẫu Iron 883 từng được phân phối tại Việt Nam.",
  },
  {
    img: "../image-3/otoxemay13.webp",
    title: "Loạt xe tay ga mới đáng chú ý vừa ra mắt tại triển lãm EICMA 2026",
    text: "Triển lãm mô tô quốc tế EICMA 2026 tại Milan (Italy) chứng kiến màn đổ bộ của hàng loạt mẫu xe tay ga mới, từ Honda, Yamaha, Piaggio đến Aprilia, trải dài từ xe điện đô thị đến tay ga địa hình.",
  },
];

const lookupContainer = document.getElementById("BenevolenceLookupID");
lookupContainer.innerHTML = `
  <div class="benevolence-lookup-heading">
    <span class="benevolence-lookup-icon" aria-hidden="true">
      <i class="fa-solid fa-car-side"></i>
    </span>
    <h2>Tra cứu xe</h2>
  </div>
  <div class="benevolence-lookup-field">
    <input
      type="search"
      placeholder="Nhập tên xe"
      autocomplete="off"
      aria-label="Nhập tên xe"
    />
    <button class="benevolence-lookup-search" type="button" aria-label="Tra cứu">
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    </button>
  </div>
  <div class="benevolence-lookup-footer">
    <p>Tìm nhanh thông tin xe</p>
    <div class="benevolence-lookup-controls">
      <button type="button" aria-label="Trước">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button type="button" aria-label="Tiếp theo">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
`;

let benevolenceArticlesHTML = "";
for (let i = 0; i < benevolenceArticles.length; i++) {
  const article = benevolenceArticles[i];
  benevolenceArticlesHTML += `
    <div class="benevolence-article-card">
      <img src="${article.img}" alt="${article.title}" />
      <div class="benevolence-article-info">
        <a href="#">${article.title}</a>
        <p>${article.text}</p>
      </div>
    </div>
  `;
}
document.getElementById("BenevolenceArticlesID").innerHTML =
  benevolenceArticlesHTML;

const benevolenceTopics = [
  {
    category: "Thị trường xe",
    title: "VinFast đang kinh doanh thế nào tại các thị trường nước ngoài?",
    img: "../image-3/otoxemay14.webp",
  },
  {
    category: "Chọn xe",
    title: "Triumph Bonneville 2008: “Lãng tử” 18 tuổi, hoài cổ và phong trần",
    img: "../image-3/otoxemay15.webp",
  },
  {
    category: "Xe điện",
    title: "Ô tô điện mới của Volvo có giá cao nhất 3,5 tỷ đồng",
    img: "../image-3/otoxemay16.webp",
  },
  {
    category: "Chăm xe",
    title: "Nên về số N, số P hay giữ số D khi dừng ô tô chờ đèn đỏ?",
    img: "../image-3/otoxemay17.webp",
  },
];

let benevolenceTopicsHTML = "";
for (let i = 0; i < benevolenceTopics.length; i++) {
  const topic = benevolenceTopics[i];
  benevolenceTopicsHTML += `
    <div class="benevolence-topic-card">
      <span class="benevolence-topic-category">${topic.category}</span>
      <img src="${topic.img}" alt="${topic.title}" />
      <a href="#">${topic.title}</a>
    </div>
  `;
}
document.getElementById("BenevolenceTopicsID").innerHTML =
  benevolenceTopicsHTML;

const footerInfo = [
  "Cơ quan của Bộ Nội vụ",
  "Tổng biên tập: Phạm Tuấn Anh",
  "Giấy phép hoạt động báo điện tử Dân trí số 15/GP-BVHTTDL Hà Nội, ngày 14-4-2025",
  "Địa chỉ tòa soạn: Số 48 ngõ 2 phố Giảng Võ, phường Giảng Võ, thành phố Hà Nội",
  "Điện thoại: 024-3736-6491. Hotline HN: 0973-567-567",
  "Văn phòng đại diện miền Nam: Số 51-53 Võ Văn Tần, phường Xuân Hòa, thành phố Hồ Chí Minh",
  "Hotline TPHCM: 0974-567-567",
  "Email: info@dantri.com.vn",
];

document.getElementById("footerID").innerHTML = `
  <div class="footer-logo">
    <img src="../image/logo-3png-1752569761698.webp" alt="Dân trí" />
  </div>
  <p class="text-infor">${footerInfo.join("<br>")}</p>
`;
