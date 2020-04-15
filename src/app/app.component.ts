import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'b-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  title = 'sem nadpis';
  amount = 5;
  isVisible = true;
  list = [ 'polozka jedna', 'polozka dve', 'položka tři' ];
  person = {
    name: 'honza',
    age: 10
  };
  listAddControl = new FormControl('naucit se angular', [ Validators.required ]);

  onListAdd() {

    if (this.listAddControl.valid) {

      this.list = [
        ...this.list,
        this.listAddControl.value
      ];

      this.listAddControl.reset();

    } else {
      alert('tak to seš dement');
    }

  }

}
