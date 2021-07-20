
/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */



 const test = 'abcdefghiklmnopqrstuvwxyz';
 const numbers = "0123456789";
 const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const charspe = "`~!@#$%^&*()-_=+[{]}|;:',<.>/?";
 const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}|;:',<.>/?"


 /* Je recupere le tableau 
 Je demannde de generer 8 caractere
 min 1 maj, 1 caracter spé et 1 chiffre
 je console.log le tout
 */
 
function generatorPassword (){

    var randomstring = "";

    for(let i=0;i<5;i++){
   
        randomstring += characters.charAt(Math.random()*characters.length);

    }
randomstring += upperChars.charAt(Math.random() * upperChars.length);
randomstring += numbers.charAt(Math.random() * numbers.length);
randomstring += charspe.charAt(Math.random() * charspe.length);
    
return shuffle(randomstring);
}



 function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

console.log (generatorPassword());


