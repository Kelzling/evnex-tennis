export class Player {
    name : string
    points : number
    games : number

    constructor(name : string) {
        this.name = name;
        this.points = 0;
        this.games = 0;
    }

    public newGame() : void {
        this.points = 0;
    }
}