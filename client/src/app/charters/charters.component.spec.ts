import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartersComponent } from './charters.component';

describe('ChartersComponent', () => {
  let component: ChartersComponent;
  let fixture: ComponentFixture<ChartersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
