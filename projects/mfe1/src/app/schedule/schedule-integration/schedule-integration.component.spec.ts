import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIntegrationComponent } from './schedule-integration.component';

describe('ScheduleIntegrationComponent', () => {
  let component: ScheduleIntegrationComponent;
  let fixture: ComponentFixture<ScheduleIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
