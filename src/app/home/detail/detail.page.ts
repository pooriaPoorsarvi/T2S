import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  voices = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit() {
  }

}
