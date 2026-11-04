const Sports_list = [
  { title: "Quân sự", link: "" },
  { title: "Phân tích - Bình luận", link: "" },
  { title: "Thế giới đó đây", link: "" },
  { title: "Kiều bào", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  "Bầu cử giữa nhiệm kỳ Mỹ",
  "Thúc đẩy đàm phán hòa bình Nga - Ukraine",
  "Chiến sự Mỹ - Iran",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Thế giới</span></div>
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
