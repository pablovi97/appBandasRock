import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasNuevaComponent } from './bandas-nueva.component';

describe('BandasNuevaComponent', () => {
  let component: BandasNuevaComponent;
  let fixture: ComponentFixture<BandasNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
