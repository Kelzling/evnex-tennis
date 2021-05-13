"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.points = 0;
        this.games = 0;
    }
    Player.prototype.newGame = function () {
        this.points = 0;
    };
    return Player;
}());
exports.Player = Player;
