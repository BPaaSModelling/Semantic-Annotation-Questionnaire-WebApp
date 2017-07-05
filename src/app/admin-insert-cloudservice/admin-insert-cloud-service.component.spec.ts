import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertCloudServiceComponent } from './admin-insert-cloud-service.component';

describe('AdminInsertCloudServiceComponent', () => {
  let component: AdminInsertCloudServiceComponent;
  let fixture: ComponentFixture<AdminInsertCloudServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertCloudServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertCloudServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
