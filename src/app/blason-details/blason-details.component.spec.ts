import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasonDetailsComponent } from './blason-details.component';

describe('BlasonDetailsComponent', () => {
  let component: BlasonDetailsComponent;
  let fixture: ComponentFixture<BlasonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlasonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlasonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
