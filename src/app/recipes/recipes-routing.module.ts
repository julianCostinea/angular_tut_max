import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    // path: 'recipes',
    //changed to empty string to make it lazy loaded
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      //new route has to be before :id route
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
