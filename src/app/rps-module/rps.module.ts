import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RpsService } from 'app/rps-module/shared/rps.service';
import { BoardComponent } from './components/board/board.component';
import { ComputerChoiceComponent } from './components/board/computer-choice/computer-choice.component';
import { OptionsComponent } from './components/board/options/options.component';
import { ResultComponent } from './components/board/result/result.component';
import { ScoreComponent } from './components/board/score/score.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        RpsService
    ],
    declarations: [
        BoardComponent,
        OptionsComponent,
        ResultComponent,
        ScoreComponent,
        ComputerChoiceComponent
    ],
    exports: [
        BoardComponent
    ]
})
export class RpsModule {
}
