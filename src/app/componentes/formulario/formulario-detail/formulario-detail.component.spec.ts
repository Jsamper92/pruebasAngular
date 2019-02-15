import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetailComponent } from './formulario-detail.component';

describe('FormularioDetailComponent', () => {
  let component: FormularioDetailComponent;
  let fixture: ComponentFixture<FormularioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
