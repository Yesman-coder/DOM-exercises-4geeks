let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
    let liElement = document.createElement("li");
    liElement.innerHTML = "Fourth Element";
    let list = document.querySelector("#myList").appendChild(liElement);

});
