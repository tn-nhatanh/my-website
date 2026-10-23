function slider() {
  const slide = document.querySelector(".slide");

  document.getElementById("next").onclick = () => {
    slide.scrollLeft += 450;
  };

  document.getElementById("prev").onclick = () => {
    slide.scrollLeft -= 450;
  };
}

slider();

const sliderList = [
  {
    id: 1,
    img: "image/ezgif-14f1e3a989c6c16c-1792490875916.webp",
    Link: "https://dantri.com.vn/doi-song/cu-ong-80-tuoi-van-tang-hoa-nguoi-vo-da-khuat-moi-dip-2010-20261020171722264.htm",
    text: "Cụ ông 80 tuổi vẫn tặng hoa người vợ đã khuất mỗi dịp 20/10",
  },
  {
    id: 2,
    img: "image/giphy-ezgifcom-crop-1792421545736.webp",
    Link: "https://dantri.com.vn/thoi-tiet/sieu-bao-champi-manh-tro-lai-co-the-dat-cap-17-20261019215427276.htm",
    text: "Siêu bão Champi mạnh trở lại, có thể đạt cấp 17 vào tối 19/10",
  },
  {
    id: 3,
    img: "image/dony-cropped-1792484318889.webp",
    Link: "https://dantri.com.vn/kinh-doanh/de-xuat-thuong-tet-vao-thang-11-de-kich-cau-doanh-nghiep-noi-gi-20261020154413498.htm",
    text: "Đề xuất thưởng Tết vào tháng 11 để kích cầu, doanh nghiệp nói gì?",
  },
  {
    id: 4,
    img: "image/202610201613414360179248708600025233514917617721362523351491761772136ed85e761b4102fa746c1dce11d20bff7-edited-1792488993010.webp",
    Link: "https://dantri.com.vn/thoi-su/tinh-gia-dien-theo-gio-rat-kho-doi-het-gio-cao-diem-moi-hoc-moi-tam-20261020164239999.htm",
    text: 'Tính giá điện theo giờ: "Rất khó đợi hết giờ cao điểm mới học, mới tắm"',
  },
  {
    id: 5,
    img: "image/kham-benh-5-1783571781321-1792498232871.webp",
    Link: "https://dantri.com.vn/suc-khoe/su-thau-hieu-giup-cac-bong-hong-nganh-y-them-tan-tam-cong-hien-20261020191206547.htm",
    text: 'Sự thấu hiểu giúp các "bóng hồng" ngành y thêm tận tâm cống hiến',
  },
];

function sliderHTML() {
  HTMLslider = "";
  for (let i = 0; i < sliderList.length; i++) {
    HTMLslider += `<li  class="item" id="slide-${sliderList[i].id}"><img src="${sliderList[i].img}" alt=""><a href="${sliderList[i].Link}" class="link-slider"><span class="text-item" >${sliderList[i].text}</span></a></li>`;
  }
  document.getElementById("sliderID").innerHTML = HTMLslider;
}
sliderHTML();
