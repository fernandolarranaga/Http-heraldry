import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasonesComponent } from './blasones.component';

describe('BlasonesComponent', () => {
  let component: BlasonesComponent;
  let fixture: ComponentFixture<BlasonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlasonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlasonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
