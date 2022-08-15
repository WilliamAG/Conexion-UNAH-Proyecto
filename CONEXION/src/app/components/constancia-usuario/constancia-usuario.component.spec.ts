import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstanciaUsuarioComponent } from './constancia-usuario.component';

describe('ConstanciaUsuarioComponent', () => {
  let component: ConstanciaUsuarioComponent;
  let fixture: ComponentFixture<ConstanciaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstanciaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstanciaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
