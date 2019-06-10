//on selectionne la div dans laquelle va s'afficher le compte a rebours//
var affiche = document.getElementById("compteRebours");
//fonction pour le compte a rebour//
function rebour(){

    //une variable pour la date a laquelle l'etude est paru//
    var dateActuelle = new Date();

    //variable pour l'evenement//
    // fin du monde prevu en 2100 selon une étude "Approaching a state-shift in Earth’s biosphere," de 22 chercheurs//
    var dateEvenement = new Date("jul 27 00:00:00 2100");

    //on calcule la differences des deux dates puis on divise par 1000 pour les avoirs en seconde//
    var sec = (dateEvenement - dateActuelle) / 1000;
    var n = 24* 3600; //1 jour = 60 x 60 x 24 = n.//
    if (sec > 0){
        //calculer le nombre de jours restants. Le nombre étant en secondes // 
        j = Math.floor (sec / n);
        // calculer le nombre d heures restant.  1 heure = 60 x 60 secondes//
        h = Math.floor ((sec - (j * n)) / 3600);
        //meme techniques pour les minutes et les secondes//
        mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
        sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
        //affiche le compte a rebours//
        
        affiche.innerHTML =  j +" j "+ h +" h "+ mn +" min "+ sec + " s ";
        window.status = j +" j "+ h +" h "+ mn +" min "+ sec + " s ";

    }

    tRebour = setTimeout ("rebour();", 1000);
    
}
rebour();
//fonction pour le clik et incrementation du temps en plus//