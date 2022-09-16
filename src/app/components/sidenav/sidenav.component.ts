import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links : string[] = ['home', 'ranking', 'apuestas', 'goleadores', 'micuenta']

  constructor() { }

  ngOnInit(): void {
  }

}
