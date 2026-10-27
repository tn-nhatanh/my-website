const Sports_list = [
  { title: "Bóng đá trong nước", link: "" },
  { title: "Bóng đá quốc tế", link: "" },
  { title: "V-League", link: "" },
  { title: "Bóng đá Anh", link: "" },
  { title: "Bóng đá Tây Ban Nha", link: "" },
  { title: "Bóng đá Ý, Đức, Pháp", link: "" },
  { title: "Champions League", link: "" },
  { title: "Europa League", link: "" },
];
let list = "";
for (let i = 0; i < Sports_list.length; i++) {
  list += `<li>
              <a href="${Sports_list[i].link}">${Sports_list[i].title}</a>
            </li>
            `;
}
const sports = `
    <div class="Sports-tab">
    <div class="Sports-header">
        <div class="name-sport"><span>Thể Thao</span></div>
        <div class="Topic-stream">
          <a href="">Dòng sự kiện:</a>
          <a href="" >Asian Cup 2027</a>
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

const Slider_list = [
  {
    time: "00h00 · 26/10",
    Logo1: "image2/lecce.webp",
    Logo2: "image2/jvts.webp",
    Score1: "0",
    Score2: "2",
    name1: "Lecce",
    name2: "Juventus",
  },
  {
    time: "00h30 · 26/10",
    Logo1: "image2/Real Sociedad.webp",
    Logo2: "image2/Levante.webp",
    Score1: "2",
    Score2: "1",
    name1: "Real Sociedad",
    name2: "Levante",
  },
  {
    time: "02h45 · 26/10",
    Logo1: "image2/Udinese.webp",
    Logo2: "image2/AC Milan.webp",
    Score1: "0",
    Score2: "2",
    name1: "Udinese",
    name2: "AC Milan",
  },
  {
    time: "03h00 · 26/10",
    Logo1: "image2/Barcelona.webp",
    Logo2: "image2/Real Madrid.webp",
    Score1: "0",
    Score2: "2",
    name1: "Barcelona",
    name2: "Real Madrid",
  },
  {
    time: "02h30 · 27/10",
    Logo1: "image2/Paris Saint Germain.webp",
    Logo2: "image2/Lyon.webp",
    Score1: "2",
    Score2: "0",
    name1: "Paris Saint Germain",
    name2: "Lyon",
  },
  {
    time: "03h00 · 27/10",
    Logo1: "image2/Sevilla.webp",
    Logo2: "image2/Osasuna.webp",
    Score1: "0",
    Score2: "2",
    name1: "Sevilla",
    name2: "Osasuna",
  },
  {
    time: "",
    Logo1: "",
    Logo2: "",
    Score1: "",
    Score2: "",
    name1: "",
    name2: "",
  },
];
list_slider = "";
for (let i = 0; i < Slider_list.length; i++) {
  list_slider += `
  <div class="card-score">
        <p class="time-day">${Slider_list[i].time}</p>
        <div class="Teams1">
          <img src="${Slider_list[i].Logo1}" alt="" /><span class="name-fc">${Slider_list[i].name1}</span
          ><span class="Score">${Slider_list[i].Score1}</span>
        </div>
      <div class="Teams2">
        <img src="${Slider_list[i].Logo2}" alt="" /><span class="name-fc">${Slider_list[i].name2}</span
        ><span class="Score">${Slider_list[i].Score2}</span>
      </div>
  </div>
  `;
}

const slider_sport = `
<div class="head-slider">
        <p>Trận đấu nổi bật</p>
        <a href="">Xem thêm</a>
</div>
<div class="body-slider">
  <button class="button-slider" id="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <div class="card-slider">
       ${list_slider}
      </div>
  <button class="button-slider" id="next"><i class="fa-solid fa-arrow-right-long"></i></button>
</div>
`;

document.getElementById("slider-match-score-id").innerHTML = slider_sport;

function slider() {
  const slide = document.querySelector(".card-slider");

  document.getElementById("next").onclick = () => {
    slide.scrollLeft += 300;
  };

  document.getElementById("prev").onclick = () => {
    slide.scrollLeft -= 300;
  };
}

slider();
