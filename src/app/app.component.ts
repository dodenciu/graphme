import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-sidenav-container class='app-sidenav-container'>
    <mat-sidenav mode="side" #sidenav opened disableClose class='app-sidenav'>
      <app-sidenav></app-sidenav>
    </mat-sidenav>
    <mat-sidenav-content class='app-sidenav-content'>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>`,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'GraphMe';
}
