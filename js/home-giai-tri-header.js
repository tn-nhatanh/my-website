const Sports_list = [
  {
    title: "Hậu trường",
    link: "https://dantri.com.vn/giai-tri/hau-truong.htm",
  },
  { title: "Sách hay", link: "url?id=28" },
  { title: "Điện ảnh", link: "https://dantri.com.vn/giai-tri/dien-anh.htm" },
  { title: "Âm nhạc", link: "https://dantri.com.vn/giai-tri/am-nhac.htm" },
  {
    title: "Thời trang",
    link: "https://dantri.com.vn/giai-tri/thoi-trang.htm",
  },
  {
    title: "Hạt giống tâm hồn",
    link: "https://dantri.com.vn/giai-tri/hat-giong-tam-hon.htm",
  },
  {
    title: "Mỹ thuật - Sân khấu",
    link: "https://dantri.com.vn/giai-tri/my-thuat-san-khau.htm",
  },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Đêm diễn BIGBANG ở Hà Nội",
  "Phim ngắn AI và hậu quả của cơn nghiện giải trí",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Giải trí</span></div>
        <div class="Topic-stream">
          <a href="">Dòng sự kiện:</a>
          ${eventrender}
        </div>
    </div>
        <div class="List-sports">
          <ol class="list">
            ${list}
          </ol>
        </div>
      </div>
    `;

document.getElementById("SportsID").innerHTML = sports;
