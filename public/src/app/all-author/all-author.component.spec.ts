import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuthorComponent } from './all-author.component';

describe('AllAuthorComponent', () => {
  let component: AllAuthorComponent;
  let fixture: ComponentFixture<AllAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
