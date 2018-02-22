function Player(deckSize){
    this.name = generateName();
    this.cards = [];
    for (var i = 0; i < deckSize; i++) {
        this.cards[i] = card();
    }
}