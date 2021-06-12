import { Component, OnInit } from '@angular/core'


export interface RouteInfo {
  path: string;
  id: String;
  title: string;
  icon: string;
  class: string;
  hasSubMen?:Boolean;
  subMenus?: any

}

// @ts-ignore
export const ROUTES: RouteInfo[] = [
  { path: '/Agence/Accueil', id: 'Accueil', title: 'Accueil', icon: 'home', class: '', hasSubMen: true,},
  { path: '/Agence/nos-clients', id: 'Ma', title: 'nos clients', icon: 'supervisor_account', hasSubMen: false, class: ''},
  { path: '/Agence/ajouter-un-clinet', id: 'Mess', title: 'ajouter un client', icon: 'get_app', class: ''},
  { path: '/Agence/Accueil', id: 'Mes', title: 'Me Deconnecter ', icon: 'logout', class: 'active-pro' },


];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  collapse() {
    const navbar = document.getElementById('components');
    navbar.classList.toggle("show");
  }
}
