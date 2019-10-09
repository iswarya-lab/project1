import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  cartDetails :any;
  total=0;

  constructor() { 
  }

  ngOnInit() {
  }
  getTotal(){
    for( let  i=0;  i <this.cartDetails.length; i++){
      this.total=this.total + this.cartDetails[i].Price ;
      }
    return this.total;
    }
  }
