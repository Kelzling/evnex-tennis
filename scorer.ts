import { Player } from './player';

export interface IGameScorer {
    score(players : Player[]) : string
}

export class GameScorer {
    private pointValues = ["love", "15", "30", "40"]

    public score(players : Player[]) : string {
        let difference = Math.abs(players[0].points - players[1].points)
        if (difference >= 2) {
            if (players[0].points >= 4 || players[1].points >= 4) {
                return "";
            }
        }
        let threeEach = players[0].points >= 3 && players[1].points >= 3;
        if (threeEach) {
            switch (difference) {
                case 0:
                    return "Deuce";
                case 1:
                    if (players[0].points > players[1].points) {
                        return `Advantage ${players[0].name}`;
                    } else {
                        return `Advantage ${players[1].name}`;
                    }
                case 2:
                    return "";
                default:
                    return "Shouldn't be possible";
            }
        }

        return `${this.pointValues[players[0].points]}-${this.pointValues[players[1].points]}`;
    }
}

export class TieBreakScorer {
    public score(players : Player[]) : string {
        let difference = Math.abs(players[0].points - players[1].points)
        if (difference === 0) {
            return `${players[0].points}-all`
        }
        if (players[0].points >= 7 || players[1].points >= 7) {
            if (difference >= 2) {
                return ""
            }
        }

        return `${players[0].points} - ${players[1].points}`;
    }
}