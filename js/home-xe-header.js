const Sports_list = [
  {
    title: "Thị trường xe",
    link: "https://dantri.com.vn/o-to-xe-may/thi-truong-xe.htm",
  },
  {
    title: "Chọn xe",
    link: "https://cdn.dtadnetwork.com/creatives/html5/202610/1793262118/index.html5",
  },
  { title: "Xe điện", link: "https://dantri.com.vn/o-to-xe-may/xe-dien.htm" },
  { title: "Chăm xe", link: "https://dantri.com.vn/o-to-xe-may/cham-xe.htm" },
  {
    title: "Diễn đàn xe",
    link: "https://dantri.com.vn/o-to-xe-may/dien-dan-xe.htm",
  },
  {
    title: "Thi lý thuyết bằng lái xe",
    link: "https://dantri.com.vn/o-to-xe-may/thi-ly-thuyet-bang-lai-xe.htm",
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
  "Loạt ô tô giảm giá trong tháng 11",
  "Gen Z mua BMW 13 năm tuổi",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Ô tô - Xe máy</span></div>
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
