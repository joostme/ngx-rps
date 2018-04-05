import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';

export function compareHands(handsA: RockPaperScissors, handsB: RockPaperScissors): Result {

    if (handsA === handsB) {
        return Result.Draw;
    }

    let won: boolean;
    switch (handsA) {
        case RockPaperScissors.Rock: {
            won = handsB === RockPaperScissors.Scissors;
            break;
        }
        case RockPaperScissors.Paper: {
            won = handsB === RockPaperScissors.Rock;
            break;
        }
        case RockPaperScissors.Scissors: {
            won = handsB === RockPaperScissors.Paper;
            break;
        }
    }
    return won ? Result.Won : Result.Lost;
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

export const generateNewGameStateAfterTurn =
    (gameState: GameState) =>
        (humanHand: RockPaperScissors) =>
            (computerHand: RockPaperScissors): GameState => ({
                ...gameState,
                human: humanHand,
                computer: computerHand,
                result: compareHands(humanHand, computerHand)
            });
