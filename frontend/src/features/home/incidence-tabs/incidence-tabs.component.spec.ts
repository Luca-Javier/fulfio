import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceTabsComponent } from './incidence-tabs.component';

describe('IncidenceTabsComponent', () => {
  let component: IncidenceTabsComponent;
  let fixture: ComponentFixture<IncidenceTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidenceTabsComponent]
    });
    fixture = TestBed.createComponent(IncidenceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
