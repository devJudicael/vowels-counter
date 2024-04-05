let textarea = document.querySelector("#textarea")
let button = document.querySelector ("button")
let spirit = document.querySelector(".spirit")

let saisie;
var numvow = 0;

var letter;

var vowels = ["a" , "e" , "i" , "o" , "u" , "y"]

button.addEventListener ("click" , (e)=>{

    e.preventDefault()  // bloquer l'action par défaut (envoi de formulaire)


    saisie = textarea.value // recuperer la saisie

    saisie = saisie.toLowerCase() // convertir en minuscule

    for (let i = 0; i < saisie.length; i++) {
        letter = saisie.charAt (i) // recuperer chaque lettre
        

    vowels.forEach(char => {
    
        if (char == letter) {       // verifier si une lettre correspond à une voyelle et incrementer
            
            numvow++
        }

});

      }




   spirit.textContent = numvow;

   numvow=0;    // renitialiser la valeur de numvow;



})