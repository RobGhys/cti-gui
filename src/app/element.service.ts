import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Element } from '../element';
import { ELEMENTS } from '../mock-elements';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor() { }

  getElements(): Observable<Element[]> {
    const elements = of(ELEMENTS);
    return elements;
  }

  getElementById(id: number): Observable<Element> {
    const element = ELEMENTS.find(el => el.id === id)!;

    return of(element);
  }
}
