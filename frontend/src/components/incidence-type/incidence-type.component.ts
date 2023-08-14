import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IncidenceType } from 'src/constants/models';

@Component({
  selector: 'incidence-type',
  templateUrl: './incidence-type.component.html',
  styleUrls: ['./incidence-type.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IncidenceTypeComponent {
  @Input() type: IncidenceType = 'integracion';
}
