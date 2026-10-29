const listHeader = [
  { text: "Hoàn cảnh", link: "" },
  { text: "Dự án cộng đồng", link: "" },
  { text: "Nhịp cầu nhân ái", link: "" },
  { text: "Vượt lên số phận", link: "" },
];

listhead = "";
for (let i = 0; i < listHeader.length; i++) {
  listhead += `<div class="text"><a href="${listHeader[i].link}">${listHeader[i].text}</a></div>`;
}
const header = `
            <img src="image/logo-3png-1752569761698.webp" alt="" />
        <div class="text-header">
          <img src="image2/static-logo-nhan-ai.1-0-1.81cfead10dadfa8606b4.png" alt="" />
          <p>Tấm lòng nhân ái</p>
          ${listhead}
        </div>
        <div class="login"><a href="">Đăng nhập</a></div>
`;

document.getElementById("headerID").innerHTML = header;
const listcardright = [
  { title: "", img: "", link: "" },
  { title: "", img: "", link: "" },
  { title: "", img: "", link: "" },
  { title: "", img: "", link: "" },
];

listright = "";
for (let i = 0; i < listmini3.length; i++) {
  listright += `
    <div class="card-left">
                <img src="${listcardright[i].img}" alt="" />
                <p>${listcardright[i].title}</p>
    </div>
    `;
}

const listmini3 = [
  { title: "", img: "", link: "" },
  { title: "", img: "", link: "" },
  { title: "", img: "", link: "" },
];
listmini_3 = "";
for (let i = 0; i < listmini3.length; i++) {
  listmini_3 += `
    <div class="card-right-mini">
                  <img
                    src="${listmini3[i].img}"
                    alt=""
                  />
                  <a >${listmini3[i].title}</a>
    </div>
    `;
}

const card = [
  {
    title:
      "Mã số 6139: Bé trai ung thư, mù một mắt, gia đình nghèo kiệt sức sau 9 năm",
    img: "image2/hoan-canh-nguyen-van-thangbao-ky-2-edited-1792242342174.webp",
    text: "(Dân trí) - Mắc ung thư máu từ năm lên 4 tuổi, bé trai ở Đồng Tháp đã trải qua nhiều lần hóa trị, tái phát bệnh và mù mắt phải. Gia đình nghèo kiệt quệ sau 9 năm chạy chữa cho em.",
  },
  {
    title:
      " Mã số 6140: Mẹ đơn thân ôm con trai 5 tuổi mắc ung thư trong cảnh khốn khó",
    img: "image2/hoan-canh-nguyen-thi-mai-huyenbao-ky-4-edited-1791977419457.webp",
  },
  { title: "ff", img: "ffff" },
  { title: "ff", img: "" },
];

const card_content = `
    <div class="card-big">
            <img
              src="${card[0].img}"
              alt=""
            />
            <a class="title-card-big">
             ${card[0].title}
            </a>
            <p class="text-big">
             ${card[0].text}
            </p>
          </div>
          <div class="group-mini-card">
            <div class="card-right">
              <div class="card-right-big">
                <img
                  src="${card[1].img}"
                  alt=""
                />
                <a>
                  ${card[1].title}
                </a>
              </div>
              <div class="list-card-right-mini" id="list-card-right-mini-id">
                
                ${listmini_3}
                
              </div>
            </div>
            <div class="card-right">
              ${listright}
            </div>
          </div>
`;
document.getElementById("card-1Id").innerHTML = card_content;
