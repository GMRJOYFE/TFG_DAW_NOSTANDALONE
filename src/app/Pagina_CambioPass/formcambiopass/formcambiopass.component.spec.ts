import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcambiopassComponent } from './formcambiopass.component';

describe('FormcambiopassComponent', () => {
  let component: FormcambiopassComponent;
  let fixture: ComponentFixture<FormcambiopassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcambiopassComponent]
    });
    fixture = TestBed.createComponent(FormcambiopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
