import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app/app.routes';

const bootstrap = () => bootstrapApplication(AppComponent, config);
// bootstrap();

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServerModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
   declarations:[],
   bootstrap:[],
})
export class AppModule {}
export default bootstrap;
