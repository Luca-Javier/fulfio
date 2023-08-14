import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenceState } from 'src/constants/models';

@Component({
  selector: 'incidence-state',
  templateUrl: './incidence-state.component.html',
  styleUrls: ['./incidence-state.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IncidenceStateComponent {
  @Input() state: IncidenceState = 'resolved';
}
