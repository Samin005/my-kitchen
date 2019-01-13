import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChangedEvent.subscribe(
      (ingredientsArray: Ingredient[]) => {
        this.ingredients = ingredientsArray;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
