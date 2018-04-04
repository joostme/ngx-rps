import { Component, Input, OnInit } from '@angular/core';
import { GameState, Result } from 'app/rps-module/shared/rps.model';
import { isNil } from 'lodash';

@Component({
    selector: 'rps-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {

    @Input()
    gameState: GameState;

    get won() {
        return this.getResult(Result.Won);
    }

    get lost() {
        return this.getResult(Result.Lost);
    }

    get draw() {
        return this.getResult(Result.Draw);
    }

    private getResult(result: Result): boolean {
        if (!isNil(this.gameState)) {
            return this.gameState.result === result;
        }
        return false;
    }
}
