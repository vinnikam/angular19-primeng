import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoequiposComponent } from './listadoequipos.component';

describe('ListadoequiposComponent', () => {
  let component: ListadoequiposComponent;
  let fixture: ComponentFixture<ListadoequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoequiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
