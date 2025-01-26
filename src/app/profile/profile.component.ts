import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../Services/user.service';
import { User } from '../../Services/user';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private userService: UserService
  public active: User | null = null

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
  }
  ngOnInit(): void {
    try {
      this.active = this.userService.getCurrentUser()
    } catch (e) {
      this.router.navigate(['/login'],
        {
          relativeTo: this.route,
        })
    }
  }
  public getAvatarUrl() {
    return 'https://ui-avatars.com/api/?name=' + this.active?.name
  }

  public doLogout() {
    this.userService.logout()
    this.router.navigate(['/login'],
      {
        relativeTo: this.route,
      })
  }

  public doChangePassword() {
    //@ts-ignore
    Swal.fire({
      title: "Enter your new password",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Change password",
      showLoaderOnConfirm: true,
      preConfirm: async (newPassword: string) => {
        try {
          this.userService.changePassword(newPassword)
        } catch (error) {
          //@ts-ignore
          Swal.fire({
            title: "Failure",
            text: "Your password has not been updated",
            icon: "error"
          });
        }
      },
      //@ts-ignore
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.isConfirmed) {
        //@ts-ignore
        Swal.fire({
          title: "Success",
          text: "Your password has been updated",
          icon: "success"
        });
      }
    });

  }
}
