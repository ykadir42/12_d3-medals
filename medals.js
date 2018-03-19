// Bayan Berri and Jawadul Kadir
// SoftDev2 pd7
// K12 -- Medallions ...of Data!
// 2018-03-19

var svg = document.getElementById("vimage");

var norway = function(e){
	console.log("norway");
	svg.innerHTML = "";

	var gold = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	gold.setAttribute("cx", "250");
	gold.setAttribute("cy", "150");
	gold.setAttribute("r", 14 * 7.5 + "");
	gold.setAttribute("fill", "#FFD700");
	svg.appendChild(gold);

	var silver = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	silver.setAttribute("cx", "250");
	silver.setAttribute("cy", "450");
	silver.setAttribute("r", 14 * 7.5 + "");
	silver.setAttribute("fill", "#C0C0C0");
	svg.appendChild(silver);

	var bronze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	bronze.setAttribute("cx", "250");
	bronze.setAttribute("cy", "750");
	bronze.setAttribute("r", 11 * 7.5 + "");
	bronze.setAttribute("fill", "#CD7F32");
	svg.appendChild(bronze);
}

var china = function(e){
	console.log("china");
	svg.innerHTML = "";

	var gold = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	gold.setAttribute("cx", "250");
	gold.setAttribute("cy", "150");
	gold.setAttribute("r", 1 * 7.5 + "");
	gold.setAttribute("fill", "#FFD700");
	svg.appendChild(gold);

	var silver = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	silver.setAttribute("cx", "250");
	silver.setAttribute("cy", "450");
	silver.setAttribute("r", 6 * 7.5 + "");
	silver.setAttribute("fill", "#C0C0C0");
	svg.appendChild(silver);

	var bronze = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	bronze.setAttribute("cx", "250");
	bronze.setAttribute("cy", "750");
	bronze.setAttribute("r", 2 * 7.5 + "");
	bronze.setAttribute("fill", "#CD7F32");
	svg.appendChild(bronze);
}

document.getElementById("norway").addEventListener("click", norway);
document.getElementById("china").addEventListener("click", china);
