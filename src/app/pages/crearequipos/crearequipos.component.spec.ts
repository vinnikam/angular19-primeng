import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearequiposComponent } from './crearequipos.component';

describe('CrearequiposComponent', () => {
  let component: CrearequiposComponent;
  let fixture: ComponentFixture<CrearequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearequiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
