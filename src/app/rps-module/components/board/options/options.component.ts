import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RockPaperScissors } from '../../../shared/rps.model';

@Component({
    selector: 'rps-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

    @Input()
    selectedOption: RockPaperScissors;

    @Output()
    onPlayTurn: EventEmitter<RockPaperScissors> = new EventEmitter();

    rockPaperScissors = RockPaperScissors;

    playTurn(hand: RockPaperScissors) {
        this.onPlayTurn.emit(hand);
    }

    isSelectedOption(option: RockPaperScissors): boolean {
        return this.selectedOption === option;
    }
}
