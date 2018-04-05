import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RpsModule } from 'app/rps-module/rps.module';
import { GameState, Result, RockPaperScissors, resultDescriptions } from 'app/rps-module/shared/rps.model';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RpsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        component.result = Result.Won;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('returns the result string', () => {
        component.result = Result.Won;
        fixture.detectChanges();
        const expectedValue = resultDescriptions[Result.Won];

        expect(component.getResultText()).toBe(expectedValue);
    });

    it('returns play a game if gamestate is not defined', () => {
        component.result = undefined;
        fixture.detectChanges();

        expect(component.getResultText()).toBe('Play a game!');
    });
});
