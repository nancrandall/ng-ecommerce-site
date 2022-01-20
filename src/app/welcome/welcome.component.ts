import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = 'Welcome';
  creatorName : string = 'Nan Crandall';
  constructor() { }

  ngOnInit(): void {
  }

}
