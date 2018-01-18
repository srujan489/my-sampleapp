import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ViewChild('t') t;
  ngAfterViewInit() {
    //console.log(this.t);
    this.t.select('summary');
  }
  constructor() { }

  ngOnInit() {
  }

}
