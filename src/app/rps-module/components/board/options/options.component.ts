import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RockPaperScissors } from '../../../shared/rps.model';

@Component({
    selector: 'rps-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

    @Output()
    onPlayTurn: EventEmitter<RockPaperScissors> = new EventEmitter();

    rockPaperScissors = RockPaperScissors;

    playTurn(hand: RockPaperScissors) {
        this.onPlayTurn.emit(hand);
    }
}
