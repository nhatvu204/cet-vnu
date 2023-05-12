import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapHuanComponent } from './tap-huan.component';

describe('TapHuanComponent', () => {
  let component: TapHuanComponent;
  let fixture: ComponentFixture<TapHuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapHuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapHuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
