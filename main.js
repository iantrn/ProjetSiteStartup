function main () {
    function onCopy() {
        alert("Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.")
    }
    document.addEventListener("copy", onCopy);
}

main();

