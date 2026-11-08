const Sports_list = [
  {
    title: "Tuyển sinh",
    link: "https://dantri.com.vn/giao-duc/tuyen-sinh.htm",
  },
  {
    title: "Góc phụ huynh",
    link: "https://dantri.com.vn/giao-duc/goc-phu-huynh.htm",
  },
  {
    title: "Khuyến học",
    link: "https://dantri.com.vn/giao-duc/khuyen-hoc.htm",
  },
  {
    title: "Gương sáng",
    link: "https://dantri.com.vn/giao-duc/guong-sang.htm",
  },
  {
    title: "Giáo dục - Nghề nghiệp",
    link: "https://dantri.com.vn/giao-duc/giao-duc-nghe-nghiep.htm",
  },
  { title: "Du học", link: "url?id=3giao-duc/du-hoc.htm" },
  {
    title: "Dấu ấn người Thầy",
    link: "https://dantri.com.vn/giao-duc/dau-an-nguoi-thay.htm",
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
  "Vụ nam sinh lớp 8 đánh bạn nhập viện",
  "Nhiều quy định mới trong đào tạo giáo viên",
];
let eventrender = "";
for (let i = 0; i < EventI.length; i++) {
  eventrender += `<a class="Event" href="">${EventI[i]}</a>`;
}

const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Giáo dục</span></div>
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
