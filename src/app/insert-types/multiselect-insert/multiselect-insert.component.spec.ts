import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectInsertComponent } from './multiselect-insert.component';

describe('MultiselectInsertComponent', () => {
  let component: MultiselectInsertComponent;
  let fixture: ComponentFixture<MultiselectInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
