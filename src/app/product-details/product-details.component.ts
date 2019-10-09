import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private service: ProductDetailsService, private routing:Router) { }
 
  ngOnInit() {
        mydata: 'any';
        console.log(this.routing.url);
        let filter='';
        if(this.routing.url=='/electricals'){
          filter='Electricals';
        }
        else{
          filter='clothing';
        }
        this.service.getElectricalsProductsFromData() .subscribe((data:any)=>{
        let mydata = data.filter (a =>a.Catogery == filter);
        console.log(mydata);
        });
  }

}
