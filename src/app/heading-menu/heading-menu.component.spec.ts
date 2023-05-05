import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingMenuComponent } from './heading-menu.component';

describe('HeadingMenuComponent', () => {
  let component: HeadingMenuComponent;
  let fixture: ComponentFixture<HeadingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
