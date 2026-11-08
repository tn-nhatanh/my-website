const Sports_list = [
  { title: "Tin tức", link: "" },
  { title: "Khám phá", link: "" },
  { title: "Món ngon - Điểm đẹp", link: "" },
  { title: "Tour hay - Khuyến mại", link: "" },
  { title: "Video - Ảnh", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Đà Nẵng là cực tăng trưởng: Có gì để khách vui chơi, chi tiền không tiếc?",
  "Giá vé cao nhất 20 triệu đồng đi Hà Nội - Bangkok cổ vũ chung kết ASEAN Cup",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Du lịch</span></div>
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
