import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtGioiThieuComponent } from './gt-gioi-thieu.component';

describe('GtGioiThieuComponent', () => {
  let component: GtGioiThieuComponent;
  let fixture: ComponentFixture<GtGioiThieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtGioiThieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtGioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
