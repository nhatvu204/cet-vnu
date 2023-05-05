import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtChucNangComponent } from './gt-chuc-nang.component';

describe('GtChucNangComponent', () => {
  let component: GtChucNangComponent;
  let fixture: ComponentFixture<GtChucNangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtChucNangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
