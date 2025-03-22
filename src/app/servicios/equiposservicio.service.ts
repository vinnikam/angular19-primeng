import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipo} from '../model/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private equiposUrl = `${environment.rest.endpointEquipos}`;
  constructor(private httpClient: HttpClient) { }
  getList(): Observable<any> {
    return this.httpClient.get<Equipo>(`${this.equiposUrl}/equipos/list`);
  }
}
