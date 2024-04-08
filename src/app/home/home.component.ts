import { Component, NgModule , OnInit} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';  // to us ngfor in the html and bind tha data from the jsin file
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, HttpClientModule, CommonModule, NgbModule  , NgbRatingModule, FeatureModule]
})


// fetching the data from json file using http cleint like were doing it fron api that fetch it from database 
export class HomeComponent {
    trendingMovies: any;
    theatreMovies: any;
    popularMovies: any;
    

   // constructor (private http: HttpClient, private router: Router) { }
    constructor (private http: HttpClient ) { }

    ngOnInit():  void {
        this.getTrendingMovies();
        this.getTheatreMovies();
        this.getPopularMovies();
    }

     getTrendingMovies() {
        this.http.get('http://localhost:4200/assets/data/trending-movies.json')
        .subscribe((movies => {
            this.trendingMovies = movies;
            console.log(this.trendingMovies);
        }));
    }

    getTheatreMovies() {
        this.http
          .get('http://localhost:4200/assets/data/theatre-movies.json')
          .subscribe((movies) => {
            this.theatreMovies = movies;
          });
      }
    
      getPopularMovies() {
        this.http
          .get('http://localhost:4200/assets/data/popular-movies.json')
          .subscribe((movies) => {
            this.popularMovies = movies;
          });
      }
    
      goToMovie(type: string, id: string) {
        //this.router.navigate(['movie', type, id]);
      }
    

}
