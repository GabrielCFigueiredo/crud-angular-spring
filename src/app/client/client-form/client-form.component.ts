import { ClientService } from './../services/client.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClientService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      date: [null],
      price: [null],
      category: [null],
      payment: [null],
      description: [null],
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result), error => console.log(error));
    this.router.navigate(['/clientes'])
  }

  onCancel() {
    this.router.navigate(['/clientes'])
  }

}
