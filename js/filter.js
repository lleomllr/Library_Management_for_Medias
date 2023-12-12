let searchbar=document.getElementById("searchbar");
searchbar.addEventListener("input", function(){
    let inputvalue=searchbar.value.toUpperCase();
    let latestCol=document.getElementsByClassName("latest-col");
    Array.from(latestCol).forEach(function(element){
        let txt=element.getElementsByTagName("label")[0].innerText.toUpperCase();
        let author=element.getElementsByTagName("p")[0].innerText.toUpperCase();
        if(txt.includes(inputvalue) || author.includes(inputvalue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})

searchbar.addEventListener("input", function(){
    let inputvalue=searchbar.value.toUpperCase();
    let latestCol=document.getElementsByClassName("pom-project");
    Array.from(latestCol).forEach(function(element){
        let txt=element.getElementsByTagName("label")[0].innerText.toUpperCase();
        let author=element.getElementsByClassName("author")[0].innerText.toUpperCase();
        if(txt.includes(inputvalue) || author.includes(inputvalue)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    navLinks.classList.toggle('active');

    if(navLinks.classList.contains('active')) {
        menuIcon.innerHTML = "&times;"; 
        menuIcon.classList.add('close-icon');
    } else {
        menuIcon.innerHTML = "&#9776;"; 
        menuIcon.classList.remove('close-icon');
    }
}

document.getElementById("themeFilter").addEventListener("change", function(){
    const selectedTheme = this.value;
    const articles = document.querySelectorAll(".pom-project");
    articles.forEach(article => {
        if(selectedTheme === "all" || article.dataset.theme === selectedTheme){
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});



