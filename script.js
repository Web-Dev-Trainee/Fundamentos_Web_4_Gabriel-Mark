alert("Pronto para iniciar o jogo? Clique em ok.")

var userChoice = prompt("Voce escolhe pedra, papel ou tesoura?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {

    computerChoice = "pedra";

} else if (computerChoice <= 0.67) {

    computerChoice = "papel";

} else {

    computerChoice = "tesoura";

}

alert("Computer: " + computerChoice);

var compare = function (choice1, choice2) {


    if (choice1 === choice2)

        alert ("O resultado é um empate!");

    else if (choice1 === "pedra") {

        if (choice2 === "tesoura")

        alert ("pedra vence");

        else {

            alert ("papel vence");

        }
    
    } 

    else if (choice1 === "papel") {

        if (choice2 === "pedra")

        alert ("papel vence");

        else {

            alert ("tesoura vence");

        }

    } 
 
    else if (choice1 === "tesoura") {

        if (choice2 === "pedra")

        alert ("pedra vence");

        else {

            alert( "tesoura vence");

        }

    } else if (choice1 === "Pedra") {

            if (choice2 === "tesoura")
    
            alert ("pedra vence");

            if (choice2 === "pedra")

            alert ("O resultado é um empate!");
    
            else {
    
                alert ("papel vence");
    
            }
        
        } 
    
        else if (choice1 === "Papel") {
    
            if (choice2 === "pedra")
    
            alert ("papel vence");

            if (choice2 === "papel")

            alert ("O resultado é um empate!");
    
            else {
    
                alert ("tesoura vence");
    
            }
    
        } 
     
        else if (choice1 === "Tesoura") {
    
            if (choice2 === "pedra")
    
            alert ("pedra vence");

            if (choice2 === "tesoura")

            alert ("O resultado é um empate!");
    
            else {
    
                alert( "tesoura vence");
    
            }    
    } 

};

compare(userChoice, computerChoice)
