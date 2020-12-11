import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  get navItems() {
    const isActive = (url) => {
      return this._router.url === url;
    };

    return [
      {
        title: 'Home',
        url: '/',
        active: isActive('/')
      },
      {
        title: 'TV Shows',
        url: '/tv-shows',
        active: isActive('tv-shows')
      },
      {
        title: 'Movies',
        url: '/movies',
        active: isActive('movies')
      }
    ];
  }

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._router.url
  }
}
