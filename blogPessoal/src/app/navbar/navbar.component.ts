import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  constructor(
    private router: Router,
    public auth: AuthService,
    
  ) { }

  ngOnInit() {
  }
  sair(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }
  entrar(){
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/feed'])      
    })

  }
}
