import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from 'src/components';
import { LoginComponent } from './login/login.component';
import { HandleModalService, SessionService } from 'src/services';
import { Observable } from 'rxjs';
import { ResponseSession, Session } from 'src/constants/models';
import { UserLoggedInfoComponent } from './user-logged-info/user-logged-info.component';

@Component({
  selector: 'app-incidence-tabs',
  templateUrl: './incidence-tabs.component.html',
  styleUrls: ['./incidence-tabs.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    ModalComponent,
    CommonModule,
    LoginComponent,
    UserLoggedInfoComponent,
  ],
})
export class IncidenceTabsComponent {
  sessionData!: Session;
  image: string = 'assets/anonim-user.svg';
  isLogged: boolean = false;

  constructor(
    private modalService: HandleModalService,
    private sessionService: SessionService
  ) {
    this.sessionService.getSessionObservable().subscribe((value) => {
      this.sessionData = value;

      if (value.image) {
        this.image = value.image;
        return;
      }

      this.image = value.isAdmin
        ? 'assets/admin-user.jpg'
        : 'assets/anonim-user.svg';
    });

    this.sessionService.getIsLoggedObservable().subscribe((value) => {
      this.isLogged = value;
    });
  }

  openUserInfo() {
    this.modalService.open();
  }

  closeUserInfo() {
    this.modalService.close();
  }
}
