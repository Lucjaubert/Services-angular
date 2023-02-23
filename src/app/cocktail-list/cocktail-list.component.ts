import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/model/cocktail';
import { CocktailService } from './../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe((data: any) => {
      this.cocktails = data;
    });
  }
}     
