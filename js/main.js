const togglerLink = document.querySelector("#button");
const aside = document.querySelector("aside");
const button = document.querySelector("button");
const input = document.querySelector("#input");
const showAside = () => {
    togglerLink.addEventListener("click", () => {
        if (aside.style.display === "block") {
            aside.style.display = "none";
        } else {
            aside.style.display = "block";
        }  
    });
    button.addEventListener("click", () => {
        if (input.style.display === "block") {
            input.style.display = "none";
        }
        else { input.style.display = "block" }
    });
}
showAside();

