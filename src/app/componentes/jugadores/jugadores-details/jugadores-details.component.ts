import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-jugadores-details",
  templateUrl: "./jugadores-details.component.html",
  styleUrls: ["./jugadores-details.component.css"]
})
export class JugadoresDetailsComponent implements OnInit {
  @Input() listado: string;
  @Input() items: string;
  public listadoPok = [];
  public count = 0;
  constructor() {
    this.listadoPok;
    this.listado;
    this.items;
    this.count;
    this.sumar();
  }

  sumar() {
    this.count += 1;
    console.log(this.count);
  }

  ngOnInit() {
    for (const i of this.items) {
      this.listadoPok.push(i);
    }
  }
}
