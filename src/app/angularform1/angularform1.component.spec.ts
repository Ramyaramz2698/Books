import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularform1Component } from './angularform1.component';

describe('Angularform1Component', () => {
  let component: Angularform1Component;
  let fixture: ComponentFixture<Angularform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angularform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
