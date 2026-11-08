const Sports_list = [
  { title: "Cộng đồng", link: "" },
  { title: "Thượng lưu", link: "" },
  { title: "Nhà đẹp", link: "" },
  { title: "Giới trẻ", link: "" },
  { title: "Chợ online", link: "" },
  { title: "Xổ số", link: "" },
  { title: "Cuộc thi ảnh Việt Nam trong tôi", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Vợ chồng ở Hà Nội nhường nhà 5 tầng mở rộng quốc lộ 1A",
  "Bắt cá lăng, cá mè nặng gần 20kg ở chân đập hồ Trị An",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Đời sống</span></div>
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
