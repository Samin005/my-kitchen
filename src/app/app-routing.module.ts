import {NgModule} from '@angular/core';
import {RecipiesComponent} from './recipies/recipies.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PleaseSelectRecipeComponent} from './recipies/please-select-recipe/please-select-recipe.component';
import {RecipeDetailsComponent} from './recipies/recipe-details/recipe-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RecipeEditComponent} from './recipies/recipe-edit/recipe-edit.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', component: RecipiesComponent, children: [
      {path: '', component: PleaseSelectRecipeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
  // {path: 'page-not-found', component: PageNotFoundComponent},
  // {path: '**', redirectTo: 'page-not-found'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
