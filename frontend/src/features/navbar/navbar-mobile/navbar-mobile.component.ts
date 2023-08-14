import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarLinks, navbarLinksHover } from 'src/constants/navbarLinks';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class NavbarMobileComponent {
  navbarLinks = navbarLinks;

  getNavbarLinkHover(index: number): string {
    return navbarLinksHover[index].src;
  }
}
