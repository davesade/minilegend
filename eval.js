function battle(players, callback) {

  console.log(JSON.stringify(players));

  let combinations = {
    archer: {
      name: "archer",
      defeats: ["pikeman", "knight"]
    },
    rogue: {
      name: "rogue",
      defeats: ["archer", "horseman"]
    },
    pikeman: {
      name: "pikeman",
      defeats: ["rogue", "knight"]
    },
    knight: {
      name: "knight",
      defeats: ["rogue", "horseman"]
    },
    horseman: {
      name: "horseman",
      defeats: ["pikeman", "archer"]
    }
  };

  let cards=[];
  players[0].score = 0;
  players[1].score = 0;

  for (let i = 0; i < players.length; i++){
    cards.push(players[i].cards);
  }

  var result  = {

    message : "ok",
    playerAhistory : [],
    playerBhistory : [],
    draw : false,
    playerAwinner: false,
    playerBwinner: false

  }


  console.log(cards);

  function giveScore() {
    for (let turn = 0; turn < deckSize; turn++ ){
      if (cards[0][turn] === cards[1][turn]){
        console.log('DRAW');
        result.playerAhistory.push(-1);
        result.playerBhistory.push(-1);
      } else {
        console.log(cards[0][turn]);
        console.log(cards[1][turn]);
        let leadCard = combinations[cards[0][turn]]
        let victory = leadCard.defeats.indexOf(cards[1][turn]) > -1;
        if (!victory){
          console.log(players[0].name + " wins with " + cards[0][turn] + " defeating " + cards[1][turn] + " of " + players[1].name + ".");
          result.playerAhistory.push(1);
          result.playerBhistory.push(0);
          players[0].score++;
        } else {
          console.log(players[1].name + " wins with " + cards[1][turn] + " defeating " + cards[0][turn] + " of " + players[0].name + ".");
          players[1].score++;
          result.playerAhistory.push(0);
          result.playerBhistory.push(1);
        }
        console.log(victory);

      }
    };

  }

  giveScore();

  if (players[0].score > players[1].score) {
    result.playerAwinner = true;
  } else {
    if (players[0].score > players[1].score) {
      result.playerBwinner = true;
    } else {
      result.draw = true;
    }
  }





  callback(null, result);

}
