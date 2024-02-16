const game = ()=>{
    var randomNumber = Math.floor(Math.random() * 100) +1;
    guess = -1;
    alert("Devinez un nombre entre 1 et 100. Vous avez 6 essais");
    var tryAttempt = 1;
    while (guess !=randomNumber && tryAttempt<7) {
        prompt("Entrez votre proposition : ");
        tryAttempt ++;
    }
    testVictory(guess,randomNumber);
};

function testVictory(guess, random){
    alert(message = (guess==random)? "Vous avez réussi":"Vous avez perdu, le nombre était"+randomNumber);
    game();
}

