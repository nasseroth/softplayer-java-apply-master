import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAdministrarComponent } from './usuario-administrar.component';

describe('UsuarioAdministrarComponent', () => {
  let component: UsuarioAdministrarComponent;
  let fixture: ComponentFixture<UsuarioAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
