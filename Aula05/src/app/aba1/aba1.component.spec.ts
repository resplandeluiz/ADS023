import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba1Component } from './aba1.component';

describe('Aba1Component', () => {
  let component: Aba1Component;
  let fixture: ComponentFixture<Aba1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba1Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
