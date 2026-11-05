const AffairsHeadCards = [
  {
    card: 1,
    img: "",
    title: "",
    text: "",
    link: "",
  },
  {
    card: 2,
    img: "",
    title: "",
    link: "",
  },
  {
    card: 3,
    img: "",
    title: "",
    link: "",
  },
];

const AffairsHeadHTML = `
  <div class="card-big">
    <img src="${AffairsHeadCards[0].img}" alt="" />
    <a href="${AffairsHeadCards[0].link}" class="title-card-big">${AffairsHeadCards[0].title}</a>
    <p class="text-card">${AffairsHeadCards[0].text}</p>
  </div>
  <div class="list-mini-card">
    <div class="mini-card card1">
      <img src="${AffairsHeadCards[1].img}" alt="" />
      <a href="${AffairsHeadCards[1].link}" class="text-mini-card">${AffairsHeadCards[1].title}</a>
    </div>
    <div class="mini-card card2">
      <img src="${AffairsHeadCards[2].img}" alt="" />
      <a href="${AffairsHeadCards[2].link}" class="text-mini-card">${AffairsHeadCards[2].title}</a>
    </div>
  </div>
`;

document.getElementById("affairs-spotlightID").innerHTML = AffairsHeadHTML;

const affairsNewsList = [
  {
    title: "",
    link: "",
    img: "",
  },
  {
    title: "",
    link: "",
    img: "",
  },
  {
    title: "",
    link: "",
    img: "",
  },
  {
    title: "",
    link: "",
    img: "",
  },
];

let affairsCardsHTML = "";
for (let i = 0; i < affairsNewsList.length; i++) {
  affairsCardsHTML += `<div class="card-list"><img src="${affairsNewsList[i].img}" alt=""><a href="${affairsNewsList[i].link}">${affairsNewsList[i].title}</a></div>`;
}
document.getElementById("affairs-subID").innerHTML = affairsCardsHTML;

const AffairsListContainerData = [
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
  {
    img: "",
    link: "",
    title: "",
    text: "",
  },
];

let affairsContainerHTML = "";

for (let i = 0; i < AffairsListContainerData.length; i++) {
  affairsContainerHTML += `
    <div class="card-Container">
        <img src="${AffairsListContainerData[i].img}" alt="" />
        <div class="info-box">
          <a href="${AffairsListContainerData[i].link}">${AffairsListContainerData[i].title}</a>
          <p>${AffairsListContainerData[i].text}</p>
        </div>
    </div>
  `;
}
document.getElementById("AffairsListContainerID").innerHTML =
  affairsContainerHTML;
