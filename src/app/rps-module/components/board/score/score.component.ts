import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'app/rps-module/shared/rps.model';

@Component({
  selector: 'rps-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

    @Input()
    human: number = 0;

    @Input()
    computer: number = 0;

}
