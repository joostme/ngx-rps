import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RpsModule } from 'app/rps-module/rps.module';
import { GameState, Result, RockPaperScissors, resultDescriptions } from 'app/rps-module/shared/rps.model';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;

    const gameState: GameState = {
        human: RockPaperScissors.Rock,
        computer: RockPaperScissors.Paper,
        result: Result.Lost
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RpsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        fixture.componentInstance.gameState = gameState;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('returns the result string', () => {
        fixture.componentInstance.gameState = gameState;
        fixture.detectChanges();
        const expectedValue = resultDescriptions[gameState.result];

        expect(fixture.componentInstance.result).toBe(expectedValue);
    });

    it('returns play a game if gamestate is not defined', () => {
        fixture.componentInstance.gameState = undefined;
        fixture.detectChanges();

        expect(fixture.componentInstance.result).toBe('Play a game!');

    });
});
