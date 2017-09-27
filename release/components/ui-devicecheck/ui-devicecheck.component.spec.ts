import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDevicecheck } from './ui-devicecheck.component';

describe('UiDevicecheck', () => {
  let component: UiDevicecheck;
  let fixture: ComponentFixture<UiDevicecheck>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDevicecheck ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDevicecheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
