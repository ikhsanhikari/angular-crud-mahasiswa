import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikariModalComponent } from './hikari-modal.component';

describe('HikariModalComponent', () => {
  let component: HikariModalComponent;
  let fixture: ComponentFixture<HikariModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikariModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikariModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
