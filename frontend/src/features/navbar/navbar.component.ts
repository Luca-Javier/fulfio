import { Component } from '@angular/core';
import { NavbarDesktopComponent } from './navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [NavbarDesktopComponent, NavbarMobileComponent],
})
export class NavbarComponent {}
