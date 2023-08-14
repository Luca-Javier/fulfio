import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../session';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  id!: number;

  constructor(private httpService: HttpClient, sessionService: SessionService) {
    sessionService.getSessionObservable().subscribe((data) => {
      this.id = data.id;
    });
  }

  updateUserImage(image: File, ext: string) {
    const api = 'http://127.0.0.1/fulfio/backend/api/endpoints/user.php';

    const data = new FormData();

    data.append('image', image);
    data.append('id', this.id.toString());

    this.httpService.post(api, data).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
