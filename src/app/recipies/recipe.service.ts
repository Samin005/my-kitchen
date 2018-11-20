import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is just a test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2000px-Recipe-575434.svg.png',
      [
        new Ingredient('test-1', 2),
        new Ingredient('test-2', 5)
      ]),
    new Recipe('Yummy Sandwich',
      'This is a yummy sandwich!',
      'assets/images/sandwich.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addRecipeIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
