import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtreComponent } from './formtre.component';

describe('FormtreComponent', () => {
  let component: FormtreComponent;
  let fixture: ComponentFixture<FormtreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
