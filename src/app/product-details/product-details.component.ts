import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  mydata :'any';
  constructor(private service: ProductDetailsService, private routing:Router) { }
 
  ngOnInit() {
       
        console.log(this.routing.url);
        let filter='';
        if(this.routing.url=='/electricals'){
          filter='Electricals';
        }
        else{
          filter='clothing';
        }
        this.service.getElectricalsProductsFromData() .subscribe((data:any)=>{
       this.mydata = data.filter (a =>a.Catogery == filter);
        console.log(this.mydata);
        });
  }
  Addtocart(data){
    this.service.addProductsTocart(data).subscribe((result)=>{
    console.log("updated successfully");
    })
  }

}
