import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HeroesSearchComponent } from './search.component';
import { searchRoute } from './search.routes';

/**
 * Module for the search web page
 *
 * @export
 * @class SearchModule
 */
@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([searchRoute])
  ],
  declarations: [
    HeroesSearchComponent
  ]
})
export class SearchModule {}
