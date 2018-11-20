import {Ingredient} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientsChangedEvent = new EventEmitter<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChangedEvent.emit(this.getIngredients());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChangedEvent.emit(this.getIngredients());
  }
  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChangedEvent.emit(this.getIngredients());
  }
  deleteIngredient() {
    this.ingredients.pop();
    this.ingredientsChangedEvent.emit(this.getIngredients());
  }
}
