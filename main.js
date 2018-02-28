  const deckSize = 5;
  const maxPlayers = 2; // HARDCODED 2
  var players = [];
  var fight = [];

  function preload() {
    if (maxPlayers / 2 === maxPlayers % 2 ){
      console.log('Players must be in pair!')
    }
  }

  function setup() {
  noCanvas();

  let startButton = createButton('Start');

  function renderBattle() {
      for (let i = 0; i < maxPlayers; i++) {
          players[i] = new Player(deckSize)
      }

      console.log(players);

      battle(players, function(err, result){
          if (err) {
              console.log('Something went wrong!')
          } else {
              console.log(result);
              doTheGraphics(result, players);
          }

      });
  }

  startButton.mousePressed(renderBattle);
  }
