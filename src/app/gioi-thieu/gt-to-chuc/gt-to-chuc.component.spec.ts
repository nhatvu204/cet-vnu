import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtToChucComponent } from './gt-to-chuc.component';

describe('GtToChucComponent', () => {
  let component: GtToChucComponent;
  let fixture: ComponentFixture<GtToChucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtToChucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtToChucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
