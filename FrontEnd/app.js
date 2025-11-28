//METHOD FETCH POUR APPELLER L'API
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