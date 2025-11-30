//METHOD FETCH POUR APPELLER L'API TRAVAUX
async function getWorks() {
  const url = "http://localhost:5678/api/works";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    // BOUCLE WORKS JSON AFFICHER DANS LA FONCTION 
    for (let i = 0; i <json.length; i++) {
      setFigure(json[i]);
    }
  } catch (error) {
    console.error(error.message);
  }
}
// APPELLE DE LA FONCTION
getWorks();

//FUNCTION AJOUT DES TRAVAUX DEPUIS JS
function setFigure (data) {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src= ${data.imageUrl} alt= ${data.title}>
                        <figcaption>${data.title}</figcaption>`;
    document.querySelector(".gallery").append(figure);
}

//METHOD FETCH POUR APPELLER L'API CATEGORIES
async function getCategories() {
  const url = "http://localhost:5678/api/categories";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    for (let i = 0; i <json.length; i++) {
      setFilter(json[i]);
    }
  } catch (error) {
    console.error(error.message);
  }
}
// APPELLE DE LA FONCTION
getCategories();

//FUNCTION AJOUT DES CATEGORIES FILTRES DEPUIS JS
function setFilter (data) {
    const div = document.createElement("div");
    div.innerHTML = `${data.name}`
    document.querySelector(".filtres-container").append(div);
}
document.querySelector(".tous").addEventListener("click", () => getWorks)

