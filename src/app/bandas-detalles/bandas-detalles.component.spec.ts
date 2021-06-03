import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasDetallesComponent } from './bandas-detalles.component';

describe('BandasDetallesComponent', () => {
  let component: BandasDetallesComponent;
  let fixture: ComponentFixture<BandasDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
