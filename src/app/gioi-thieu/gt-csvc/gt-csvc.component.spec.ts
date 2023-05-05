import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtCsvcComponent } from './gt-csvc.component';

describe('GtCsvcComponent', () => {
  let component: GtCsvcComponent;
  let fixture: ComponentFixture<GtCsvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtCsvcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtCsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
