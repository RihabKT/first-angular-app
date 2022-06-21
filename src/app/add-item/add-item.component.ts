import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddItemService } from '../service/add-item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item[]=[]

  constructor(private fb:FormBuilder, private addItemService: AddItemService) { }
addItemForm = this.fb.group({
  image:[''],
  price:[],
  title:[''],
  description:['']
})

  ngOnInit(): void {
  }

  onSubmit(){
    this.item.push(new Item())
  }

}
