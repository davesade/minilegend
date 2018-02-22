const deckSize = 5;
const maxPlayers = 2;
var players = [];
var fight = [];

function preload() {

}

function setup() {

    for (var i = 0; i < maxPlayers; i++) {
        players[i] = new Player(deckSize)
    }

    createP(JSON.stringify(players));

    battle(players[0], players[1], function(err, result){
        if (err) {
            console.log('Something went wrong!')
        } else {
            console.log(result)
        }

    });

}

function draw() {


}