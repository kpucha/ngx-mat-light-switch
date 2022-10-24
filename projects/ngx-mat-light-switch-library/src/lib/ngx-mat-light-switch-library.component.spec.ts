import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatLightSwitchLibraryComponent } from './ngx-mat-light-switch-library.component';

describe('NgxMatLightSwitchLibraryComponent', () => {
  let component: NgxMatLightSwitchLibraryComponent;
  let fixture: ComponentFixture<NgxMatLightSwitchLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatLightSwitchLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatLightSwitchLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
