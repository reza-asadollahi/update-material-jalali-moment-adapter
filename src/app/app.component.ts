import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jsonDate = "2018-10-15T20:21:29.4674496";
  faDateControl = new UntypedFormControl(this.getCurrentDate);
  dateControl = new UntypedFormControl(this.jsonDate);

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
