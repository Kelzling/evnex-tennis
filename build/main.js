"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("./match");
var match = new match_1.Match("player one", "player two");
while (!match.complete) {
    if (Math.random() > .5) {
        match.pointWonBy("player one");
    }
    else {
        match.pointWonBy("player two");
    }
    console.log(match.score());
}
