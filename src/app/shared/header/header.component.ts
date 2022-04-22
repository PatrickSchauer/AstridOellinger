import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {
      title: 'Home',
      link: 'home',
    },
    {
      title: 'Mediation',
      link: 'mediation',
    },
    {
      title: 'Coaching',
      link: 'coaching',
    },
    {
      title: 'Unternehmensberatung',
      link: 'unternehmensberatung',
    },
    {
      title: 'Über mich',
      link: 'ueber-mich',
    },
    {
      title: 'Kontakt',
      link: 'kontakt',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
