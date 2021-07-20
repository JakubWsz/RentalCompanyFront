import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBranchComponent } from './config-branch.component';

describe('ConfigBranchComponent', () => {
  let component: ConfigBranchComponent;
  let fixture: ComponentFixture<ConfigBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
