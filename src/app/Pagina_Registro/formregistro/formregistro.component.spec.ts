import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregistroComponent } from './formregistro.component';

describe('FormregistroComponent', () => {
  let component: FormregistroComponent;
  let fixture: ComponentFixture<FormregistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormregistroComponent]
    });
    fixture = TestBed.createComponent(FormregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
