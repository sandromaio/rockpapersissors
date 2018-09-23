import { TestBed, async } from '@angular/core/testing';
import { OvoComponent } from './ovo.component';
import { BoardComponent } from '../game/board/board.component';
describe('OvoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OvoComponent,
        BoardComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(OvoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Rock-Paper-Scissors!'`, async(() => {
    const fixture = TestBed.createComponent(OvoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rock-Paper-Scissors');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(OvoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock-Paper-Scissors');
  }));
});
