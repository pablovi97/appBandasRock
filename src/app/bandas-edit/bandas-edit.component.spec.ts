import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasEditComponent } from './bandas-edit.component';

describe('BandasEditComponent', () => {
  let component: BandasEditComponent;
  let fixture: ComponentFixture<BandasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
