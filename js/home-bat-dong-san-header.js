const Sports_list = [
  { title: "Dự án", link: "" },
  { title: "Thị trường", link: "" },
  { title: "Nhà đất", link: "" },
  { title: "Nhịp sống đô thị", link: "" },
  { title: "Sống xanh", link: "" },
  { title: "Nội thất", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Bộ Xây dựng: Giá chung cư đã giảm, ở Hà Nội trung bình 123 triệu/m2",
  "Dấu chấm hết của Evergrande: Hứa Gia Ấn lĩnh án tù chung thân",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Bất động sản</span></div>
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
