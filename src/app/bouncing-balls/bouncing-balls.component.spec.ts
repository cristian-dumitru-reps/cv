import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingBallsComponent } from './bouncing-balls.component';

describe('BouncingBallsComponent', () => {
  let component: BouncingBallsComponent;
  let fixture: ComponentFixture<BouncingBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncingBallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
