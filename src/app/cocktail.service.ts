import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor() {}

  getCocktails(): Cocktail[] {
    return [
      {
        name: 'Mojito',
        price: 8.5,
        image: ''
      },
      {
        name: 'Cosmo',
        price: 9.5,
        image: ''
      },
      {
        name: 'White Russian',
        price: 7.5,
        image: ''
      }
    ];
  }
}
