import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleModalService, SessionService } from 'src/services';
import { FormsModule } from '@angular/forms';
import { ResgisterResponse } from 'src/constants/models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isRegistering = false;

  registerResponse: ResgisterResponse = '';
  email = 'pepe@gmail.com';
  password = '1234';
  name = '';

  constructor(
    private modalService: HandleModalService,
    private loginService: SessionService
  ) {
    this.loginService.getRegisterSuccesObservable().subscribe((res) => {
      this.registerResponse = res;
    });
  }

  close() {
    this.modalService.close();
  }

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
  }

  confirm() {
    if (this.isRegistering)
      this.loginService.registerUser(this.email, this.password, this.name);
    else this.loginService.loginUser(this.email, this.password);
  }
}
