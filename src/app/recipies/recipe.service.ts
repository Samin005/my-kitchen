import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2000px-Recipe-575434.svg.png'),
    new Recipe('Yummy Sandwich', 'This is a yummy sandwich!', 'assets/images/sandwich.png')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
