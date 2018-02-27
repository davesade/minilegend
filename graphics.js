function doTheGraphics(result, players) {

  let gameFrame = createDiv('');
  gameFrame.addClass('gameFrame');

  for (let j = 0; j < players.length; j++) {

    let gameRow = createDiv('');
    gameRow.addClass('gameRow');
    //gameRow.parent('gameFrame');

    for (let i = 0; i < deckSize+1; i++){
      let cardDiv = createDiv('');
      cardDiv.addClass(players[j].cards[i]);
      //cardDiv.parent('gameRow')
    }

    let nameDiv = createDiv(players[j].name);
    nameDiv.addClass('name');
    //nameDiv.parent('gameRow');

    if (result.playerAwinner) {
      let scoreDiv = createDiv('');
      scoreDiv.addClass('winner');
      //scoreDiv.parent('gameRow');
    }
  }
}
