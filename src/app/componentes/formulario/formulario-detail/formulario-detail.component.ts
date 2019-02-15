import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-detail',
  templateUrl: './formulario-detail.component.html',
  styleUrls: ['./formulario-detail.component.css']
})
export class FormularioDetailComponent implements OnInit {
  @Input() usuarios: string;
  constructor() {
    this.clickOk();
  }

  clickOk(){
    const btnOk = document.querySelector('.botonOk');
    console.log(btnOk);
  }

  ngOnInit() {

    console.log(this.usuarios);
  }

}
