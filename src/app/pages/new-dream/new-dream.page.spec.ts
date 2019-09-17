import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDreamPage } from './new-dream.page';

describe('NewDreamPage', () => {
  let component: NewDreamPage;
  let fixture: ComponentFixture<NewDreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDreamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
