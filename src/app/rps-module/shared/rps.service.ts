import { Injectable } from '@angular/core';
import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { compareHands, generateHand, initialGameState } from 'app/rps-module/shared/rps.util';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RpsService {

    private gameStateSubject: Subject<GameState> = new Subject();

    playTurn(hand: RockPaperScissors) {
        const computerHand = generateHand();

        const gameState: GameState = {
            human: hand,
            computer: computerHand,
            result: compareHands(hand, computerHand)
        };

        this.emitNewGameState(gameState);
    }

    getGameState(): Observable<GameState> {
        return this.gameStateSubject;
    }

    private emitNewGameState(gameState: GameState) {
        this.gameStateSubject.next(gameState);
    }

}
