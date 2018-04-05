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
    result: Result;

    getResultText(): string {
        if (!isNil(this.result)) {
            return resultDescriptions[this.result];
        }
        return 'Play a game!';
    }
}
