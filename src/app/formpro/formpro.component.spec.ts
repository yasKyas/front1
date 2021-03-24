import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormproComponent } from './formpro.component';

describe('FormproComponent', () => {
  let component: FormproComponent;
  let fixture: ComponentFixture<FormproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
