const ClassCardHead = [
  {
    card: 1,
    img: "image2/kimmmm.webp",
    title: "HLV Kim Sang Sik không dẫn dắt U23 Việt Nam gặp U23 Thái Lan",
    text: "HLV Kim Sang Sik sẽ không trực tiếp dẫn dắt U23 Việt Nam ở giải giao hữu quốc tế tại Gia Lai vào tháng 11. Ở giải đấu này, U23 Việt Nam sẽ đối đầu với U23 Thái Lan, U23 Qatar và U23 Singapore.",
    link: "",
  },
  {
    card: 2,
    img: "image2/u15vn2affa28-10-26-cropped-1793182041338.webp",
    title: "U15 Việt Nam thua đáng tiếc đội bóng châu Phi ở World Cup",
    link: "",
  },
  {
    card: 3,
    img: "image2/u17vn-1778886264006.webp",
    title: "U17 Việt Nam có chiến thắng thứ hai tại Hàn Quốc",
    link: "",
  },
];

const CardHead = `

        <div class="card-big">
            <img src="${ClassCardHead[0].img}" alt="" />
            <a href="${ClassCardHead[0].link}" class="title-card-big">${ClassCardHead[0].title}</a>
            <p class="text-card">${ClassCardHead[0].text}</p>
        </div>
        <div class="list-mini-card">
          <div class="mini-card card1">
            <img src="${ClassCardHead[1].img}" alt="" />
            <a href="${ClassCardHead[1].link}" class="text-mini-card">${ClassCardHead[1].title}</a>
          </div>
          <div class="mini-card card2">
            <img src="${ClassCardHead[2].img}" alt="" />
            <a href="${ClassCardHead[2].link}" class="text-mini-card">${ClassCardHead[2].title}</a>
          </div>
        </div>

`;

document.getElementById("soccer-1ID").innerHTML = CardHead;

const cardList = [
  {
    title:
      "Lamine Yamal lên tiếng sau thất bại trước Harry Kane ở Quả bóng vàng",
    link: "",
    img: "image2/lamine-yamal-len-tieng-sau-that-bai-truoc-harry-kane-o-qua-bong-vang-edited-1793170908227.webp",
  },
  {
    title:
      "AFC, VFF thưởng nóng cho CLB Công an Hà Nội sau khi thắng CLB Trung Quốc",
    link: "",
    img: "image2/img8565-6ae128ce8126f-1793161971662.webp",
  },
  {
    title:
      "Báo Argentina phản ứng dữ dội khi Messi chỉ xếp thứ 5 ở giải Quả bóng vàng",
    link: "",
    img: "image2/c227b1ec-d55e-4239-9f10-c8c2bd4cd537-1793161064255.webp",
  },
  {
    title: "Ronaldo làm lành với HLV Jorge Jesus, trở lại đội tuyển Bồ Đào Nha",
    link: "",
    img: "image2/gettyimages-2296882262-cropped-1793156781469.webp",
  },
];
listCard = "";
for (let i = 0; i < cardList.length; i++) {
  listCard += `<div class="card-list"><img src="${cardList[i].img}" alt=""><a href="${cardList[i].link}">${cardList[i].title}</a></div>`;
}
document.getElementById("soccer-2ID").innerHTML = listCard;

const CardListContainer = [
  {
    img: "image2/imagesvoltaxmedialibrarymmsportsi01m5srzdwegtgsjq0djn-cropped-1793149029412.webp",
    link: "",
    title:
      'HLV Arteta: "Arsenal không thể ngăn trận đấu đến loạt sút luân lưu"',
    text: "Huấn luyện viên (HLV) Mikel Arteta bày tỏ sự thất vọng khi Arsenal để thua đội bóng thuộc giải hạng tư nước Anh Fleetwood và bị loại sớm ở Cúp Liên đoàn Anh.",
  },
  {
    img: "image2/arsenal-cropped-1793148361816.webp",
    link: "",
    title: "Arsenal bị đội bóng hạng tư loại khỏi Cúp Liên đoàn Anh",
    text: "Arsenal gây thất vọng khi bị Fleetwood Town, đội bóng đang chơi ở giải hạng tư nước Anh, loại khỏi Cúp Liên đoàn sau trận hòa 1-1 và thất bại 3-5 trên chấm luân lưu.",
  },
  {
    img: "image2/f8dd489da39941f9b20848a98a285625-cropped-1793120196871.webp",
    link: "",
    title:
      "Báo Trung Quốc bình luận khi đội nhà thất bại trước CLB Công an Hà Nội",
    text: "Các tờ báo của Trung Quốc đã đưa ra bình luận khi CLB Shanghai Port thất bại với tỷ số 2-3 ngay trên sân nhà trước CLB Công an Hà Nội ở cúp C1 châu Á.",
  },
  {
    img: "image2/86711051714922966696203483830081856374082024n-edited-1793092258375.webp",
    link: "",
    title: "Ánh mắt Yamal, nỗi buồn Mbappe ngày Harry Kane giành Quả bóng vàng",
    text: "Việc Harry Kane giành Quả bóng vàng mà không thể vô địch World Cup hay Champions League thực sự là điều lạ lùng. Không ít người đã tỏ ra tiếc nuối cho Lamine Yamal và Kylian Mbappe.",
  },
  {
    img: "image2/kane1-1793088513363.webp",
    link: "",
    title: "Harry Kane đoạt Quả bóng vàng 2026: Hình mẫu nhà vô địch toàn diện",
    text: "Một thời gian dài người hâm mộ chê cười, thậm chí mỉa mai Harry Kane là ngôi sao lớn không danh hiệu, khi anh trải qua quãng thời gian chưa từng đứng bục vinh quang cùng CLB Tottenham.",
  },
  {
    img: "image2/ezgif-8c85e26f0fca0bd6-1793069564903.webp",
    link: "",
    title:
      "Biểu cảm của Yamal và Mbappe khi Harry Kane giành Quả bóng vàng 2026",
    text: "Hai cầu thủ Lamine Yamal và Kylian Mbappe đã có phản ứng trái ngược sau khi Harry Kane giành giải Quả bóng vàng 2026.",
  },
];

CardContainer = "";

for (let i = 0; i < CardListContainer.length; i++) {
  CardContainer += `
    <div class="card-Container">
        <img src="${CardListContainer[i].img}" alt="" />
        <div class="info-box">
          <a href="${CardListContainer[i].link}">${CardListContainer[i].title}</a>
          <p>${CardListContainer[i].text}</p>
        </div>
    </div>
  `;
}
document.getElementById("CardListContainerID").innerHTML = CardContainer;
