
var number=[,,,];
GenerateNumber(number);
Greeting();
setTimeout(GamePlay,3500);

function  GenerateNumber(number){
    number[0]=Math.floor(Math.random()*9) + 1;
    for(var i=1;i<4;i++){
     do{
         var generatednumber=Math.floor(Math.random()*9) + 1;
         number[i]=generatednumber;
         if(IsNumberTheSame(number,i)== false){
             break;
         }
 
     }while(true);
    }
 
 return number;
 }
 
 function IsNumberTheSame(number,i){
     for(var a=0;a<i;a++){
         if(number[a] == number[i]){
             return true;
         }
     }
    return false;
 }
function Greeting(){

    console.log("Добро пожаловать в игру Быки и коровы! :) ");

    do
    {
        var readlineSync = require('readline-sync');        
        var username =readlineSync.question("What's your name please ?");
       if(username.length != 0 || username.length < 25){
        break;
       }    
    
    }while(true)
    console.log("You're always welcome, " + username + "!");
    console.log("Компьютер загадал число...");
    console.log("Начинайте отгадывать. ");
}

function GamePlay(){
    do{
        var readlineSync = require('readline-sync');        
        
        var usernumber=readlineSync.question("Guess number...");
        var sameNumbers=IsHaveSameNumbers(usernumber);

        if(usernumber.length == 4 && sameNumbers == false){
          var bullCount=0;
          var cowCount=0;
          var CheckCow=[false,false,false,false];

          //CountBulls
            if(number[0] == usernumber[0]){
                bullCount++;
                CheckCow[0]=true;
            }
            if(number[1] == usernumber[1]){
                bullCount++;
                CheckCow[1]=true;
            }
            if(number[2] == usernumber[2]){
                bullCount++;
                CheckCow[2]=true;
            }
            if(number[3] == usernumber[3]){
                bullCount++;
                CheckCow[3]=true;
            }
           //CountCows
            if(CheckCow[0] == false){
                if(usernumber.includes(number[0])){ 
                    cowCount++;
                }
            }
            if(CheckCow[1] == false){
                if(usernumber.includes(number[1])){ 
                    cowCount++;
                }
            }
            if(CheckCow[2] == false){
                if(usernumber.includes(number[2])){ 
                    cowCount++;
                }
            }
            if(CheckCow[3] == false){
                if(usernumber.includes(number[3])){ 
                    cowCount++;
                }
            }
     
           //OutPut cows and bulls

           console.log(usernumber + " " + bullCount + " быков"+ " " + cowCount + " коров");

           //Win and exit from game! :) 
           if(bullCount == 4){
               console.log("Так, загадуване число було: " + String(String(number[0])+String(number[1])+String(number[2])+String(number[3])));
               break;
           }        
        }
        else{
            console.log("Некорректное число");
        }

    }while(true);
}

function IsHaveSameNumbers(usernumber){

   if((usernumber[0] == usernumber[1]) == true || (usernumber[0] == usernumber[2])== true || (usernumber[0] == usernumber[3]) == true) {
       return true;
   }
   if((usernumber[1] == usernumber[2]) == true || (usernumber[1] == usernumber[3]) == true){
       return true;
   }
   if((usernumber[2] == usernumber[3]) == true){
       return true;
   }
    return false;
}