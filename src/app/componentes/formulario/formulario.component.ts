import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  public formArray: Array<any> = [{}]
  profileForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() {

  }

  addUser(){
    this.formArray.push(this.profileForm.value);
    console.log(this.formArray)
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }

  ngOnInit() {
    console.log(this.formArray)

  }
}
