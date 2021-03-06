import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Element } from './element';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const elements: Element[] = [
      {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'A'},
      {id: 2, name: 'Helium', weight: 4.0026, symbol: 'B'},
      {id: 3, name: 'Lithium', weight: 6.941, symbol: 'C'},
      {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'D'},
      {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'E'},
      {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'A'},
      {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'B'},
      {id: 10, name: 'Neon', weight: 20.1797, symbol: 'C'},
      {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'C'},
      {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'A'},
      {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'A'},
      {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'D'},
      {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'B'},
      {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'A'},
      {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'B'},
      {id: 18, name: 'Argon', weight: 39.948, symbol: 'C'},
      {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'E'},
      {id: 20, name: 'Calcium', weight: 40.078, symbol: 'C'},
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
