import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterngrxButtonsComponent } from './counterngrx-buttons.component';

describe('CounterngrxButtonsComponent', () => {
  let component: CounterngrxButtonsComponent;
  let fixture: ComponentFixture<CounterngrxButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterngrxButtonsComponent]
    });
    fixture = TestBed.createComponent(CounterngrxButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
