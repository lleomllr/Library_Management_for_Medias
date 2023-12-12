document.addEventListener("DOMContentLoaded", function () {
    const genreSelect = document.getElementById("genre-select");
    const languageSelect = document.getElementById("language-select");
    const centurySelect = document.getElementById("century-select");
    const bookContainers = document.querySelectorAll(".latest-col");

    function filterBooks() {
        const selectedGenre = genreSelect.value;
        const selectedLanguage = languageSelect.value;
        const selectedCentury = centurySelect.value;

        bookContainers.forEach(function (bookContainer) {
            const bookGenre = bookContainer.getAttribute("data-genre");
            const bookLanguage = bookContainer.getAttribute("data-language");
            const bookCentury = bookContainer.getAttribute("data-century");

            if ((selectedGenre === "all" || selectedGenre === bookGenre) && 
                (selectedLanguage === "all" || selectedLanguage === bookLanguage) &&
                (selectedCentury === "all" || selectedCentury === bookCentury)) {
                bookContainer.style.display = "block";
            } else {
                bookContainer.style.display = "none";
            }
        });
    }

    genreSelect.addEventListener("change", filterBooks);
    languageSelect.addEventListener("change", filterBooks);
    centurySelect.addEventListener("change", filterBooks);

    
});

