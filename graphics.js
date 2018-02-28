function doTheGraphics(result, players) {

  let gameFrame = createDiv('');
  gameFrame.addClass('gameFrame');



  for (let j = 0; j < players.length; j++) {
    let gameRow = createDiv('');
    gameRow.addClass('gameRow');
    gameRow.parent(gameFrame);

    for (let i = 0; i < deckSize+1; i++){
      let cardDiv = createDiv('');
      cardDiv.parent(gameRow);
      cardDiv.addClass(players[j].cards[i]);
    }

    let nameDiv = createDiv(players[j].name);
    nameDiv.parent(gameRow);
    nameDiv.addClass('name');

    if (result.playerAwinner) {
      let scoreDiv = createDiv('Player A WINS!');
      scoreDiv.parent(gameRow);
      scoreDiv.addClass('winner');
    }

    if (result.playerBwinner) {
      let scoreDiv = createDiv('Player B WINS!');
      scoreDiv.parent(gameRow);
      scoreDiv.addClass('winner');
    }

    if (result.draw) {
      let scoreDiv = createDiv('DRAW!');
      scoreDiv.parent(gameRow);
      scoreDiv.addClass('draw');
    }

  }
}
