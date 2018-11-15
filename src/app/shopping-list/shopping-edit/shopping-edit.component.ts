import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  @Output() clearIngredientsEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.valueAsNumber;
    this.ingredientAddedEvent.emit(new Ingredient(ingredientName, ingredientAmount));
  }
  onClearIngredients() {
    this.clearIngredientsEvent.emit();
  }
}
