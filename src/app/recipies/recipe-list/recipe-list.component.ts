import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2000px-Recipe-575434.svg.png'),
    new Recipe('Yummy Sandwich', 'This is a yummy sandwich!', 'assets/images/sandwich.png')
  ];
  @Output()selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
    console.log(recipe.name);
  }
}
