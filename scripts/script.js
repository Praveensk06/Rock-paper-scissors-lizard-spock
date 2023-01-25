// get elements
const userScoreEl = document.querySelector('.user-scr');
const comScoreEl = document.querySelector('.comp-scr')

// variables
let userScore = 0;
let comScore = 0;

// get user choice function

const getComChoice = function(){
  const randomNumber = Math.floor(Math.random()*5)+1;

  if (randomNumber === 1){
    return 'rock';
  }else if(randomNumber === 2){
    return 'paper';
  }else if(randomNumber === 3){
    return 'scissors';
  }else if(randomNumber === 4){
    return 'lizard';
  }else if(randomNumber === 5){
    return 'spock';
 }};



const playGame = function(weapon){
  const user = weapon;
  const comp= getComChoice();

  const result = getResult(user , comp);
  if(result === 'WON'){
    userScore = userScore + 1;
  }else if (result === 'LOST'){
    comScore = comScore + 1;
  }
  

  userScoreEl.innerText = userScore;
  comScoreEl.innerText = comScore;

  console.log((comScoreEl))


  document.querySelector('.user-choice').innerText = `You Selected ${user}`;
  document.querySelector('.com-choice').innerText = `computer Selected ${comp}`;
  document.querySelector('.result').innerText = `The Result is ${result}`;
};




// GAME ENGINE
const getResult = function(userChoice , comChoice){
  if(userChoice === 'rock'){
    if(comChoice === 'rock'){
      return 'DRAW';
    }else if(comChoice === 'paper'){
      return 'LOST';
    }else if(comChoice === 'scissors'){
      return 'WON';
    }else if(comChoice === 'lizard'){
      return 'WON';
    }else if(comChoice === 'spock'){
      return 'LOST';
    }

      }else if(userChoice === 'paper'){
        if(comChoice === 'rock'){
          return 'WON';
        }else if(comChoice === 'paper'){
          return 'DRAW';
        }else if(comChoice === 'scissors'){
          return 'LOST';
        }else if(comChoice === 'lizard'){
          return 'LOST';
        }else if(comChoice === 'spock'){
          return 'WON';
        }

      }else if(userChoice === 'scissors'){
        if(comChoice === 'rock'){
          return 'LOST';
        }else if(comChoice === 'paper'){
          return 'WON';
        }else if(comChoice === 'scissors'){
          return 'DRAW';
        }else if(comChoice === 'lizard'){
          return 'WON';
        }else if(comChoice === 'spock'){
          return 'LOST';
        }

      }else if(userChoice === 'lizard'){
        if(comChoice === 'rock'){
          return 'LOST';
        }else if(comChoice === 'paper'){
          return 'WON';
        }else if(comChoice === 'scissors'){
          return 'LOST';
        }else if(comChoice === 'lizard'){
          return 'DRAW';
        }else if(comChoice === 'spock'){
          return 'WON';
        }

      }else if(userChoice === 'spock'){
        if(comChoice === 'rock'){
          return 'WON';
      }else if(comChoice === 'paper'){
          return 'LOST';

      }else if(comChoice === 'scissors'){
          return 'W0N';
      }else if(comChoice === 'lizard'){
         return 'LOST';
      }else if(comChoice === 'spock'){
         return 'DRAW';
    }}
  }

