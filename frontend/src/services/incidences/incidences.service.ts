import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incidence } from 'src/constants/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncidencesService {
  private getApi =
    'http://127.0.0.1/fulfio/backend/api/endpoints/incidences.php';

  constructor(private httpService: HttpClient) {}

  getIncidences(): Observable<Incidence[]> {
    return this.httpService.get(this.getApi) as Observable<Incidence[]>;
  }
}
