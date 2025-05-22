function main() {
    function onCopy() {
        // envoyer une alerte + message dans la console
        alert(
            "Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit."
        );
        console.log(
            "Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit."
        );
    }
    document.addEventListener("copy", onCopy); // envoit une alerte + message console si l'utilisateur copie quelque chose
    function displayTime() {
        document.querySelector("#timer").innerHTML =
            "Il est actuellement " + new Date().toLocaleTimeString("fr-fr"); // on écrit l'heure récupérée
    }
    setInterval(displayTime, 1000); // on rafraichi l'heure toutes les secondes
    function durationOnPage() {
        // calcul du temps passé sur la page et affichage à l'écran
        let time_spent = 0;
        setInterval(function () {
            time_spent++;
            document.querySelector("#duration").innerHTML =
                "Temps passé sur la page " + time_spent + " secondes";
        }, 1000);
    }
    function Loader() {
        setTimeout(() => {
            document.getElementById("loader").style.display = "none"; // Affiche le loader 2 secondes
        }, 2000);
    }
    function pageSwitch() {
        // fonction intermédiaire pour éxectuer plusieurs fonctions en même temps sur un changement de page
        Loader();
        durationOnPage();
    }
    let page_switch = document.getElementsByClassName("navbar");

    page_switch.onclick = pageSwitch(); // quand on clique sur un bouton de la navbar on change de page et donc le timer de page se remet à zéro

    function alertTeam(event) {
        event.preventDefault(); // on empeche l'execution automatique de la fonction avant la confirmation
        if (confirm("Voulez-vous aller sur la page de l'équipe ?") == true) {   // on demande confirmation
            window.location.href = "about.html";   
        }
    }
    let about = document.getElementById("about");   
    about.addEventListener("click", alertTeam);     // on attend le clique sur le bouton A Propos
    
    function callSupport(event) {
        event.preventDefault();  // on empeche l'execution automatique de la fonction avant la confirmation
        let confirmation = prompt("Si vous voulez appeler ce numéro : +33230130560, entrez le de nouveau dans le champ ci-dessous puis validez")
        if ( confirmation == null || confirmation == "") { 
            console.log("Call canceled");
        }
        else if ( confirmation.trim() !== "33230130560") {  // on vérifie que l'utilisateur rentre bien un numéro
            alert("Numéro incorrect");
        }
        else {
            console.log("Vous appelez le numéro : +" + confirmation);
            const audio = new Audio('totally_spies_ringtone.mp3'); 
            audio.play();
            setTimeout(() => {
                audio.pause();  // on met la sonnerie 5 secondes
                audio.currentTime = 0;
            }, 5000);
        }
    }
    let phone_number = document.getElementById("phone_number");
    phone_number.addEventListener("copy", callSupport);     // on attend que l'utilisateur copie le numéro

    const logo = document.getElementById("logo");
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(2)";
    });

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });

    logo.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    document.addEventListener("Domcontenloaded", () => {
        const canvases = document.querySelectorAll(".scratch-canvas");
    });
    canvases.forEach((canvas) => {
        const dessin = canvas.getContext("2d");
        canvas.width = canvas.offsetWidth;
        canvas.hie;
    });

    const scratch_containers = document.querySelectorAll('.scratch-container');

scratch_containers.forEach((container) => {
    const canvas = container.querySelector('.scratch-canvas');
    container.addEventListener('mouseenter', () => {
        canvas.style.opacity = '1';
    });
    container.addEventListener('mouseleave', () => {
        canvas.style.opacity = '0';
    });
});


}

main();
