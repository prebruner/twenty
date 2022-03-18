var num  = Math.floor(Math.random() * 10 + 1);
console.log(num)
num = num + Math.floor(Math.random() * 10 + 1);
console.log(num)
var drawCards
var compwins = 0;
var userwins = 0;
do{
do{
    num = num + Math.floor(Math.random() * 10 + 1);
    console.log(num)
    if (num > 20){
        userwins ++ 
        play = prompt(`The Computer went over 20 and you won! Now the score is ${compwins} computer and ${userwins} you. Would you like to play again?`)
        console.log("userwins" + userwins)
        if (play == "yes"){
            num = 0;
        }
    }
}while(num < 16)

if(num > 20){
    console.log(userwins)
}else{
    var usernum = Math.floor(Math.random() * 10 + 1);
    console.log(usernum)
    do{
        usernum = usernum + (Math.floor(Math.random() * 10 + 1));
        console.log(usernum)
        if (usernum > 20){
            drawCards = "no";
            compwins ++
            console.log("compwins" + compwins);
        }else{
            drawCards = prompt(`Your total now is ${usernum} would you like to draw another card?`)
        }
    }while(drawCards == "yes")
        
    if (usernum > 20){
        alert(`Sorry you lost by going over 20`)
        play = prompt(`Right now the score is ${compwins} computer and ${userwins} you. Would you like to play again please type "yes" or "no."`)
        num = 0
        usernum = 0
    }else if (num > usernum){
        alert(`Computer Wins! It's number was hgiher than yours.`)
        compwins ++;
        console.log("compwins" + compwins)
        play = prompt(`Right now the score is ${compwins} computer and ${userwins} you. Would you like to play again please type "yes" or "no."`)
        num = 0
        usernum = 0
    }else if(usernum > num){
        alert(`You Win! Your number was hgiher than the computers.`)
        userwins ++
        console.log("userwins" + userwins)
        play = prompt(`Right now the score is ${compwins} computer and ${userwins} you. Would you like to play again please type "yes" or "no."`)
        num = 0
        usernum = 0
    }else if(usernum = num){
        alert(`You tied with the computer, no one wins a point this time`)
        play = prompt(`Right now the score is ${compwins} computer and ${userwins} you. Would you like to play again please type "yes" or "no."`)
        num = 0
        usernum = 0
    }
}
}while(play == "yes")

if(compwins > userwins){
    alert(`Unfortunately you lost to a computer lol. Final score was ${compwins} computer, ${userwins} you. GG's mate!`)
}else if(userwins > compwins){
    alert(`Congratulations you beat the computer with a final score of ${userwins} you, and ${compwins} the computer`)
}else{
    alert(`Wow, after a long fought battle you ended in a tie. Try better next time`)
}





/*

During this round, the program will see who won: if the computer went over 20, the user wins automatically (this means the user doesn't have to draw numbers). If the user goes over 20, the computer will win. If both players are under 20, the player with the total closest to 20 will win.
At the end of the round, a counter will show the number of wins and loses both players have. If the user wants to play again, this counter will remain active for the next round (this means the counter will not be reset to 0 for the next round.
The program will ask the user to play again. If so, a new round will begin following the rules above. If not, a message will show up with the final score of all the rounds.





set user to 0

-- inside do/while loop

get random
add it to user
ask question

if yes
*/