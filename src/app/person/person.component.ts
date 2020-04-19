import { Component, Input } from '@angular/core';

@Component({
  selector: 'b-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input()
  fullName: string;

  @Input()
  age: number;

  @Input()
  listItems: string[];

}
