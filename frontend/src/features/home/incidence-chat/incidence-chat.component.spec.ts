import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceChatComponent } from './incidence-chat.component';

describe('IncidenceChatComponent', () => {
  let component: IncidenceChatComponent;
  let fixture: ComponentFixture<IncidenceChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IncidenceChatComponent]
    });
    fixture = TestBed.createComponent(IncidenceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
