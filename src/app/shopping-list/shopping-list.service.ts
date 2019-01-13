import {Ingredient} from '../shared/ingredients.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChangedEvent = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChangedEvent.next(this.getIngredients());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChangedEvent.next(this.getIngredients());
  }
  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChangedEvent.next(this.getIngredients());
  }
  deleteIngredient() {
    this.ingredients.pop();
    this.ingredientsChangedEvent.next(this.getIngredients());
  }
}
