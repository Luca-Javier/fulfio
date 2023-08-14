import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Route,
  Router,
  RouterModule,
  UrlSerializer,
} from '@angular/router';
import { NavbarLink } from 'src/constants/models';
import { navbarLinks } from 'src/constants/navbarLinks';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarDesktopComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serializer: UrlSerializer
  ) {
    this.actualRoute = '';
  }

  actualRoute: string = '';

  public navbarLinks: NavbarLink[] = navbarLinks;
}
