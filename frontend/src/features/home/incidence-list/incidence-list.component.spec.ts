import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceListComponent } from './incidence-list.component';

describe('IncidenceListComponent', () => {
  let component: IncidenceListComponent;
  let fixture: ComponentFixture<IncidenceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidenceListComponent]
    });
    fixture = TestBed.createComponent(IncidenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
