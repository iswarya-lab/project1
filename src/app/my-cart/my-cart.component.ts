import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  total:any;
  constructor(private mycart : ProductDetailsService) { }
    cartdetails :any;


  ngOnInit() {
    this.mycart.getProductsFromcart().subscribe((result) =>{
    console.log(result);
    this.cartdetails=result;
    this.add();
    })
  }

 add(){
    this.total=0;
    for(let i=0; i < this.cartdetails.length; i++) 
    {
    this.total=parseInt(this.total) + parseInt(this.cartdetails[i].Price);
   
      }
    }
  }
