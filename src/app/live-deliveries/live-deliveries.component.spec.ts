import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDeliveriesComponent } from './live-deliveries.component';

describe('LiveDeliveriesComponent', () => {
  let component: LiveDeliveriesComponent;
  let fixture: ComponentFixture<LiveDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
