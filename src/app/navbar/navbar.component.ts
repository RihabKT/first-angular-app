import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    alert("DO YOU WANT TO LOGOUT?")
  }

  hideButton(){
    let i : number;
    var btn = Array.from(document.getElementsByClassName('btn btn-warning') as HTMLCollectionOf<HTMLElement>)
  
     
      for(i=0;i<btn.length;i++)
      {
          btn[i].style.display="initial";
      }
  }
  


}
