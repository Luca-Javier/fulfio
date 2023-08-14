import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/constants/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private getApi = 'http://127.0.0.1/fulfio/backend/api/endpoints/chat.php?id=';

  constructor(private httpService: HttpClient) {}

  getMessages(id: number): Observable<Message[]> {
    return this.httpService.get(this.getApi + id) as Observable<Message[]>;
  }
}
