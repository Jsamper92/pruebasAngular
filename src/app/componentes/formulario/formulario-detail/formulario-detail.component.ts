import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-detail',
  templateUrl: './formulario-detail.component.html',
  styleUrls: ['./formulario-detail.component.css']
})
export class FormularioDetailComponent implements OnInit {
  @Input() usuarios: string;
  constructor() { }

  ngOnInit() {
    console.log(this.usuarios);
    console.log(!this.usuarios =='');
  }

}
