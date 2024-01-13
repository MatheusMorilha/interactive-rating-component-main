const firstContainer = document.querySelector(".container");
const secondContainer = document.querySelector(".containerThanks");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".circle");

submitButton.addEventListener("click", ()=> {
    secondContainer.classList.remove("hidden");
    firstContainer.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
    })
})