import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public email: string = ''
  public name: string = ''
  public password: string = ''
  public confirmPassword: string = ''
  private userService: UserService = UserService.getInstance()

  public constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
  }

  public updateEmail(e: any) {
    this.email = e.target.value
  }
  public updateName(e: any) {
    this.name = e.target.value
  }
  public updatePassword(e: any) {
    this.password = e.target.value
  }
  public updateConfirmPassword(e: any) {
    this.confirmPassword = e.target.value
  }

  public doSignup() {
    if (this.email == '') return
    if (this.name == '') return
    if (this.password == '') return
    if (this.confirmPassword == '') return
    if (this.password != this.confirmPassword) {
      alert('passwords do not match')
    }

    try{
      this.userService.createUser({
        email: this.email,
        name: this.name,
        password: this.password
      })
    }catch(e){
      alert(e)
      return
    }

    this.router.navigate(['/login'],
      {
        relativeTo: this.route,
      })
  }
}
