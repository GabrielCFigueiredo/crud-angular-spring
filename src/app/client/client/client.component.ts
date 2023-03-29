import { ClientService } from './../services/client.service';
import { Schedule } from './../model/schedule';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  schedule: Observable<Schedule[]>



  displayedColumns = [
    'nome',
    'date',
    'price',
    'category',
    'payment',
    'description',
    'actions'
  ];
  clickedRows: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.schedule = this.clientService.list();
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})

  }

}
