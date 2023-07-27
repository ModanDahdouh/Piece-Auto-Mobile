// prend les tableau object json
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Affichez plusieurs fiches produits grâce à la boucle for

for (let i = 0; i < pieces.length; i++) {
    // Creation des Element HtML
    const article = pieces[i];
    // ajoute les Element a la section Fiches html
    const sectionFiches = document.querySelector(".fiches");
    // Creation d'une balise a une pièce automobile
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${
        article.prix < 35 ? "€" : "€€€"
    })`;
    document.body.appendChild(prixElement);
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText =
        article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite
        ? "En stock"
        : "Rupture de stock";

    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

    // resume cours
    // En manipulant le DOM, vous pouvez :

    // créer de nouveaux éléments avec createElement ;

    // afficher les nouveaux éléments avec appendChild.

    // Utilisez des opérateurs pour vérifier vos données
    // avant de les afficher :

    // l’opérateur ternaire pour transformer une valeur en une
    //  autre selon 2 possibilités ;

    // l’opérateur nullish pour fournir une valeur de remplacement
    //  quand une valeur est null, ou bien lorsqu’elle est undefined.
}

// gestion des boutons
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    // copie la liste pîeces cela perme de ne pas toucher lordre des pieces
    // autre filtre
    const piecesOrdonnees = Array.from(pieces);
    // La sort()méthode trie les éléments
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(piecesOrdonnees);
});

const boutonsFiltrer = document.querySelector(".btn-filtrer");
// La filter()méthode crée une copie superficielle
boutonsFiltrer.addEventListener("click", function () {
    // Pas besoin recre une copie la liste filter fait une copie superficiel
    const piecesFiltrees = pieces.filter(function (piece) {
        // on enleve les prix superieur a 35
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

const boutonsDecroissant = document.querySelector(".btn-decroissant");
boutonsDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix + b.prix;
    });

    console.log(piecesOrdonnees);
});

const boutonsNodesc = document.querySelector(".btn-nodesc");
boutonsNodesc.addEventListener("click", function () {
    const piecesNodesc = pieces.filter(function (piece) {
        // on enleve les description absans
        return piece.description;
    });
    console.log(piecesNodesc);
});
