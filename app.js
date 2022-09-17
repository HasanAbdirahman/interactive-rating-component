let submitButton = document.querySelector(".ending");
let displayPage =  document.querySelector(".next-page");
let select = document.querySelectorAll(".circle");
let rating =  document.querySelector(".protect");
let firstPage = document.querySelector(".first-page")


submitButton.addEventListener("click",function(){
    document.querySelector(".next-page").classList.remove("hidden");
    firstPage.classList.add("hidden");

    select.forEach(function(rate){
        rate.addEventListener("click", function(){
            rating.innerHTML = rate.innerHTML;
        })
        })
    

})





