import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  
// had to import the Form Modules in the component its self not in the main.server.ts to make  [(ngModel)]="password" work (i dont have app.moduel.ts so put it here)



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})

export class LoginComponent implements OnInit {

username = "";
password = "";
errorMsg = "";

constructor( private router: Router) {}

ngOnInit(): void {
  
}

  login() {
    if (this.username.trim().length === 0 )
    {
      this.errorMsg = "Username is required."; // set error message to display username missing
    } 
    else if (this.password.trim().length === 0) {
      this.errorMsg = "password is required.";
    }
     else {
      this.errorMsg = ""; // clear the error message box when there are no
    }

  }

}
