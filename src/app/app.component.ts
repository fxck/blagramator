import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'b-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor(private personService: PersonService) {
    this.personService.loadList();
  }
}
