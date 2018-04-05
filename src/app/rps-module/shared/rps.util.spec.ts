import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { addHands, addResult, compareHands, generateHand, generateNewGameStateAfterTurn, increaseRoundsWon, initialGameState } from 'app/rps-module/shared/rps.util';

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

    describe('addHands', () => {
        it('returns a new game state with the given hands', () => {
            const humandHand = RockPaperScissors.Rock;
            const computerHand = RockPaperScissors.Paper;

            const gameState = initialGameState;
            const newGameState = addHands(humandHand, computerHand)(gameState);

            expect(newGameState.human).toBe(humandHand);
            expect(newGameState.computer).toBe(computerHand);
        });
    });

    describe('addResult', () => {
        it('returns a new game state with result ', () => {
            const gameState: GameState = {
                ...initialGameState,
                human: RockPaperScissors.Rock,
                computer: RockPaperScissors.Scissors
            };
            const expectedValue = compareHands(gameState.human, gameState.computer);
            expect(addResult(gameState).result).toBe(expectedValue);
        });
    });

    describe('increaseRoundsWon', () => {
        it('increases the rounds of human if won', () => {
            const gameState: GameState = {
                ...initialGameState,
                result: Result.Won
            };
            expect(increaseRoundsWon(gameState).humanRoundsWon).toBe(gameState.humanRoundsWon + 1);
        });
        it('increases the rounds of computer if lost', () => {
            const gameState: GameState = {
                ...initialGameState,
                result: Result.Lost
            };
            expect(increaseRoundsWon(gameState).computerRoundsWon).toBe(gameState.computerRoundsWon + 1);
        });
    });

    describe('generateNewGameStateAfterTurn', () => {
        it('generates a new game state after a turn', () => {
            const gameState: GameState = {
                human: RockPaperScissors.Rock,
                computer: RockPaperScissors.Scissors,
                result: Result.Won,
                humanRoundsWon: 10,
                computerRoundsWon: 5
            };

            const humanHand = RockPaperScissors.Paper;
            const computerHand = RockPaperScissors.Scissors;

            const newGameState = generateNewGameStateAfterTurn(humanHand, computerHand)(gameState);

            expect(newGameState.human).toBe(humanHand);
            expect(newGameState.computer).toBe(computerHand);
            expect(newGameState.result).toBe(Result.Lost);
            expect(newGameState.computerRoundsWon).toBe(gameState.computerRoundsWon + 1);
            expect(newGameState.humanRoundsWon).toBe(gameState.humanRoundsWon);
        });
    });
});
