import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'About us', url: '/about-us', icon: 'person' },
    { title: 'Contact us', url: '/contact-us', icon: 'chatbubbles' },
    { title: 'Visit our website', url: '/visit', icon: 'settings' },
    { title: 'Share the app', url: '/share', icon: 'share-social' },
  ];
  constructor() {}
}
