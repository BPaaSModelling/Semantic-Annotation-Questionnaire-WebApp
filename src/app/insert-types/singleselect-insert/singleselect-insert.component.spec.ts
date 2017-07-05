import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectInsertComponent } from './singleselect-insert.component';

describe('SingleselectInsertComponent', () => {
  let component: SingleselectInsertComponent;
  let fixture: ComponentFixture<SingleselectInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleselectInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
