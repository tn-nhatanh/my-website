document.querySelectorAll(".article-pagination").forEach((pagination) => {
  const articleList = document.getElementById(pagination.dataset.listId);
  const firstPageContent = articleList.innerHTML;
  const pageCount = 5;
  let currentPage = 1;

  pagination.innerHTML = `
    <div class="pagination-buttons">
      <button type="button" data-step="-1" aria-label="Trang trước">&#8249;</button>
      ${[1, 2, 3, 4, 5]
        .map(
          (page) =>
            `<button type="button" data-page="${page}" class="${page === 1 ? "active" : ""}">${page}</button>`,
        )
        .join("")}
      <button type="button" data-step="1" aria-label="Trang sau">&#8250;</button>
    </div>
  `;

  function showPage(page) {
    if (page < 1 || page > pageCount) return;

    currentPage = page;
    if (page === 1) {
      articleList.innerHTML = firstPageContent;
    } else {
      const pageData = window.articlePages[pagination.dataset.pageKey];
      const articles = pageData[page] || [];
      articleList.innerHTML = articles
        .map(
          (article) => `
            <div class="card-Container">
              <img src="${article.img}" alt="" />
              <div class="info-box">
                <a href="${article.link || "#"}">${article.title}</a>
                <p>${article.text || ""}</p>
              </div>
            </div>
          `,
        )
        .join("");
    }

    pagination.querySelectorAll("[data-page]").forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.page) === page);
    });
  }

  pagination.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    let page;
    if (button.dataset.page) {
      page = Number(button.dataset.page);
    } else {
      page = currentPage + Number(button.dataset.step);
    }

    showPage(page);
  });
});
