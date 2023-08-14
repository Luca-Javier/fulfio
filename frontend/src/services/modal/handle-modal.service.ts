import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleModalService {
  defaultValue = false;
  modalObervable = new BehaviorSubject<boolean>(this.defaultValue);

  getModalAsObservable() {
    return this.modalObervable.asObservable();
  }

  close() {
    this.modalObervable.next(false);
  }

  open() {
    this.modalObervable.next(true);
  }

  constructor() {}
}
