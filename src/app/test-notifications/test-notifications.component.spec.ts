import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNotificationsComponent } from './test-notifications.component';

describe('TestNotificationsComponent', () => {
  let component: TestNotificationsComponent;
  let fixture: ComponentFixture<TestNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
