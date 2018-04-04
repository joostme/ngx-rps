import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';

export function compareHands(handsA: RockPaperScissors, handsB: RockPaperScissors): Result {

    if (handsA === handsB) {
        return Result.Draw;
    }

    switch (handsA) {
        case RockPaperScissors.Rock: {
            return handsB === RockPaperScissors.Scissors ? Result.Won : Result.Lost;
        }
        case RockPaperScissors.Paper: {
            return handsB === RockPaperScissors.Rock ? Result.Won : Result.Lost;
        }
        case RockPaperScissors.Scissors: {
            return handsB === RockPaperScissors.Paper ? Result.Won : Result.Lost;
        }
    }
}

export function generateHand(): RockPaperScissors {

    const options = Object.values(RockPaperScissors);
    const random = Math.floor(Math.random() * options.length);

    return <RockPaperScissors> options[random];
}

export const initialGameState: GameState = {
    computer: null,
    human: null,
    result: null
};
