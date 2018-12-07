import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @Input()selectedRecipe: Recipe;
  selectedRecipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }
  addRecipeIngredientsToShoppingList() {
    this.recipeService.addRecipeIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
  loadEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }
}
