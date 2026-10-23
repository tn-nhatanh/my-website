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
