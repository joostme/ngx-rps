import { Injectable } from '@angular/core';
import { GameState, Result, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { compareHands, generateHand, generateNewGameStateAfterTurn, initialGameState } from 'app/rps-module/shared/rps.util';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RpsService {

    private gameStateSubject: Subject<GameState> = new Subject();
    private gameState: GameState = initialGameState;

    playTurn(hand: RockPaperScissors) {
        const computerHand = generateHand();

        this.gameState = generateNewGameStateAfterTurn(this.gameState)(hand)(computerHand);

        this.emitNewGameState();
    }

    getGameState(): Observable<GameState> {
        return this.gameStateSubject;
    }

    private emitNewGameState() {
        this.gameStateSubject.next(this.gameState);
    }

}
