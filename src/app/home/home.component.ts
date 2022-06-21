import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { AddItemService } from '../service/add-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Item[]
  public item:Item[]=[]


  constructor(private additem : AddItemService) {
    this.items=[]
   }

  ngOnInit(): void {
    this.items = this.additem.getItems();

  }
  deleteItem(event:any){
    var element = event.target;
    element.parentElement.parentElement.parentElement.innerHTML="";
  }
  addItem(){
    this.item.push(new Item())
  }


}
