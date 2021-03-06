import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/pessoa', title: 'Pessoa',  icon: 'ni-circle-08 text-blue', class: '' },
    { path: '/chat', title: 'Chat Interno',  icon: 'ni-circle-08 text-blue', class: '' },
    { path: '/nova-mensagem', title: 'Nova Mensagem',  icon: 'ni-circle-08 text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
