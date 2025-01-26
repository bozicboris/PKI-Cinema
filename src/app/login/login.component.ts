import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = ''
  public password: string = ''
  public userService: UserService

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
  }

  public updateEmail(e: any) {
    this.email = e.target.value
    console.log(this.email)
  }
  public updatePassword(e: any) {
    this.password = e.target.value
    console.log(this.password)
  }

  public doLogin() {
    if (this.email == '' || this.password == '') {
      alert('Username or password is empty')
      return 
    }

    try {
      this.userService.login(this.email, this.password)
      this.router.navigate(['/profile'], { relativeTo: this.route })
    } catch (e) {
      alert(e)
    }
  }

  public onRegisterClick() {
    console.log('Register button clicked');
    this.router.navigate(['/register']);
  }
}
