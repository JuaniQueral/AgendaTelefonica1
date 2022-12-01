import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeLlamadasComponent } from './lista-de-llamadas.component';

describe('ListaDeLlamadasComponent', () => {
  let component: ListaDeLlamadasComponent;
  let fixture: ComponentFixture<ListaDeLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
