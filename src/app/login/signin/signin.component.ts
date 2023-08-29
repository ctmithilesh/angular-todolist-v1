import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/Services/login-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string = " "
  password: string = " "
  showSubmitButton: boolean = true
  showProcessingButton: boolean = false
  constructor(private register: LoginUserService, private router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onFormSubmit() {
    console.log(this.email, this.password)
    this.showSubmitButton = false
    this.showProcessingButton = true
    setTimeout(() => {
      this.showProcessingButton = false
      this.showSubmitButton = true
    }, 3000)


    try {
      this.register.submitData(this.email, this.password).subscribe(data => {
        console.log(data)
        if (data.status === 200) {
          this.router.navigate(['/todo-dashboard'])
        }
      })
    }
    catch (e) {

      console.error(e)
      alert(e)
    }

  }

}
