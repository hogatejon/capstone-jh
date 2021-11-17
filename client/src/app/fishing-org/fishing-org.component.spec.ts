import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FishingOrgComponent } from './fishing-org.component';

describe('FishingOrgComponent', () => {
  let component: FishingOrgComponent;
  let fixture: ComponentFixture<FishingOrgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
