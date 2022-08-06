import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularForm2Component } from './angular-form2.component';

describe('AngularForm2Component', () => {
  let component: AngularForm2Component;
  let fixture: ComponentFixture<AngularForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
