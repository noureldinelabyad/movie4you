import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [ StarRatingComponent],
  imports: [
    CommonModule, 
    NgbRatingModule
  ],
  exports: [
    StarRatingComponent,
    NgbModule,
    CommonModule
  ]
})
export class FeatureModule { }
