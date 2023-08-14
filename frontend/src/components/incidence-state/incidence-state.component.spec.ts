import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceStateComponent } from './incidence-state.component';

describe('IncidenceStateComponent', () => {
  let component: IncidenceStateComponent;
  let fixture: ComponentFixture<IncidenceStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IncidenceStateComponent]
    });
    fixture = TestBed.createComponent(IncidenceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
