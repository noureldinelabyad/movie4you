import { Component, Input ,} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  // imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {


@Input() rating : any;
@Input() isReadOnly : boolean = false ;

}

