import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeContactosComponent } from './lista-de-contactos.component';

describe('ListaDeContactosComponent', () => {
  let component: ListaDeContactosComponent;
  let fixture: ComponentFixture<ListaDeContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
