import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'b-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  peopleList$ = this.personService.list$;
  personAddForm = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    age: new FormControl(18, [ Validators.required ])
  });

  constructor(private personService: PersonService) { }

  addPerson() {
    if (this.personAddForm.valid) {

      const { name, age } = this.personAddForm.value;
      this.personService.addPerson(name, age);

      this.personAddForm.reset();

    }
  }

}
