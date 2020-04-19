import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Person {
  id?: string;
  name: string;
  age: number;
  tasks: string[];
}

@Injectable({ providedIn: 'root' })
export class PersonService {

  list$ = new BehaviorSubject<Person[]>([]);

  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getDetail$(id: string) {
    return this.list$.pipe(map((d) => d.find((item) => item.id === id)));
  }

  loadList() {
    this.httpClient
      .get<Person[]>(`${this.url}/person`)
      .subscribe((data) => this.list$.next(data));
  }

  addPerson(name: string, age: number) {
    this.httpClient.post<Person>(
      `${this.url}/person`,
      {
        name,
        age,
        tasks: []
      }
    ).subscribe(() => this.loadList());
  }

}
