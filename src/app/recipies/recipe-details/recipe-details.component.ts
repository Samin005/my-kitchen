import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {forEach} from '@angular/router/src/utils/collection';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    // this.selectedRecipe = new Recipe('Recipe Name', 'Recipe Description', '');
  }
  addRecipeIngredientsToShoppingList() {
    this.recipeService.addRecipeIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
