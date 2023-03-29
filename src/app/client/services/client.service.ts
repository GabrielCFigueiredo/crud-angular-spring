import { Schedule } from './../model/schedule';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API = "api/usuarios"

  constructor(
    private httpClient: HttpClient,
    

    ) { }

  list() {
    return this.httpClient.get<Schedule[]>(this.API).pipe(first())
  }

  save(record: Schedule) {

    return this.httpClient.post<Schedule>(this.API, record).pipe(first());
  }
}
