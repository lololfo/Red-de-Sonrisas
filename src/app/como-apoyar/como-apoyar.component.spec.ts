import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoApoyarComponent } from './como-apoyar.component';

describe('ComoApoyarComponent', () => {
  let component: ComoApoyarComponent;
  let fixture: ComponentFixture<ComoApoyarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoApoyarComponent]
    });
    fixture = TestBed.createComponent(ComoApoyarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
