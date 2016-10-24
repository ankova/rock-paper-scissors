const selectionOptions = ['rock', 'paper', 'scissors'];

let random;

class PlayerController {
    constructor($timeout) {
        'ngInject';

        this._$timeout = $timeout;
        this.player = {wins: 0, won: false};
        this.computer = {wins: 0, won: false};
        this.ties = 0;
        this.tie = false;
        this.roundsCount = 0;
        this.rounds = [];

        const playerSelects = (function (playerSelection){
            const computerSelectionInd = Math.floor(Math.random() * 3);
            const computerSelection = selectionOptions[computerSelectionInd];
            const playerSelectionInd = selectionOptions.indexOf(playerSelection);

            this.player.choice = false;
            this.player.selection = playerSelection;
            this.computer.selection = computerSelection;
            this.checkWinner(playerSelectionInd, computerSelectionInd);
            this.addResults();
            this.addRound();
        }).bind(this);

        this.rock = function () {
            playerSelects('rock');
        };
        this.paper = function () {
            playerSelects('paper');
        };
        this.scissors = function () {
            playerSelects('scissors');
        };
    }

    resetGame() {
        this.player.won = false;
        this.computer.won = false;
        this.tie = false;
    }
    checkWinner(p1, p2) {
        if(p1 !== undefined && p2 !== undefined) {
                if(p1 === p2) {
                    this.ties += 1;
                    this.tie = true;
                    this.winner = 'tie';
                }
                else if(p1 + p2 === 2){
                    this.winner = (p1 === 0) ? 'player' : 'computer';
                }
                else {
                    this.winner = (p1 < p2) ? 'computer' : 'player';
                }
            }
    }

    addResults() {
        if(this.winner === 'player') {
            this.player.wins += 1;
            this.player.won = true;
        }
        else if(this.winner === 'computer'){
            this.computer.wins += 1;
            this.computer.won = true;
        }
        this._$timeout(this.resetGame.bind(this), 1000);
    }

    addRound() {
        this.roundsCount++;
        this.rounds.push({round: this.roundsCount, winner: this.winner});
    }
}

PlayerController.$inject = ['$timeout'];
export default PlayerController;