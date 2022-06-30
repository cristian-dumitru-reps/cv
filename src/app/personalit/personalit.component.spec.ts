import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitComponent } from './personalit.component';

describe('PersonalitComponent', () => {
  let component: PersonalitComponent;
  let fixture: ComponentFixture<PersonalitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
