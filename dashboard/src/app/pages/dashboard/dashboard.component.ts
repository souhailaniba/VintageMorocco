import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from 'src/app/dashboard.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  totalUsers = 0;
  totalItems = 0;
  totalOrders = 0;
  totalRevenue = 0;

  constructor(private service: DashboardService) {}

  ngOnInit():void{
    this.getTotalUsers()
    this.getTotalProducts()
    this.getTotalRevenue()
    // this.getTotalOrders()
  }

  getTotalUsers(){
    this.service.getTotalUsers().subscribe((res:any)=>{
      this.totalUsers= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  getTotalProducts(){
    this.service.getTotalProducts().subscribe((res:any)=>{
      this.totalItems= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  getTotalRevenue(){
    this.service.getTotalRevenue().subscribe((res:any)=>{
      this.totalRevenue= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }

  /*
  getTotalRevenue(){
    this.service.getTotalRevenue().subscribe((res:any)=>{
      this.totalRevenue= res
      console.log(res)
    }, error =>{
     alert(error)
    })
  }
  */
}
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = true; // Check if user is authenticated
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}