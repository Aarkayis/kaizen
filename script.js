const pageSearch = document.querySelector("[data-page-search]");
const materialSearch = document.querySelector("[data-material-search]");
const materialCards = document.querySelectorAll("[data-card]");

function normalize(value) {
  return (value || "").toLowerCase().trim();
}

function runMaterialSearch() {
  const query = normalize(materialSearch?.value);
  materialCards.forEach((card) => {
    card.hidden = query && !normalize(card.textContent).includes(query);
  });
}

function runGlobalSearch(value) {
  const query = normalize(value);
  const routes = [
    ["cuet", "cuet.html"],
    ["b.com program", "bcom-program.html"],
    ["bcom program", "bcom-program.html"],
    ["b.com hons", "bcom-hons.html"],
    ["bcom hons", "bcom-hons.html"],
    ["ca foundation", "ca-foundation.html"],
    ["drawing", "drawing-hub.html"],
    ["skill", "skills.html"],
    ["book", "free-books.html"],
    ["youtube", "youtube-library.html"],
    ["question", "question-papers.html"],
    ["paper", "question-papers.html"],
    ["test", "test-series.html"],
    ["download", "downloads.html"],
    ["about", "about.html"],
    ["contact", "contact.html"]
  ];

  const match = routes.find(([term]) => query.includes(term));
  if (match) window.location.href = match[1];
}

materialSearch?.addEventListener("input", runMaterialSearch);
pageSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runGlobalSearch(pageSearch.value);
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;
    await navigator.clipboard.writeText(target.innerText);
    const old = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = old;
    }, 1200);
  });
});
