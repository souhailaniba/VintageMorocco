import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { CartsService } from 'src/app/service/carts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn :  boolean;
  public userId : any;

constructor( private Auth: AuthService , private router: Router,
  private Token: TokenService , private cart : CartsService){ 
}

ngOnInit() {
  this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  this.userId = localStorage.getItem('userId');
}
logout(event: MouseEvent) {
  event.preventDefault();
  this.Token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/Login');
  this.cart.remove();
}


}
