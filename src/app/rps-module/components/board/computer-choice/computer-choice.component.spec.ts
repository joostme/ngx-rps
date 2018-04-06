import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RockPaperScissors } from '../../../shared/rps.model';
import { ComputerChoiceComponent } from './computer-choice.component';

describe('ComputerChoiceComponent', () => {
    let component: ComputerChoiceComponent;
    let fixture: ComponentFixture<ComputerChoiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComputerChoiceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComputerChoiceComponent);
        component = fixture.componentInstance;
        component.hand = RockPaperScissors.Rock;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('renders only one icon at a time', () => {
        const el: HTMLElement = fixture.nativeElement;
        expect(el.querySelectorAll('i').length).toBe(1);
    });
});
