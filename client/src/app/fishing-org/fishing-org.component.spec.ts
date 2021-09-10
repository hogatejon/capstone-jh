import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingOrgComponent } from './fishing-org.component';

describe('FishingOrgComponent', () => {
  let component: FishingOrgComponent;
  let fixture: ComponentFixture<FishingOrgComponent>;

  beforeEach(async(() => {
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
