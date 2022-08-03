import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBookComponent } from './common-book.component';

describe('CommonBookComponent', () => {
  let component: CommonBookComponent;
  let fixture: ComponentFixture<CommonBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
