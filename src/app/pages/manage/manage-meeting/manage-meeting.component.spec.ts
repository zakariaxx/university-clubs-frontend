import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMeetingComponent } from './manage-meeting.component';

describe('ManageMeetingComponent', () => {
  let component: ManageMeetingComponent;
  let fixture: ComponentFixture<ManageMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
