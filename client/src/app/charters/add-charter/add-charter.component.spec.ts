import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCharterComponent } from './add-charter.component';

describe('AddCharterComponent', () => {
  let component: AddCharterComponent;
  let fixture: ComponentFixture<AddCharterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
