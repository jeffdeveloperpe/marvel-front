import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../login/login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  public loading = false;

  public form = this.fb.group({
    fcEmail: ['', Validators.required],
    fcPassword: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {
  }

  public ngOnInit(): void {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      this.router.navigate(['/home']).then();
    } else {
      this.router.navigate(['/']).then();
    }
  }

  public login(): void {
    if (this.isFormValid()) {
      if (this.form.get('fcEmail')?.value! === 'admin' &&
          this.form.get('fcPassword')?.value! === 'admin') {
        localStorage.setItem('user', 'admin')
        localStorage.setItem('password', 'admin')
        this.router.navigate(['/']).then()
      } else {
        this.messageService.add({
          detail: 'El usuario o la contraseña son incorrectos',
          severity: 'error',
          summary: 'Credenciales inválidas'
        })
      }
    }
  }

  private isFormValid(): boolean {
    return this.form.get('fcEmail')?.value!.trim() !== ''
      && this.form.get('fcPassword')?.value!.trim() !== '';
  }
}
