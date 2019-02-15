import { Component, OnInit } from "@angular/core";
import { JugadoresServicioService } from "src/app/jugadores-servicio.service";

@Component({
  selector: "app-jugadores",
  templateUrl: "./jugadores.component.html",
  styleUrls: ["./jugadores.component.css"],
  providers: [JugadoresServicioService]
})
export class JugadoresComponent implements OnInit {
  public jugadoresJson: string;
  constructor(private jugadores: JugadoresServicioService) {
    this.jugadores.peticionGet().subscribe(resul => {


      //this.jugadoresJson = resul.results;


    });
  }

  ngOnInit() {}


}
