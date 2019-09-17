import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamDetailPage } from './dream-detail.page';

describe('DreamDetailPage', () => {
  let component: DreamDetailPage;
  let fixture: ComponentFixture<DreamDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
