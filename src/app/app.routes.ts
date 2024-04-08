import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import CommonModule


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'movie/:type/:id', component: MovieComponent},
    { path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        HttpClientModule,
        CommonModule, // Add CommonModule here
        
        //AppRoutingModule,
        //FormsModule,
        //BrowserModule
     ],
    exports: [RouterModule]
})
export class AppRoutingModule {}