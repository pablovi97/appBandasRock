import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasListadoComponent } from './bandas-listado.component';

describe('BandasListadoComponent', () => {
  let component: BandasListadoComponent;
  let fixture: ComponentFixture<BandasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
