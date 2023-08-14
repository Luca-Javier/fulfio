import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceTypeComponent } from './incidence-type.component';

describe('IncidenceTypeComponent', () => {
  let component: IncidenceTypeComponent;
  let fixture: ComponentFixture<IncidenceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidenceTypeComponent]
    });
    fixture = TestBed.createComponent(IncidenceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
