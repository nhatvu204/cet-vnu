import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenMucComponent } from './chuyen-muc.component';

describe('ChuyenMucComponent', () => {
  let component: ChuyenMucComponent;
  let fixture: ComponentFixture<ChuyenMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuyenMucComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuyenMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
