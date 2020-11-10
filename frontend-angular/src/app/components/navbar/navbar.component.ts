import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/pages/dashboard/dashboard.service';
import { User } from 'src/app/pages/dashboard/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,
              private element: ElementRef,
              private router: Router,
              private dashService: DashboardService) {
    this.location = location;
  }

  user: User = new User();
  numberId: number;
  query: string;

  ngOnInit() {
    this.loadUser();
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  loadUser() {
    this.numberId = Number.parseInt(localStorage.getItem('id'));
    this.dashService.loadUsuario(this.numberId).subscribe(
      user => {
        this.user = user;
      }
    )
  }

}
