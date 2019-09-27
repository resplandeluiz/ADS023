import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba3Component } from './aba3.component';

describe('Aba3Component', () => {
  let component: Aba3Component;
  let fixture: ComponentFixture<Aba3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aba3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aba3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
