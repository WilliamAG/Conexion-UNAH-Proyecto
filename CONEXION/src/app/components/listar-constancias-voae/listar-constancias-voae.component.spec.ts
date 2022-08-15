import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConstanciasVoaeComponent } from './listar-constancias-voae.component';

describe('ListarConstanciasVoaeComponent', () => {
  let component: ListarConstanciasVoaeComponent;
  let fixture: ComponentFixture<ListarConstanciasVoaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConstanciasVoaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarConstanciasVoaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
