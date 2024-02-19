import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
// import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { LoggingService } from './recipes/logging.service';

@NgModule({
  declarations: [
    //Recipes now added in RecipesModule
    AppComponent,
    HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    //now added in ShoppingListModule
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // DropdownDirective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    //Moved to AuthModule
    // AuthComponent,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //cannot import RecipesModule here because it is lazy loaded
    // RecipesModule,
    // ShoppingListModule,
    // AuthModule,
    SharedModule,
    CoreModule,
  ],
  //added by core module
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true,
  //   },
  // ],
  providers: [LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
