import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { HandType } from '../../../entities/game/enum/hand_type';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });


  it('should do move', async () => {
    component.ngOnInit();
    component.doMove(HandType.Paper);
    expect(component.statusOfMove).not.toBe(null);  
  });

  it('should restart', async () => {
    component.ngOnInit();
    component.restart();
    expect(component.computerMove).toBe(null);  
  });
});
