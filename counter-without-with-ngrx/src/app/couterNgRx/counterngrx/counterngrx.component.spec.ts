import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterngrxComponent } from './counterngrx.component';

describe('CounterngrxComponent', () => {
  let component: CounterngrxComponent;
  let fixture: ComponentFixture<CounterngrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterngrxComponent]
    });
    fixture = TestBed.createComponent(CounterngrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
