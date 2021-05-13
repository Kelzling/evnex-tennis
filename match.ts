import { Player } from './player';
import { IGameScorer, GameScorer, TieBreakScorer } from './scorer';

export class Match {
    complete : boolean;
    gamesPlayed : number;
    gameScorer : IGameScorer;
    players : Player[];

    constructor(playerOne : string, playerTwo : string) {
        this.complete = false;
        this.gamesPlayed = 0;
        this.players = [new Player(playerOne), new Player(playerTwo) ];
        this.gameScorer = new GameScorer();
    }

    private newGame() : void {
        this.gamesPlayed++;
        this.players[0].newGame();
        this.players[1].newGame();
        if (this.gamesPlayed >= 12) {
            this.gameScorer = new TieBreakScorer();
        }
    }

    private setOver() : boolean {
        if (this.gamesPlayed >= 13) {
            return true
        }
        let difference = Math.abs(this.players[0].games - this.players[1].games)
        
        return difference >= 2 && (this.players[0].games >= 6 || this.players[1].games >= 6)
    }

    public pointWonBy(player : string) : void {
        this.players.forEach((p) => {
            if (p.name === player) {
                p.points++;
            }
        })
    }

    public score() : string {
        let gameScore = "";
        if (!this.complete) {
            gameScore = this.gameScorer.score(this.players);
            if (gameScore == "") {
                if (this.players[0].points > this.players[1].points) {
                    this.players[0].games++;
                } else {
                    this.players[1].games++;
                }

                this.newGame();
            }

            if (this.setOver()) {
                this.complete = true;
            }
        }
        
        let score = "";
        if (this.complete) {
            score += "Match Complete: ";
        }
        score += `${this.players[0].games}-${this.players[1].games}`;

        if (gameScore !== "") {
            score += ", " + gameScore;
        }

        return score;
    }
}