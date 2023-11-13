import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugOverviewComponent } from './bug-overview.component';

describe('BugOverviewComponent', () => {
  let component: BugOverviewComponent;
  let fixture: ComponentFixture<BugOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BugOverviewComponent]
    });
    fixture = TestBed.createComponent(BugOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
