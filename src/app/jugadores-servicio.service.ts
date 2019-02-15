import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JugadoresServicioService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = "https://pokeapi.co/api/v2/pokemon";
  }

  peticionGet() {
    return this.http.get(this.url);
  }

  peticionPost() {
    const header = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post(this.url, { HttpHeaders: header });
  }
}
