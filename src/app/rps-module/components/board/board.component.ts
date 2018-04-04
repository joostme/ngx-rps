import { Component, OnInit } from '@angular/core';
import { GameState, RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { RpsService } from 'app/rps-module/shared/rps.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rps-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent {

    rockPaperScissors = RockPaperScissors;
    gameState: Observable<GameState>;

    constructor(
        private rpsService: RpsService
    ) {
        this.gameState = this.rpsService.getGameState();
    }

    playTurn(hand: RockPaperScissors) {
        this.rpsService.playTurn(hand);
    }
}
