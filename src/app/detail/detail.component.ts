import { Component } from '@angular/core';
import { PersonService, Person } from '../person.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'b-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  person$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id) => this.personService.getDetail$(id))
  );

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) { }

}
