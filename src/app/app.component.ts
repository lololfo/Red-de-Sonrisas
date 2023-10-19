import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedSonrisas';

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['/como-apoyar'])
  }
}
