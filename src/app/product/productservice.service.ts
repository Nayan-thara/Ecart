import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  search = new BehaviorSubject("")


  constructor(private httpclient: HttpClient) { }
  //http req
  ViewAllProducts() {
    return this.httpclient.get("http://localhost:3000/products")
  }
  addProduct(newproduct: any) {
    return this.httpclient.post("http://localhost:3000/products", newproduct)

  }
  //to get single porduct data
  viewproduct(id: any) {
    return this.httpclient.get("http://localhost:3000/products/" + id)
  }

  //to delete
  deleteproduct(id: any) {
    return this.httpclient.delete("http://localhost:3000/products/" + id)
  }

  //edit product
  updateProduct(id: any, data: any) {
    return this.httpclient.put("http://localhost:3000/products/" + id, data)
  }
}

