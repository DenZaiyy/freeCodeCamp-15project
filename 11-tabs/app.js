const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
        // remove action from others buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide others articles

        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
