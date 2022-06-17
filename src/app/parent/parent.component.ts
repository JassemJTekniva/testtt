import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  currentItem = "test";

  constructor() {}

  ngOnInit(): void {
    console.log(this.currentItem)
  }

  childEvent(value:string){
    this.currentItem+=value
  }
}
