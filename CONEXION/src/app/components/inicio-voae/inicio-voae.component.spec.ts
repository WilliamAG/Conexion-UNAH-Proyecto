import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVoaeComponent } from './inicio-voae.component';

describe('InicioVoaeComponent', () => {
  let component: InicioVoaeComponent;
  let fixture: ComponentFixture<InicioVoaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioVoaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioVoaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
