// Create an application that generates an array of 5 random numbers 1-10. The user should then guess a number and the app will tell them how many times that number exists within the array.

function guessNumber(){
	var numArray=[];
    var stringArray="";
    for(i=0;i<5;i++)
    {
        numArray[i]=getRndInteger(1,10);
        stringArray+=numArray[i] + " "
    }
    var userGuess = prompt("Guess a number between 1-10 in the array of 5 numbers");
    var elementCount = countElementInArray(userGuess, numArray);
    alert("Your guess of "+userGuess+" appeared in the random array "+elementCount+" time(s)");
    alert("The random array of numbers was: "+stringArray);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function countElementInArray(guess, array){
    var count=0;
    for(i=0;i<array.length;i++){
        if(array[i]==guess){
            count++;
        }
    }
    return count;
}