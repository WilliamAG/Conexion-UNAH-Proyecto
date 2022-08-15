import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConstanciaComponent } from './editar-constancia.component';

describe('EditarConstanciaComponent', () => {
  let component: EditarConstanciaComponent;
  let fixture: ComponentFixture<EditarConstanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarConstanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConstanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
