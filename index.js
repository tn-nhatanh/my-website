function newDate() {
  const d = new Date();
  const weekday = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const monthNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  let date = d.getDate();
  let month = monthNumber[d.getMonth()];
  let year = d.getFullYear();
  let day = weekday[d.getDay()];
  document.getElementById("day-header").innerHTML =
    day + ", " + date + "/" + month + "/" + year;
}

newDate();

function slider() {
  const slide = document.querySelector(".slide");

  document.getElementById("next").onclick = () => {
    slide.scrollLeft += 450;
  };

  document.getElementById("prev").onclick = () => {
    slide.scrollLeft -= 450;
  };
}

slider();
