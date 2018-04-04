import { TestBed } from '@angular/core/testing';
import { RpsModule } from 'app/rps-module/rps.module';
import { RpsService } from 'app/rps-module/shared/rps.service';
import { RockPaperScissors } from './rps.model';

describe('RpsService', () => {
    let rpsService: RpsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RpsModule
            ]
        });
        rpsService = TestBed.get(RpsService);
    });

    describe('playTurn', () => {
        it('emits a new gamestate', () => {
            const hand = RockPaperScissors.Paper;

            rpsService.getGameState()
                .subscribe(gameState => {
                    expect(gameState.human).toBe(hand);
                });

            rpsService.playTurn(hand);
        });
    });
});
