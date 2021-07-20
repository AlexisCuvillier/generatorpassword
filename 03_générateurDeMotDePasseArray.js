
/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */



 var letters = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var numbers = [0,1,2,3,4,5,6,7,8,9];
 var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var charspe = ['~','!','@','-','#','$','"']
 var randomstring = '';


 /* Je recupere le tableau 
 Je demannde de generer 8 caractere
 min 1 maj, 1 caracter spé et 1 chiffre
 je console.log le tout
 */

 for(var i=0;i<4;i++){
    var rlet = Math.floor(Math.random()*letters.length);
    randomstring += letters[rlet];
}
for(var i=0;i<1;i++){
  
    randomstring += upperChars[rlet];
}

for(var i=0;i<2;i++){
    var rnum = Math.floor(Math.random()*numbers.length);
    randomstring += numbers[rnum];
}
for(var i=0;i<1;i++){
    var rlet = Math.floor(Math.random()*charspe.length);
    randomstring += charspe[rlet];
}

console.log (randomstring)



