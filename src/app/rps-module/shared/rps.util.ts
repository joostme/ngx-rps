import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { flow } from 'lodash';

export const compareHands = (handsA: RockPaperScissors, handsB: RockPaperScissors): Result => {

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
};

export const generateHand = (): RockPaperScissors => {

    const options = Object.values(RockPaperScissors);
    const random = Math.floor(Math.random() * options.length);

    return <RockPaperScissors> options[random];
};

export const initialGameState: GameState = {
    computer: null,
    human: null,
    result: null,
    humanRoundsWon: 0,
    computerRoundsWon: 0
};

export const addHands =
    (humanHand: RockPaperScissors, computerHand: RockPaperScissors) =>
        (gameState: GameState): GameState => ({
            ...gameState,
            human: humanHand,
            computer: computerHand
        });

export const addResult =
    (gameState: GameState): GameState => ({
        ...gameState,
        result: compareHands(gameState.human, gameState.computer)
    });


export const increaseRoundsWon = (gameState: GameState): GameState => {
    return {
        ...gameState,
        humanRoundsWon: gameState.result === Result.Won ? gameState.humanRoundsWon + 1 : gameState.humanRoundsWon,
        computerRoundsWon: gameState.result === Result.Lost ? gameState.computerRoundsWon + 1 : gameState.computerRoundsWon
    };
};

export const generateNewGameStateAfterTurn =
    (humanHand: RockPaperScissors, computerHand: RockPaperScissors) =>
        (gameState: GameState): GameState =>
            flow(
                addHands(humanHand, computerHand),
                addResult,
                increaseRoundsWon
            )(gameState);

