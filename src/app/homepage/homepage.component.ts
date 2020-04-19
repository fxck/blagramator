import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'b-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  peopleList$ = this.personService.list$;

  constructor(private personService: PersonService) {
    this.personService.loadList();
  }

}
