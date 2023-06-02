import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedCardComponent } from './rounded-card.component';

describe('RoundedCardComponent', () => {
  let component: RoundedCardComponent;
  let fixture: ComponentFixture<RoundedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedCardComponent]
    });
    fixture = TestBed.createComponent(RoundedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
