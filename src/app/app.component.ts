import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jsonDate = "2018-10-15T20:21:29.4674496";
  faDateControl = new FormControl(this.getCurrentDate);
  dateControl = new FormControl(this.jsonDate);

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate() {
    return Date.now()
  }

  getCurrentDateFa(async: any) {
    console.log(async)
  }
}
