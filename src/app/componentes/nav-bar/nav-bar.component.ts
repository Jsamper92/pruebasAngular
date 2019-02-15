import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

}
