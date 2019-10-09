import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   ProductDetails :  [
    {
      "id": 1,
      "mobile": "Ericson",
      "num": [
        "../../assets/images/1.jpg", "../../assets/images/2.jpg", "../../assets/images/3.jpg"
      ],
      "image": "../../../assets/images/1.jpg",
      "Price": 35000,
      "features": {
        "bluetooth": true,
        "wifi": false,
      }
    },
    {
      "id": 2,
      "mobile": "Vivo",
      "num": [
        "../../../assets/images/2.jpg", "../../../assets/images/4.jpg"
      ],
      "image": "../../../assets/images/2.jpg",
      "Price": 25000,
      "features": {
        "bluetooth": false,
        "wifi": true
      }
    },
    {
      "id": 3,
      "mobile": "one plus",
      "num": [
        "../../../assets/images/3.jpg"
      ],
      "image": "../../../assets/images/3.jpg",
      "Price": 45000,
      "features": {
        "bluetooth": true,
        "wifi": true
      }
    },
    {
      "id": 4,
      "mobile": "Iphone",
      "num": [
        "../../assets/images/4.jpg"
      ],
      "image": "../../assets/images/4.jpg",
      "Price": 85000,
      "features": {
        "bluetooth": true,
        "wifi": true
      },
    }
  ];
  data: any;
  constructor() {
   console.log(this.ProductDetails);
  }
   
  ngOnInit() {
 //   this.myService.getProductsFromCart()=> this.cartdea
    } 
    
@Input() detailFromParent;
@Output() cartQty = new EventEmitter();

}



