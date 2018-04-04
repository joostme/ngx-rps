import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { OptionsComponent } from 'app/rps-module/components/board/options/options.component';
import { RockPaperScissors } from 'app/rps-module/shared/rps.model';


describe('OptionsComponent', () => {
    let component: OptionsComponent;
    let fixture: ComponentFixture<OptionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptionsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emits an event on playTurn', () => {
        const onPlayTurnEmitSpy = spyOn(fixture.componentInstance.onPlayTurn, 'emit');
        fixture.componentInstance.playTurn(RockPaperScissors.Paper);
        expect(onPlayTurnEmitSpy).toHaveBeenCalledWith(RockPaperScissors.Paper);
    });
});
