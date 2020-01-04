import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibComponent } from './fib.component';

describe('FibComponent', () => {
  let component: FibComponent;
  let fixture: ComponentFixture<FibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
