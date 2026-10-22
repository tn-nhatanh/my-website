const posts = [
  {
    id: 1,
    title: "Vụ học sinh lao lên bục giảng đánh cô giáo: Hiệu trưởng lên tiếng",
    time: "10 phút trước",
    link: "https://dantri.com.vn/giao-duc/vu-hoc-sinh-lao-len-buc-giang-danh-co-giao-hieu-truong-len-tieng-20261022210316355.htm",
    content:
      "(Dân trí) - Theo lãnh đạo nhà trường, mặc dù thương tích 12%, vẫn đang điều trị, băng bó vùng mũi nhưng cô giáo bị học sinh đánh rất mong muốn trở lại trường giảng dạy, trấn an tâm lý học sinh và phụ huynh.",
    img: "image/anh-man-hinh-2026-10-20-luc-21-cropped-1792548087916.webp",
  },
  {
    id: 2,
    title: "Bốn năm, một tấm bằng và câu hỏi của phụ huynh",
    time: "20 phút trước",
    link: "https://dantri.com.vn/tam-diem/bon-nam-mot-tam-bang-va-cau-hoi-cua-phu-huynh-20261022174746041.htm",
    content:
      "(Dân trí) - Sau bốn năm, điều phụ huynh mong đợi là con em mình có đủ năng lực bước vào nghề và tiếp tục phát triển. Vậy đại học có trách nhiệm với sinh viên đến đâu?",
    img: "image/sinh-vien-ngan-hang-1722262937570-1792665878041.webp",
  },
  {
    id: 3,
    title:
      "Thông cáo về chuyến thăm Liên minh châu Âu của Tổng Bí thư, Chủ tịch nước",
    time: "50 phút trước",
    link: "https://dantri.com.vn/thoi-su/thong-cao-ve-chuyen-tham-lien-minh-chau-au-cua-tong-bi-thu-chu-tich-nuoc-20261022221357952.htm",
    content:
      "Việt Nam và EU khẳng định quyết tâm triển khai hiệu quả quan hệ Đối tác Chiến lược Toàn diện, thúc đẩy EVFTA, sớm phê chuẩn EVIPA và tăng cường hợp tác về công nghệ, năng lượng, hạ tầng chiến lược.",
    img: "image/le-don-tong-bi-thu-chu-tich-nuoc-to-lam-tham-chinh-thuc-lien-minh-chau-au-2210-edited-1792681870356.webp",
  },
  {
    id: 4,
    title: "Cô gái Trung Quốc sống sót thần kỳ sau khi rơi từ tầng 35 xuống",
    time: "55 phút trước",
    link: "https://dantri.com.vn/the-gioi/co-gai-trung-quoc-song-sot-than-ky-sau-khi-roi-tu-tang-35-xuong-20261022214511862.htm",
    content:
      "(Dân trí) - Một người có sức ảnh hưởng trên mạng ở Trung Quốc đã kể lại câu chuyện về quá trình hồi phục của cô sau gần 1 năm ngã từ tầng 35 xuống.",
    img: "image/9ae8d934-f268-46b7-ad9d-004cdad73a62c232d53f-1792679976156.webp",
  },
  {
    id: 5,
    title:
      "Báo Thái Lan ấn tượng với hàng loạt SVĐ đẳng cấp thế giới ở Việt Nam",
    time: "1 giờ trước",
    link: "https://dantri.com.vn/the-thao/bao-thai-lan-an-tuong-voi-hang-loat-svd-dang-cap-the-gioi-o-viet-nam-20261022195007864.htm",
    content:
      "(Dân trí) - Theo tờ Thai Live, Việt Nam sẵn sàng đăng cai World Cup khi chuẩn bị sẵn sàng cơ sở hạ tầng, với hàng loạt sân vận động (SVĐ) hoành tráng.",
    img: "image/tai-xuong-1786673850716-1792673011818.webp",
  },
];

function renderPosts() {
  htmlContent = "";
  for (let i = 0; i < posts.length; i++) {
    htmlContent += `
    <div>
        <div>
            <div class="time-card"><span>${posts[i].time}</span></div>
            <div class="title"><a href="${posts[i].link}"><h3>${posts[i].title}</h3></a></div>
            <div class="content"><p>${posts[i].content}</p></div>
        </div>
        <img src="${posts[i].img}" alt="">
    </div>`;
  }
  document.getElementById("posts-list").innerHTML = htmlContent;
}
renderPosts();
