import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCounterngrxInputComponent } from './custom-counterngrx-input.component';

describe('CustomCounterngrxInputComponent', () => {
  let component: CustomCounterngrxInputComponent;
  let fixture: ComponentFixture<CustomCounterngrxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCounterngrxInputComponent]
    });
    fixture = TestBed.createComponent(CustomCounterngrxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
