import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationResultComponent } from './notification-result.component';

describe('NotificationResultComponent', () => {
  let component: NotificationResultComponent;
  let fixture: ComponentFixture<NotificationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
