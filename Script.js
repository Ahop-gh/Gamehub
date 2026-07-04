// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Search
const search = document.getElementById("search");
const games = document.querySelectorAll(".game");

search.addEventListener("input", () => {

    const text = search.value.toLowerCase();

    games.forEach(game => {

        const name = game.textContent.toLowerCase();

        if (name.includes(text)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }

    });

});

// Filters
const filters = document.querySelectorAll(".filter");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        games.forEach(game => {

            if (filter === "all") {
                game.style.display = "block";
            } else if (game.classList.contains(filter)) {
                game.style.display = "block";
            } else {
                game.style.display = "none";
            }

        });

    });

});