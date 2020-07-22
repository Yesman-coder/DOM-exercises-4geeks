window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let selector = document.querySelector("#mySelect");
	for (var i = 0; i < countries.length; i++) {
		var option = document.createElement("OPTION"),
			txt = document.createTextNode(countries[i]);
		option.appendChild(txt);
		option.setAttribute("value", countries[i]);
		selector.insertBefore(option, selector.lastChild);
	}

	selector.addEventListener("change", function myFunction() {
		var x = document.getElementById("mySelect").value;
		alert("You selected: " + x);
	});
};
