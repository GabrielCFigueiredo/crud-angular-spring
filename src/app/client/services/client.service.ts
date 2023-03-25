import { Schedule } from './../model/schedule';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  list(): Schedule[] {
    return [
      {
        id: 1,
        name: 'Mariana',
        date: '2002/02/31',
        price: 340.0,
        category: 'maquiagem',
        payment: 'Pix',
        description: 'Maquiagem de casamento',
      },
    ]
  }
}
