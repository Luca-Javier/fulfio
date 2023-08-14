import { Component, OnInit } from '@angular/core';
import { IncidenceListComponent } from './incidence-list';
import { IncidenceTabsComponent } from './incidence-tabs';
import { RouterModule } from '@angular/router';
import { SessionService } from 'src/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IncidenceListComponent, IncidenceTabsComponent, RouterModule],
})
export class HomeComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService.checkSession();
  }
}
