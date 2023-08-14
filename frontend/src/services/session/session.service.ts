import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  ResgisterResponse,
  ResponseSession,
  Session,
} from 'src/constants/models';
import { getFormData } from 'src/utils/helpers';
import { HandleModalService } from '../modal';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  defaultValue: Session = {
    id: 2,
    name: 'unRegistered',
    isAdmin: false,
  };

  isLogged = new BehaviorSubject<boolean>(false);

  getIsLoggedObservable() {
    return this.isLogged.asObservable();
  }

  constructor(
    private httpService: HttpClient,
    private modalService: HandleModalService
  ) {}

  private session: BehaviorSubject<Session> = new BehaviorSubject(
    this.defaultValue
  );

  getSessionObservable() {
    return this.session.asObservable();
  }

  registerSucces = new BehaviorSubject<ResgisterResponse>('');

  getRegisterSuccesObservable() {
    return this.registerSucces.asObservable();
  }

  private responseRegister = (response: ResgisterResponse) => {
    this.registerSucces.next(response);
    setTimeout(() => this.registerSucces.next(''), 3000);
  };

  registerUser(email: string, password: string, name: string) {
    const api = 'http://127.0.0.1/fulfio/backend/api/endpoints/login.php';

    const data = getFormData({ name, email, password });

    this.httpService.post<{ ok: number }>(api, data).subscribe(
      (data) => {
        if (!('ok' in data)) this.responseRegister('error');
        else if (data.ok === 200) this.responseRegister('succes');
        else if (data.ok === 400) this.responseRegister('error');
      },
      (error) => {
        console.warn(error);
        this.responseRegister('error');
      }
    );
  }

  loginUser(email: string, password: string) {
    const api =
      'http://127.0.0.1/fulfio/backend/api/endpoints/login.php?email=' +
      email +
      '&password=' +
      password;

    this.httpService.get<ResponseSession>(api).subscribe(
      (data) => {
        if (data.ok === 200) {
          this.modalService.close();
          this.session.next(data);
          this.isLogged.next(true);
          console.log(data);

          return;
        }

        if (!('ok' in data)) this.responseRegister('error');
        else if (data.ok === 400) this.responseRegister('error');
      },
      (error) => {
        console.log(error);
        if (!('ok' in error)) this.responseRegister('error');
        else if (error.ok === 400) this.responseRegister('error');
      }
    );
  }

  checkSession() {
    const api = 'http://127.0.0.1/fulfio/backend/api/endpoints/login.php';

    this.httpService.get<ResponseSession>(api).subscribe((data) => {
      if (data.ok === 200) this.session.next(data);
      console.log(data);
    });
  }

  /*  getSessionData() {
    let dataToReturn: Session = this.defaultValue;
    this.getSessionObservable()
      .subscribe((data) => {
        dataToReturn = data;
      })
      .unsubscribe();

    return dataToReturn;
  } */
}
