const Sports_list = [
  { title: "Sức khỏe phổi", link: "" },
  { title: "Ung thư", link: "" },
  { title: "Sống khỏe", link: "" },
  { title: "Thận & bệnh mạn tính", link: "" },
  { title: "Tầm soát - Chẩn đoán", link: "" },
  { title: "Sinh sản - Hiếm muộn", link: "" },
  { title: "Ngoại thần kinh - Cột sống", link: "" },
  { title: "Chấm dứt cơn đau", link: "" },
  { title: "Tư vấn y khoa", link: "" },
  { title: "Thuốc và giải pháp hỗ trợ", link: "" },
];

let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}

const EventI = [
  '10 phút "sinh tử" cứu cả nhà thoát chết trong vụ ngộ độc khí Clo ở Hà Nội',
  "Sở An toàn thực phẩm TPHCM cảnh báo nguy cơ ngộ độc từ nhân bánh mì",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Sức khỏe</span></div>
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
