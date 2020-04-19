import { Component } from '@angular/core';
import { PersonService, Person } from '../person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'b-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.person = this.personService.getPerson(params.id);
    });
  }
}
