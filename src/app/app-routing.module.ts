import {NgModule} from '@angular/core';
import {RecipiesComponent} from './recipies/recipies.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', component: RecipiesComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
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
