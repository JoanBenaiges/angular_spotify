import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})

export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {

    this.formLogin = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6)

      ]),

    })

  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value

    this.authService.sendCredentials(email, password)
  }

}
