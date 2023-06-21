import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
 
})
export class SecondComponent implements OnInit {
  listItems: string[];
  newItem?: string;

  constructor(private Dataservice: DataService) {
    this.listItems = this.Dataservice.getList();
  }

  addItem(): void {
    if (this.newItem) {
      this.Dataservice.addItem(this.newItem);
      this.listItems = this.Dataservice.getList();
      this.newItem = ''; // Clear the input field
    }
  }  ngOnInit(): void {
  }

}
