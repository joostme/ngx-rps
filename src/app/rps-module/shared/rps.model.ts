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

type ResultDescriptions = {
    [T in Result]: string;
};

export const resultDescriptions: ResultDescriptions = {
    DRAW: 'It\'s a draw!',
    LOST: 'You lost!',
    WON: 'You won!'
};

export interface GameState {
    human: RockPaperScissors;
    computer: RockPaperScissors;
    result: Result;
}
