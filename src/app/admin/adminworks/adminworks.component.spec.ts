import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminworksComponent } from './adminworks.component';

describe('AdminworksComponent', () => {
  let component: AdminworksComponent;
  let fixture: ComponentFixture<AdminworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
