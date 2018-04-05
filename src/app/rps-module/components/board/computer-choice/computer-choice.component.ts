import { Component, Input, OnInit } from '@angular/core';
import { RockPaperScissors } from 'app/rps-module/shared/rps.model';

@Component({
    selector: 'rps-computer-choice',
    templateUrl: './computer-choice.component.html',
    styleUrls: ['./computer-choice.component.scss']
})
export class ComputerChoiceComponent {

    @Input()
    hand: RockPaperScissors;

    rockPaperScissors = RockPaperScissors;

    private isOption(option: RockPaperScissors): boolean {
        return this.hand === option;
    }

}
