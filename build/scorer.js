"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TieBreakScorer = exports.GameScorer = void 0;
var GameScorer = /** @class */ (function () {
    function GameScorer() {
        this.pointValues = ["love", "15", "30", "40"];
    }
    GameScorer.prototype.score = function (players) {
        var difference = Math.abs(players[0].points - players[1].points);
        if (difference >= 2) {
            if (players[0].points >= 4 || players[1].points >= 4) {
                return "";
            }
        }
        var threeEach = players[0].points >= 3 && players[1].points >= 3;
        if (threeEach) {
            switch (difference) {
                case 0:
                    return "Deuce";
                case 1:
                    if (players[0].points > players[1].points) {
                        return "Advantage " + players[0].name;
                    }
                    else {
                        return "Advantage " + players[1].name;
                    }
                case 2:
                    return "";
                default:
                    return "Shouldn't be possible";
            }
        }
        return this.pointValues[players[0].points] + "-" + this.pointValues[players[1].points];
    };
    return GameScorer;
}());
exports.GameScorer = GameScorer;
var TieBreakScorer = /** @class */ (function () {
    function TieBreakScorer() {
    }
    TieBreakScorer.prototype.score = function (players) {
        var difference = Math.abs(players[0].points - players[1].points);
        if (difference === 0) {
            return players[0].points + "-all";
        }
        if (players[0].points >= 7 || players[1].points >= 7) {
            if (difference >= 2) {
                return "";
            }
        }
        return players[0].points + " - " + players[1].points;
    };
    return TieBreakScorer;
}());
exports.TieBreakScorer = TieBreakScorer;
