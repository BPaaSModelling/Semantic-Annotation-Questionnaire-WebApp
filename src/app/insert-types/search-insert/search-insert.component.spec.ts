import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInsertComponent } from './search-insert.component';

describe('SearchInsertComponent', () => {
  let component: SearchInsertComponent;
  let fixture: ComponentFixture<SearchInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
