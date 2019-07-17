import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProfPage } from './cad-prof.page';

describe('CadProfPage', () => {
  let component: CadProfPage;
  let fixture: ComponentFixture<CadProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
