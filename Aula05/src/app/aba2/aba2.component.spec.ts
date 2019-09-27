import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba2Component } from './aba2.component';

describe('Aba2Component', () => {
  let component: Aba2Component;
  let fixture: ComponentFixture<Aba2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
