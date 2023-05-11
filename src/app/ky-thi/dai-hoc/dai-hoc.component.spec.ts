import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiHocComponent } from './dai-hoc.component';

describe('DaiHocComponent', () => {
  let component: DaiHocComponent;
  let fixture: ComponentFixture<DaiHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiHocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaiHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
