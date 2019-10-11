import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailsService {
    
    constructor(private http: HttpClient){

    }
    getElectricalsProductsFromData (){
        return this.http.get('http://localhost:3000/data');
    }
    addProductsTocart(data){
        return this.http.post('http://localhosat:3001/cart',data);
    }
    getProductsFromCart(){
        return this.http.get('http://localhost:3001/cart');
    }

}