import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCarousellComponent } from './skills-carousell.component';

describe('SkillsCarousellComponent', () => {
  let component: SkillsCarousellComponent;
  let fixture: ComponentFixture<SkillsCarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCarousellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
