const listHeader = [
  { text: "Xe bay", link: "" },
  { text: "Xe lội nước", link: "" },
  { text: "Xe đào hầm", link: "" },
  { text: "Xe không kính", link: "" },
];

listhead = "";
for (let i = 0; i < listHeader.length; i++) {
  listhead += `<div class="text"><a href="${listHeader[i].link}">${listHeader[i].text}</a></div>`;
}
const header = `
            <a href="index.html"><img src="image/logo-3png-1752569761698.webp" alt="" /></a>
        <div class="text-header">
          <img src="image2/static-logo-nhan-ai.1-0-1.81cfead10dadfa8606b4.png" alt="" />
          <p>Tấm lòng Diesel</p>
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

const slidesContainer = document.getElementById("slides");
const dotsContainer = document.getElementById("dotsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function renderUI() {
  carsData.forEach((car, index) => {
    slidesContainer.innerHTML += `
      <div class="card">
        <img src="${car.image}" alt="${car.name}">
        <div class="card-body">
          <h3 class="card-title">${car.name}</h3>
          <div class="card-price">Thanh toán: ${car.price}</div>
          <button class="btn-pay" onclick="alert('Đã chọn thanh toán cho: ${car.name}')">Thanh Toán Cọc</button>
        </div>
      </div>
    `;

    dotsContainer.innerHTML += `<span class="dot ${index === 0 ? "active" : ""}" onclick="goToSlide(${index})"></span>`;
  });
}

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carsData.length) {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carsData.length - 1;
  }
  updateSlider();
}

function goToSlide(slideIndex) {
  currentIndex = slideIndex;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);

renderUI();
