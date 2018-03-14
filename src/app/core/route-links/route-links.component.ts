import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'route-links',
  templateUrl: './route-links.component.html',
  styleUrls: ['./route-links.component.css']
})
export class RouteLinksComponent implements OnInit {

  routes: Array<Object>;
  constructor(private router: Router){
    // Return routes that aren't **
    this.routes = this.router.config.filter((route) => {return route.path && route.path != '**'});
    console.log(this.routes);
  }
  ngOnInit() {
  }

}
