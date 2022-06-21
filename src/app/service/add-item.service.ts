import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  item1 : Item={price:1.285,image:"https://img.phonandroid.com/2021/09/iPhone-13-3.jpg",title:'IPHONE 13',description:'iPhone 13 features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip.Pre-orders began on September 17, 2021.They were officially released on September 24, 2021.'}
  item2 : Item={price:380,image:"https://www.techlargest.com/wp-content/uploads/2020/12/OPPO-Reno-5-series.jpg",title:'OPPO RENO 5',description:'With the OPPO Reno Glow delivering a multi-dimensional iridescence, choosing between the Starry Black and Galactic Silver body means it’ll be an attractively shiny statement piece wherever you take it.'}
  item3 : Item={price:800,image:"https://img.phonandroid.com/2021/08/Samsung-Galaxy-Z-Flip3-01-1.jpg",title:'SAMSUNG GALAXY Z',description:'an Android-based foldable smartphone developed by Samsung Electronics as part of the Samsung Galaxy Z series.Its existence was first revealed in an advertisement during the 2020 Academy Awards.'}
  item4 : Item={price:3.499,image:"https://img.phonandroid.com/2022/05/Huawei-Mate-Xs-2-4.jpg",title:'HUAWEI MATE XS',description:'The Huawei Mate Xs runs Android 10 and is powered by a 4500mAh battery. The Huawei Mate Xs supports proprietary fast charging. The power button of HUAWEI Mate Xs is designed to integrate fingerprint recognition.  '}
  item5 : Item={price:1.399,image:"https://www.01net.com/app/uploads/2018/09/Apple-MacBook-Pro-13-i7-2.7-3-4-face.jpg",title:"MACBOOK PRO 13",description:'Apple MacBook Pro 13-inch 2020 is a macOS laptop with a 13.30-inch display that has a resolution of 1600x2560 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. Graphics are powered by Intel Integrated Iris Plus Graphics 645.'}
  item6 : Item={price:750.222,image:"https://i.ytimg.com/vi/V9WGgEulrQM/maxresdefault.jpg",title:'IPAD PRO 11',description:'Apple iPad Pro 11-inch (2021) Wi-Fi tablet was launched on 20th April 2021. The tablet comes with a 11.00-inch touchscreen display offering a resolution of 2388x1668 pixels. Apple iPad Pro 11-inch (2021) Wi-Fi is powered by a strong processor.'}
  item7 : Item={price:130.555,image:"https://m.media-amazon.com/images/I/81dR+J5nz9L._CR3,0,1914,1080_SR342,193__BG0,0,0__QL65_.jpg",title:'JBL FLIP 5',description:'Wireless Bluetooth streaming, 12 hours of playtime.IPX7 waterproof.Pair multiple speakers with party boost.Good JBL sound quality.Connector type: 3.5 millimeter stereo.Power source type: Battery powered; with Safety Sheet and Warranty Card.'}
  item8 : Item={price:100.999,image:"https://i.ytimg.com/vi/g02jZayNhfc/maxresdefault.jpg",title:'APPLE AIRPODS',description:'AirPods deliver the wireless headphone experience, reimagined. Just pull them out of the charging case and they are ready to use with your iPhone, Apple Watch, iPad, or Mac. After a simple one-tap setup, AirPods work like magic.Automatically on.'}
  items:Item[] = [this.item1,this.item2,this.item3,this.item4,this.item5,this.item6,this.item7,this.item8]

  constructor() { 
    }

  getItems(){
    return this.items
  }
  addTodo(item:Item){
    this.items.push(item)
  }


}
