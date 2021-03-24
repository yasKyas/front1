import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormparticulierComponent } from './formparticulier.component';

describe('FormparticulierComponent', () => {
  let component: FormparticulierComponent;
  let fixture: ComponentFixture<FormparticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormparticulierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormparticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
