import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugCreationComponent } from './bug-creation.component';

describe('BugCreationComponent', () => {
  let component: BugCreationComponent;
  let fixture: ComponentFixture<BugCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BugCreationComponent]
    });
    fixture = TestBed.createComponent(BugCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
