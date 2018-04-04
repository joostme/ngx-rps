import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RpsModule } from 'app/rps-module/rps.module';
import { RockPaperScissors } from 'app/rps-module/shared/rps.model';
import { RpsService } from 'app/rps-module/shared/rps.service';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
    let component: BoardComponent;
    let fixture: ComponentFixture<BoardComponent>;
    let rpsService: RpsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RpsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        rpsService = TestBed.get(RpsService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('calls the service on playTurn', () => {
        const rpsServicePlayTurnSpy = spyOn(rpsService, 'playTurn');

        fixture.componentInstance.playTurn(RockPaperScissors.Paper);
        expect(rpsServicePlayTurnSpy).toHaveBeenCalledWith(RockPaperScissors.Paper);
    });
});
