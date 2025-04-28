function main () {
    function onCopy() {  // envoyer une alerte + message dans la console 
        alert("Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.");
        console.log("Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.");
    }
    document.addEventListener("copy", onCopy); // envoit une alerte + message console si l'utilisateur copie quelque chose
    function displayTime() {
        document.querySelector("#timer").innerHTML = new Date().toLocaleTimeString("fr-fr");  // on écrit l'heure récupérée
    }
    setInterval(displayTime,1000); // on rafraichi l'heure toutes les secondes
    function durationOnPage() {
        let time_spent = 0;
        while ()
    }
}


main();

