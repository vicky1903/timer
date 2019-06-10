//on selectionne la div dans laquelle va s'afficher le compte a rebours//
var compteARebours = document.getElementById("compterebours");

//une variable pour la date a laquelle l'etude est paru//
var dateActuelle = new Date("jun 7 00:00:00 2012");

//variable pour l'evenement//
// fin du monde prevu en 2100 selon une étude "Approaching a state-shift in Earth’s biosphere," de 22 chercheurs//
var dateEvenement = new Date("jul 27 00:00:00 2100");

//on calcule la differences des deux dates puis on divise par 1000 pour les avoirs en seconde//
var totalSecondes = (dateEvenement - dateActuelle) / 1000;