export enum RockPaperScissors {
    Rock = 'ROCK',
    Paper = 'PAPER',
    Scissors = 'SCISSORS'
}

export enum Result {
    Won = 'WON',
    Lost = 'LOST',
    Draw = 'DRAW'
}

export interface GameState {
    human: RockPaperScissors;
    computer: RockPaperScissors;
    result: Result;
}
