function main() {
// Menu
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

// Footer

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

// Contacts

    let form = document.querySelector('form');
    let name = document.getElementById('fname');
    let email = document.getElementById('emailAddress');   // on récuppère chaques éléments du form
    let message = document.getElementById('subject');      
    let submit_button = form.querySelector('input[type="submit"]');

    submit_button.disabled = true;  // on désactive le boutton envoyer et on le met en gris
    submit_button.style.backgroundColor = "#ccc";

    let nameError = document.createElement('div');
    let emailError = document.createElement('div');     // on créer les erreurs pour chaque champs
    let messageError = document.createElement('div');

    nameError.className = "Erreur";
    emailError.className = "Erreur";
    messageError.className = "Erreur";      // on créer les erreurs et on les mets apres les champs correspondants
    name.after(nameError);
    email.after(emailError);
    message.after(messageError);

    function checkName() {
        let value = name.value.trim();  // on supprime les espaces au début et a la fin au cas où
        let name_parts = value.split(" ");
        if (name_parts.length !== 2 || name_parts[0] === "" || name_parts[1] === "") {      // on vérifie q'il y a bien deux strings non vide séparés par des espaces
            nameError.textContent = "Entrez Prénom Nom (2 mots séparés par un espace).";
            return false;
        }
        nameError.textContent = "";
        return true;
    }
    function checkEmail() {
        let value = email.value.trim(); // on supprime les espaces au début et a la fin au cas où
        if (value.includes("@") == false || value.includes(".") == false) { // on vérifie que le mail contient bien un @ et un .
            emailError.textContent = "Adresse email invalide.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }
    function checkMessage() {
        let message_length = message.value.trim().length; // on supprime les espaces au début et a la fin au cas où + on regarde la taille
        if (message_length < 20 || message_length > 1000) {     // on vérifie la taille du message
            messageError.textContent = "Le message doit faire entre 20 et 1000 caractères.";
            return false;
        }
        messageError.textContent = "";
        return true;
    }
    function updateSubmitButton() {
        let validName = checkName();
        let validEmail = checkEmail();
        let validMessage = checkMessage();
        if ( validName && validEmail && validMessage ) {        // si les conditions sont remplies on autorise l'envoi du formulaire
            submit_button.disabled = false;
            submit_button.style.backgroundColor = "#089C3F";
        }   
    }

    name.addEventListener('input', updateSubmitButton);
    email.addEventListener('input', updateSubmitButton);    // on regarde à chaque input si les conditions sont remplies pour envyer le formulaire
    message.addEventListener('input', updateSubmitButton);

    function sendForm(event) { 
        event.preventDefault(); 
        alert("Message envoyé !");
        form.reset();   // on reset le form une fois envoyé
        updateSubmitButton();   // on reset le boutton envoyer aussi 
    } 
    
    form.addEventListener('submit', sendForm);  // on attend que l'utilisateur envoi le formulaire


// Accueil    
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

    
    
}
main();
