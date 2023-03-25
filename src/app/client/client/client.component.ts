import { ClientService } from './../services/client.service';
import { Schedule } from './../model/schedule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  schedule: Schedule[] = [];



  displayedColumns = [
    'name',
    'date',
    'price',
    'category',
    'payment',
    'description',
  ];
  clickedRows: any;

  constructor(private clientService: ClientService) {

    this.schedule = this.clientService.list();
  }

  ngOnInit(): void {

  }

}
