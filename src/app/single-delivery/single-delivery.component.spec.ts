import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeliveryComponent } from './single-delivery.component';

describe('SingleDeliveryComponent', () => {
  let component: SingleDeliveryComponent;
  let fixture: ComponentFixture<SingleDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleDeliveryComponent]
    });
    fixture = TestBed.createComponent(SingleDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
