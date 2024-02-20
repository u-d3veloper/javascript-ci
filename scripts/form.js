var form = document.getElementById("sign-in");
var password = document.getElementById("password");
var errorslist = document.getElementById("errors")
var messages = [];
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    errorslist.innerHTML = "";
    messages = [];


    if(document.getElementById("pseudo").value.length < 5){
        messages.push("Votre pseudo doit faire plus de 5 caractères")
    }
    if(document.getElementById("mail").value.length <5 || !(document.getElementById("mail").value.includes("@"))){
        messages.push("Votre email n'est pas correct");
    }
    if(password.value == password.value.replace(/[^a-zA-Z0-9]/g,"")){
        messages.push("Votre mot de passe doit contenir des caractères spéciaux");
    }
    if(password.value.length < 9 || password==password.value.toUpperCase() || password==password.value.toLowerCase()){
        messages.push("Votre mot de passe doit contenir plus de 9 caractères et contenir au moins une majuscule et une minuscule");
    }
    if(password.value != document.getElementById("passwordConfirm").value){
        messages.push("Vos deux mots de passe ne correspondent pas");
    }
    if(document.getElementById("color") == ""){
        messages.push("Vous n'avez pas choisi de couleur.");
    }
    if(document.getElementById("family").value == "void"){
        messages.push("Vous n'avez pas choisi de famille.");
    }

    if(messages[0]==null){
        messages.push("Vos informations ont été correctement enregistrées.");
    }

    messages.forEach(element => {
        let error = document.createElement("li");
        error.innerHTML = element;
        errorslist.appendChild(error);
    });

});