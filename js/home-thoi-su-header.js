const Sports_list = [
  { title: "Chính trị", link: "" },
  { title: "Đưa Nghị quyết của Đảng vào cuộc sống", link: "" },
  { title: "Học tập Bác", link: "" },
  { title: "Môi trường", link: "" },
  { title: "Giao thông", link: "" },
  { title: "Nóng trên mạng", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Xử lý vi phạm tại 12 dự án của Mường Thanh",
  "Ba xã ở Phú Thọ dự kiến sáp nhập về Hà Nội",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Thời sự</span></div>
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
