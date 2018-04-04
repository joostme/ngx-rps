import { Component, Input, OnInit } from '@angular/core';
import { GameState, Result, resultDescriptions } from 'app/rps-module/shared/rps.model';
import { isNil } from 'lodash';

@Component({
    selector: 'rps-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {

    @Input()
    gameState: GameState;

    resultDescriptions = resultDescriptions;

    get result(): string {
        if (!isNil(this.gameState)) {
            return this.resultDescriptions[this.gameState.result];
        }
        return 'Play a game!';
    }
}
