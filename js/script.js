const searchForm = document.querySelector(".search-form");
const cardItems = document.querySelector(".card-items-container");
const navbar = document.querySelector(".navbar");


/*Buttons*/
const searchBtn = document.querySelector("#search-btn")
const cardBtn = document.querySelector("#card-btn")
const menuBtn = document.querySelector("#menu-btn")


searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)
            ){
            searchForm.classList.remove("active");
        }
    })
})

cardBtn.addEventListener("click", function () {
    cardItems.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(cardBtn) && !e.composedPath().includes(cardItems)
            ){
                cardItems.classList.remove("active");
        }
    })
})

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)
            ){
                navbar.classList.remove("active");
        }
    })
})