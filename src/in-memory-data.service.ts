import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Element } from './element';

const imageFolder = "assets/images/";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const elements: Element[] = [
      {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    return {elements};
  }

  // Overrides the genId method to ensure that an article always has an id.
  // If the articles array is empty,
  // the method below returns the initial number (11).
  // if the articles array is not empty, the method below returns the highest
  // element id + 1.
  genIdElement(elements: Element[]): number {
    return elements.length > 0 ? Math.max(...elements.map(element => element.id)) + 1 : 11;
  }
}
