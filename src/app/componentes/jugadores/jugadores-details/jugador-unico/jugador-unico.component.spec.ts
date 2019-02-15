import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorUnicoComponent } from './jugador-unico.component';

describe('JugadorUnicoComponent', () => {
  let component: JugadorUnicoComponent;
  let fixture: ComponentFixture<JugadorUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
