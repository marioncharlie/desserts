document.querySelector("button").addEventListener("click", function clic() {
    var ulElt = document.getElementById("desserts");
    var liElt = document.createElement("li");

    var nouveauDessert = prompt("Veuillez saisir un nom de dessert :");

    liElt.textContent = nouveauDessert;
    ulElt.appendChild(liElt);


    liElt.addEventListener("click", function modifierTexte(e) {
        var changementDessert = prompt("Veuillez modifier le texte :"); // affiche une fenêtre pour pouvoir modifier le dessert sur lequel on a cliqué 
        liElt.innerHTML = changementDessert;

    });

});