import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipo} from '../model/equipo';
import {DirectorTecnico} from '../model/director-tecnico';

@Injectable({
  providedIn: 'root'
})
export class DirectoresService {
  private directoresUrl = `${environment.rest.endpointGeneral}`;
  constructor(private httpClient: HttpClient) { }
  getList(): Observable<any> {
    return this.httpClient.get<DirectorTecnico[]>(`${this.directoresUrl}/directorest/`);
  }
  create(director : DirectorTecnico): Observable<any> {
    return this.httpClient.post(`${this.directoresUrl}/directorest/`, director);
  }
}
