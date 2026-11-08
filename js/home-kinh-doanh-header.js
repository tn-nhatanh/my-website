const Sports_list = [
  {
    title: "Tài chính",
    link: "https://dantri.com.vn/kinh-doanh/tai-chinh.htm",
  },
  { title: "Chứng khoán", link: "url?id=25" },
  {
    title: "Doanh nghiệp",
    link: "https://cdn.dtadnetwork.com/creatives/html5/202605/1778467698/index.html6",
  },
  {
    title: "Khởi nghiệp",
    link: "https://dantri.com.vn/kinh-doanh/khoi-nghiep.htm",
  },
  {
    title: "Tiêu dùng",
    link: "https://dantri.com.vn/kinh-doanh/tieu-dung.htm",
  },
  {
    title: "ESG Việt Nam",
    link: "https://dantri.com.vn/kinh-doanh/esg-viet-nam.htm",
  },
  {
    title: "Tin bước cùng Việt Nam",
    link: "https://dantri.com.vn/kinh-doanh/tin-buoc-cung-viet-nam.htm",
  },
  {
    title: "Toàn cảnh kinh tế tư nhân",
    link: "https://dantri.com.vn/kinh-doanh/toan-canh-kinh-te-tu-nhan.htm",
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
        <div class="name-sport"><span>Kinh doanh</span></div>
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
