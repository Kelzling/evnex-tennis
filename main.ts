import { Match } from "./match"

let match = new Match("player one", "player two")

while (!match.complete) {
    if (Math.random() > .5) {
        match.pointWonBy("player one")
    } else {
        match.pointWonBy("player two")
    }
    console.log(match.score())
}