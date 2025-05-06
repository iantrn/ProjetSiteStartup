function main () {
    function onCopy() {  // envoyer une alerte + message dans la console 
        alert("Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.");
        console.log("Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.");
    }
    document.addEventListener("copy", onCopy); // envoit une alerte + message console si l'utilisateur copie quelque chose
    function displayTime() {
        document.querySelector("#timer").innerHTML = "Il est actuellement " + new Date().toLocaleTimeString("fr-fr");  // on écrit l'heure récupérée
    }
    setInterval(displayTime,1000); // on rafraichi l'heure toutes les secondes
    function durationOnPage() { // calcul du temps passé sur la page et affichage à l'écran
        let time_spent = 0;        
        setInterval(function() {
            time_spent++;
            document.querySelector("#duration").innerHTML = "Temps passé sur la page " + time_spent + " secondes"; 
    }, 1000);
    }
    function Loader() {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";   // Affiche le loader 2 secondes
          }, 2000);
    }
    function pageSwitch() { // fonction intermédiaire pour éxectuer plusieurs fonctions en même temps sur un changement de page
        Loader();
        durationOnPage();
    }
    let page_switch = document.getElementsByClassName("navbar");
    let team_page_switch = document.getElementsByClassName("about");
    page_switch.onclick = pageSwitch(); // quand on clique sur un bouton de la navbar on change de page et donc le timer de page se remet à zéro
    

    const logo = document.getElementById("logo");
    logo.addEventListener("mouseover",() => {
        logo.style.transform = "scale(2)";
    } );

    logo.addEventListener("mouseout", () =>{
        logo.style.transform  = "scale(1)";
    })

    logo.addEventListener("click", () =>{
        window.location.href = "index.html"
    });
}
main();

