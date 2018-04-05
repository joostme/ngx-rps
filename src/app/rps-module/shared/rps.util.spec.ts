import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { compareHands, generateHand, generateNewGameStateAfterTurn, initialGameState } from 'app/rps-module/shared/rps.util';

describe('RPS Utils', () => {
    describe('compareHands', () => {
        it('returns won if handA is Rock and handB is Scissors', () => {
            expect(compareHands(RockPaperScissors.Rock, RockPaperScissors.Scissors)).toBe(Result.Won);
        });
        it('returns won if handA is Paper and handB is Rock', () => {
            expect(compareHands(RockPaperScissors.Paper, RockPaperScissors.Rock)).toBe(Result.Won);
        });
        it('returns won if handA is Scissors and handB is Paper', () => {
            expect(compareHands(RockPaperScissors.Scissors, RockPaperScissors.Paper)).toBe(Result.Won);
        });


        it('returns lost if handA is Rock and handB is Paper', () => {
            expect(compareHands(RockPaperScissors.Rock, RockPaperScissors.Paper)).toBe(Result.Lost);
        });
        it('returns won if handA is Paper and handB is Scissors', () => {
            expect(compareHands(RockPaperScissors.Paper, RockPaperScissors.Scissors)).toBe(Result.Lost);
        });
        it('returns won if handA is Scissors and handB is Rock', () => {
            expect(compareHands(RockPaperScissors.Scissors, RockPaperScissors.Rock)).toBe(Result.Lost);
        });

        it('returns draw if both hands are equal', () => {
            expect(compareHands(RockPaperScissors.Paper, RockPaperScissors.Paper)).toBe(Result.Draw);
        });


    });

    describe('generateHand', () => {
        it('returns a RockPaperScissors value', () => {
            const value = generateHand();
            expect(
                value === RockPaperScissors.Paper ||
                value === RockPaperScissors.Rock ||
                value === RockPaperScissors.Scissors
            ).toBe(true);
        });
    });

    describe('generateNewGameStateAfterTurn', () => {
        it('returns a new game state with the given hands', () => {
            const humandHand = RockPaperScissors.Rock;
            const computerHand = RockPaperScissors.Paper;

            const gameState = initialGameState;
            const newGameState = generateNewGameStateAfterTurn(gameState)(humandHand)(computerHand);

            const expectedGameState: GameState = {
                human: humandHand,
                computer: computerHand,
                result: compareHands(humandHand, computerHand)
            };

            expect(newGameState).toEqual(expectedGameState);
        });
    });
});
