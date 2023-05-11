import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauDaiHocComponent } from './sau-dai-hoc.component';

describe('SauDaiHocComponent', () => {
  let component: SauDaiHocComponent;
  let fixture: ComponentFixture<SauDaiHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauDaiHocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SauDaiHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
