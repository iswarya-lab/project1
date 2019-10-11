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
    cartDetails : any;


  ngOnInit() {
    this.mycart.getProductsFromCart().subscribe((result)=>{
    console.log(result);
    this.cartDetails=result;
    this.add();
    } )
    
  }
 add(){
    this.total=0;
    for( let  i=0;  i <this.cartDetails.length; i++){
      this.total = this.total + this.cartDetails[i].Price ;
      }
    }
  }
