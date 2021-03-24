import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormentrepriseComponent } from './formentreprise.component';

describe('FormentrepriseComponent', () => {
  let component: FormentrepriseComponent;
  let fixture: ComponentFixture<FormentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormentrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
