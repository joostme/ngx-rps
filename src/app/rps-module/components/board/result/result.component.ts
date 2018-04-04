import { Component, Input, OnInit } from '@angular/core';
import { GameState, Result, RockPaperScissors, resultDescriptions } from 'app/rps-module/shared/rps.model';
import { isNil } from 'lodash';

@Component({
    selector: 'rps-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {

    @Input()
    gameState: GameState;

    rockPaperScissors = RockPaperScissors;
    resultDescriptions = resultDescriptions;

    get result(): string {
        if (!isNil(this.gameState)) {
            return this.resultDescriptions[this.gameState.result];
        }
        return 'Play a game!';
    }

    get computerHand(): string {
        if (!isNil(this.gameState)) {
            return this.gameState.computer;
        }
        return null;
    }

    private isOption(option: RockPaperScissors): boolean {
        return this.computerHand === option;
    }
}
