var email = "john.doe@gmail.com";
var password = "azerty12345";

var user = { email: "john.doe@gmail.com", password: "azerty12345" };
var user2 = { email: "nico@free.fr", password: "007" };

function login(emailtocheck, passwordtocheck, usertocheck) {
  if (usertocheck.email == email && user.password == password) {
    console.log("Email et mot de passe OK");
  } else if (usertocheck.email != email) {
    console.log("Email incorrect");
  } else {
    console.log("mot de passe incorrect");
  }
}

// Avec un troisième argument on peut utiliser la fonction avec d'autres paires email-motdepasse.
login(email, password, user2);
