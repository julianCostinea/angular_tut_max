import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../recipes/logging.service';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      //empty string because it is lazy loaded
      { path: '', component: ShoppingListComponent },
    ]),
  ],
  //providing service in lazy loaded module gives a single instance of the service, 
  //unrelated to the instance in the app module
  providers: [LoggingService],
})
export class ShoppingListModule {}
