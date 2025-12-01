const url = "http://localhost:5678/api/users/login"; // URL DE L'API LOGIN

document.getElementById("loginform").addEventListener("submit", getLogin);

async function getLogin (event) {
    event.preventDefault();  // ANNULE L'EVENT SI ANNULABLE

    let user = {
        email: document.getElementById("email").value, 
        password: document.getElementById("password").value
    };

    let response = await fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    let result = await response.json();
    console.log(result);
}
//getLogin();