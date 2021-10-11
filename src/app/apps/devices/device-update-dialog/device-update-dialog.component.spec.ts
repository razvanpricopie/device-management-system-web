import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceUpdateDialogComponent } from './device-update-dialog.component';

describe('DeviceUpdateDialogComponent', () => {
  let component: DeviceUpdateDialogComponent;
  let fixture: ComponentFixture<DeviceUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
