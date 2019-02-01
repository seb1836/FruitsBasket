var nombreArticles = 0;

var nombreBanana = 0;
var nombrePear = 0;
var nombreMelon = 0;

var total = 0;

document.getElementById("banana").onclick = addBanana;
document.getElementById("pear").onclick = addPear;
document.getElementById("melon").onclick = ajouterMelon;


/* Fonction qui ajoute une banane au panier */
function addBanana() {
	/* Pour debug : permet de valider que la fonction est appelée*/
	//alert("fonction addBanana : OK");
	console.log("fonction addBanana : OK");

	nombreBanana = nombreBanana + 1;

	ajouterAuTotal(1);

	calculerNombreArticles();

	afficherPanier();
	listerBanana();
}


/* Fonction qui ajoute une poire au panier */
function addPear() {
	/* Pour debug : permet de valider que la fonction est appelée*/
	//alert("fonction addPear : OK");
	console.log("fonction addPear : OK");

	nombrePear = nombrePear + 1;
	calculerNombreArticles();

	ajouterAuTotal(10);

	afficherPanier();
	listerPear();
}


/* Fonction qui ajoute un melon au panier */
function ajouterMelon() {
	/* Pour debug : permet de valider que la fonction est appelée*/
	//alert("fonction addMelon : OK");
	console.log("fonction addMelon : OK");

	nombreMelon = nombreMelon + 1;
	calculerNombreArticles();

	ajouterAuTotal(100);

	afficherPanier();
	listerMelon();
}

/* Liste les bananes */
function listerBanana() {
	document.getElementById("details-banana").innerHTML = "Vous avez acheté " + nombreBanana + " banane(s)";
}

/* Liste les poires */
function listerPear() {
	document.getElementById("details-pear").innerHTML = "Vous avez acheté " + nombrePear + " poire(s)";
}

/* Liste les melons */
function listerMelon() {
	document.getElementById("details-melon").innerHTML = "Vous avez acheté " + nombreMelon + " melon(s)";
}

/* Calcule le nombre d'article du panier */
function calculerNombreArticles() {
	nombreArticles = nombreBanana + nombrePear + nombreMelon;
}

/* Affiche le panier */
function afficherPanier() {	
	/* Pour supprimer le texte panier vide */
	document.getElementById("text-panier").innerHTML = "";

	document.getElementById("text-panier").innerHTML = "Vous avez " + nombreArticles + " article(s) pour un total de " + total +" euros TTC";
}

/* Ajouter [prixFruit] au total du panier */
function ajouterAuTotal(prixFruit) {	
	total = total + prixFruit;
}