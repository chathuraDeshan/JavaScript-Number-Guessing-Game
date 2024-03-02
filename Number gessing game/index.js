const minNum = 0;
const maxNum = 100;
const answerNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("plase enter a valid number");
    }

    else{
        attemps++;
        if (guess < answerNum){
            window.alert("to low! try again");
        }
        else if (guess > answerNum){
            window.alert("too high! try again");
        }
        else{
            window.alert(`correct! answer was ${answerNum}. it took you ${attemps} attemps`);
            running = false;
        }
    }
   


}