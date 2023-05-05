import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongComponent } from './hoat-dong.component';

describe('HoatDongComponent', () => {
  let component: HoatDongComponent;
  let fixture: ComponentFixture<HoatDongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatDongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
