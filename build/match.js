"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
var player_1 = require("./player");
var scorer_1 = require("./scorer");
var Match = /** @class */ (function () {
    function Match(playerOne, playerTwo) {
        this.complete = false;
        this.gamesPlayed = 0;
        this.players = [new player_1.Player(playerOne), new player_1.Player(playerTwo)];
        this.gameScorer = new scorer_1.GameScorer();
    }
    Match.prototype.newGame = function () {
        this.gamesPlayed++;
        this.players[0].newGame();
        this.players[1].newGame();
        if (this.gamesPlayed >= 12) {
            this.gameScorer = new scorer_1.TieBreakScorer();
        }
    };
    Match.prototype.setOver = function () {
        if (this.gamesPlayed >= 13) {
            return true;
        }
        var difference = Math.abs(this.players[0].games - this.players[1].games);
        return difference >= 2 && (this.players[0].games >= 6 || this.players[1].games >= 6);
    };
    Match.prototype.pointWonBy = function (player) {
        this.players.forEach(function (p) {
            if (p.name === player) {
                p.points++;
            }
        });
    };
    Match.prototype.score = function () {
        var gameScore = "";
        if (!this.complete) {
            gameScore = this.gameScorer.score(this.players);
            if (gameScore == "") {
                if (this.players[0].points > this.players[1].points) {
                    this.players[0].games++;
                }
                else {
                    this.players[1].games++;
                }
                this.newGame();
            }
            if (this.setOver()) {
                this.complete = true;
            }
        }
        var score = "";
        if (this.complete) {
            score += "Match Complete: ";
        }
        score += this.players[0].games + "-" + this.players[1].games;
        if (gameScore !== "") {
            score += ", " + gameScore;
        }
        return score;
    };
    return Match;
}());
exports.Match = Match;
