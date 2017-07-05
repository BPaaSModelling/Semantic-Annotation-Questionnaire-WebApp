import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueInsertComponent } from './value-insert.component';

describe('ValueInsertComponent', () => {
  let component: ValueInsertComponent;
  let fixture: ComponentFixture<ValueInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
