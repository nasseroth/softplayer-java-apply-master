import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoCadastrarComponent } from './departamento-cadastrar.component';

describe('DepartamentoCadastrarComponent', () => {
  let component: DepartamentoCadastrarComponent;
  let fixture: ComponentFixture<DepartamentoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
