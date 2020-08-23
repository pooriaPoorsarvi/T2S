import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.page.html',
  styleUrls: ['./examples.page.scss'],
})
export class ExamplesPage implements OnInit {

  versions = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit() {
  }

}
