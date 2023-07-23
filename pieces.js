// prend les tableau object json
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Creation des Element HtML
const article = pieces[0];
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

// ajoute les Element a la section Fiches html
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);

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
